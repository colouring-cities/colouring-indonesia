# Extract, transform and load

The scripts in this directory are used to extract, transform and load (ETL) the core datasets for Colouring Indonesia. This README acts as a guide for setting up the Colouring Indonesia database with these datasets and updating it.

# Contents

- :arrow_down: [Downloading Ordnance Survey data](#arrow_down-downloading-ordnance-survey-data)
- :penguin: [Making data available to Ubuntu](#penguin-making-data-available-to-ubuntu)
- :new_moon: [Creating a Colouring Indonesia database from scratch](#new_moon-creating-a-colouring-Indonesia-database-from-scratch)
- :full_moon: [Updating the Colouring Indonesia database with new OS data](#full_moon-updating-the-colouring-Indonesia-database-with-new-os-data)

# :arrow_down: Downloading Ordnance Survey data

The building geometries are sourced from Ordnance Survey (OS) MasterMap (Topography Layer).

1. Sign up for the Ordnance Survey [Data Exploration License](https://www.ordnancesurvey.co.uk/business-government/licensing-agreements/data-exploration-sign-up). You should receive an e-mail with a link to log in to the platform (this could take  up to a week).
2. Navigate to https://orders.ordnancesurvey.co.uk/orders and click the button for: ✏️ Order. From here you should be able to click another button to add a product.
3. Drop a rectangle or Polygon over Indonesia and make the following selections, clicking the "Add to basket" button for each:

![](screenshot/MasterMap.png)
<p></p>

4. You should be then able to check out your basket and download the files. Note: there may be multiple `.zip` files to download for MasterMap due to the size of the dataset.
6. Unzip the MasterMap `.zip` files and move all the `.gz` files from each to a single folder in a convenient location. We will use this folder in later steps.

# :penguin: Making data available to Ubuntu

Before creating or updating a Colouring Indonesia database, you'll need to make sure the downloaded OS files are available to the Ubuntu machine where the database is hosted.

If you are using Virtualbox, you could host share folder(s) containing the OS files with the VM (e.g. [see these instructions for Mac](https://medium.com/macoclock/share-folder-between-macos-and-ubuntu-4ce84fb5c1ad)).

For a production server hosted on a cloud computing platform (e.g. Azure), you could [use SCP](https://uoa-eresearch.github.io/vmhandbook/doc/copy-file-linux.html).

# :new_moon: Creating a Colouring Indonesia database from scratch

You should already have set up PostgreSQL and created a database in an Ubuntu environment. If not, follow one of the linked guides: [setup dev environment](../docs/setup-dev-environment.md) or [setup prod environment](../docs/setup-production-environment.md). Open a terminal in Ubuntu and create the environment variables to use `psql` if you haven't already:

```bash
export PGPASSWORD=<pgpassword>
export PGUSER=<username>
export PGHOST=localhost
export PGDATABASE=<colouringIndonesiadb>
```

Create the core database tables:

```bash
cd ~/colouring-Indonesia
psql < migrations/001.core.up.sql
```

There is some performance benefit to creating indexes after bulk loading data.
Otherwise, it's fine to run all the migrations at this point and skip the index
creation steps below.

You should already have installed GNU parallel, which is used to speed up loading bulk data.

Move into the `etl` directory and set execute permission on all scripts.

```bash
cd ~/colouring-Indonesia/etl
chmod +x *.sh
```

Extract the MasterMap data (this step could take a while).

```bash
sudo ./extract_mastermap.sh /path/to/mastermap_dir
```

Filter MasterMap 'building' polygons.

```bash
sudo ./filter_transform_mastermap_for_loading.sh /path/to/mastermap_dir
```

Load all geometries. Note: you should ensure that `mastermap_dir` has permissions that will allow the linux `find` command to work without using sudo.

```bash
./load_geometries.sh /path/to/mastermap_dir
```

Index geometries.

```bash
psql < ../migrations/002.index-geometries.up.sql
```

Drop geometries outside Indonesia boundary.

```bash
cd ~/colouring-Indonesia/app/public/geometries
ogr2ogr -t_srs EPSG:3857 -f "ESRI Shapefile" boundary.shp boundary-detailed.geojson
cd ~/colouring-Indonesia/etl/
./drop_outside_limit.sh ~/colouring-Indonesia/app/public/geometries/boundary.shp
```

Create a building record per outline.

```bash
./create_building_records.sh
```

Run the remaining migrations in `../migrations` to create the rest of the database structure.

```bash
ls ~/colouring-Indonesia/migrations/*.up.sql 2>/dev/null | while read -r migration; do psql < $migration; done;
```

# :full_moon: Updating the Colouring Indonesia database with new OS data

In the Ubuntu environment where the database exists, set up the environment variables to make the following steps simpler.
```bash
export PGPASSWORD=<pgpassword>
export PGUSER=<username>
export PGHOST=localhost
export PGDATABASE=<colouringIndonesiadb>
```

First make sure to run `git pull` to catch any code changes and run any new database migrations from `../migrations` added since the last time the db was updated.

Move into the `etl` directory and set execute permission on all scripts.

```bash
cd ~/colouring-Indonesia/etl
chmod +x *.sh
```

Extract the new MasterMap data (this step could take a while).

```bash
sudo ./extract_mastermap.sh /path/to/mastermap_dir
```

Filter MasterMap 'building' polygons.

```bash
sudo ./filter_transform_mastermap_for_loading.sh /path/to/mastermap_dir
```

Load all new geometries. This step will only load geometries that are not already present (based on the `TOID`). Note: you should ensure that `mastermap_dir` has permissions that will allow the linux `find` command to work without using sudo.

```bash
./load_new_geometries.sh /path/to/mastermap_dir
```

Drop new geometries outside Indonesia boundary.

```bash
cd ~/colouring-Indonesia/app/public/geometries
ogr2ogr -t_srs EPSG:3857 -f "ESRI Shapefile" boundary.shp boundary-detailed.geojson
cd ~/colouring-Indonesia/etl/
./drop_outside_limit_new_geometries.sh ~/colouring-Indonesia/app/public/geometries/boundary.shp
```

Add new geometries to existing geometries table.

```bash
./add_new_geometries.sh 
```

Create building record to match each new geometry that doesn't already have a linked building.

```bash
./create_new_building_records.sh 
```

Mark buildings with geometries not present in the update as demolished.

```bash
./mark_demolitions.sh
```

#### On a production server

**TODO:** Update this after PR [#794](https://github.com/colouring-cities/colouring-Indonesia/pull/794)

Run the Colouring Indonesia [deployment scripts](https://github.com/colouring-cities/colouring-Indonesia-config#deployment).