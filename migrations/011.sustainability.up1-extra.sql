-- Remove sustainability fields, update in paralell with adding new fields
-- Last significant retrofit date YYYY
-- Need to add a constraint to sust_retrofit_date
ALTER TABLE buildings
    ADD CONSTRAINT sust_retrofit_date_end CHECK (sust_retrofit_date <= DATE_PART('year', CURRENT_DATE));

--Has a building had a major renovation without extenstion (captured in form)
--Boolean yes/no - links to the the DATE
ALTER TABLE buildings
    ADD COLUMN IF NOT EXISTS sust_retrofitted boolean DEFAULT 'n';

-- Renewal technologies
-- Constraint - Front end multi select back end ENUM
-- Values: Solar PV, Solar thermal, Wind, Ground sourced heat pump, Air sourced heat pump,
-- CREATE TYPE sust_renewables_tech
-- AS ENUM ('Solar photovoltaic',
--     'Solar thermal',
--     'Wind',
--     'Ground source heat pump',
--     'Air-source heat pump',
--     'Water source heat pump',
--     'Anaerobic digester');

-- ALTER TABLE buildings
--     ADD COLUMN IF NOT EXISTS sust_renewables_tech sust_renewables_tech DEFAULT NULL;
    


CREATE TABLE IF NOT EXISTS reference_tables.sust_renewables_tech_classification (
    sust_renewables_tech_id serial PRIMARY KEY,
    description_en VARCHAR(128) NOT NULL,
    description_id VARCHAR(128) NOT NULL
);

TRUNCATE TABLE reference_tables.sust_renewables_tech_classification RESTART IDENTITY CASCADE;

INSERT INTO
    reference_tables.sust_renewables_tech_classification (description_en, description_id)
VALUES
    ('Solar photovoltaic', 'Solar photovoltaic'),
    ('Solar thermal', 'Solar thermal'),
    ('Wind', 'Wind'),
    ('Ground source heat pump', 'Ground source heat pump'),
    ('Air-source heat pump', 'Air-source heat pump'),
    ('Water source heat pump',  'Water source heat pump'),
    ('Anaerobic digester', 'Anaerobic digester');

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS sust_renewables_tech integer,
ADD
    FOREIGN KEY (sust_renewables_tech) REFERENCES reference_tables.sust_renewables_tech_classification (sust_renewables_tech_id);



-- Generating capacity of those renewables, on selection of one of the above generate correspondening front end input for this. Pair values
-- Constraint more than 0 less than 9999
ALTER TABLE buildings
    ADD COLUMN IF NOT EXISTS sust_renewables_capax int CONSTRAINT high_renewables_capx CHECK (sust_renewables_capax >= 0);

-- Biodiversity
-- Green roof, green wall, both
-- Constrain drop down and enum
-- CREATE TYPE sust_biodiversity
-- AS ENUM ('Green roof',
--     'Green wall',
--     'Green wall & roof',
--     'Anaerobic digester');

-- ALTER TABLE buildings
--     ADD COLUMN IF NOT EXISTS sust_biodiversity sust_biodiversity DEFAULT NULL;




CREATE TABLE IF NOT EXISTS reference_tables.sust_biodiversity_classification (
    sust_biodiversity_id serial PRIMARY KEY,
    description_en VARCHAR(128) NOT NULL,
    description_id VARCHAR(128) NOT NULL
);

TRUNCATE TABLE reference_tables.sust_biodiversity_classification RESTART IDENTITY CASCADE;

INSERT INTO
    reference_tables.sust_biodiversity_classification (description_en, description_id)
VALUES
    ('Green roof', 'Green roof'),
    ('Green wall', 'Green wall'),
    ('Green wall & roof', 'Green wall & roof'),
    ('Anaerobic digester', 'Anaerobic digester');

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS sust_biodiversity integer,
ADD
    FOREIGN KEY (sust_biodiversity) REFERENCES reference_tables.sust_biodiversity_classification (sust_biodiversity_id);



-- Insulation, tool tip for glazing in construction to cross link
-- Which components are insulated
-- Cosntraint multi-entry and ENUM stored in josnb object
-- Values; Wall, Roof, FLOOR
-- CREATE TYPE constrctn_insulation
-- AS ENUM ('Cavity wall',
--     'External wall',
--     'Roof',
--     'Floor');

-- ALTER TABLE buildings
--     ADD COLUMN IF NOT EXISTS constrctn_insulation constrctn_insulation DEFAULT NULL;



CREATE TABLE IF NOT EXISTS reference_tables.constrctn_insulation_classification (
    constrctn_insulation_id serial PRIMARY KEY,
    description_en VARCHAR(128) NOT NULL,
    description_id VARCHAR(128) NOT NULL
);

TRUNCATE TABLE reference_tables.constrctn_insulation_classification RESTART IDENTITY CASCADE;

INSERT INTO
    reference_tables.constrctn_insulation_classification (description_en, description_id)
VALUES
    ('Cavity wall', 'Cavity wall'),
    ('External wall', 'External wall'),
    ('Roof', 'Roof'),
    ('Floor', 'Floor');

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS constrctn_insulation integer,
ADD
    FOREIGN KEY (constrctn_insulation) REFERENCES reference_tables.constrctn_insulation_classification (constrctn_insulation_id);




-- Water recycling
-- yes / no
ALTER TABLE buildings
    ADD COLUMN IF NOT EXISTS sust_h2o_recyling boolean DEFAULT 'n';

-- Rain water harvesting
-- Does building store it's rainwater, helps combat flood risk
-- yes / no
ALTER TABLE buildings
    ADD COLUMN IF NOT EXISTS sust_rainwater_harvest boolean DEFAULT 'n';
