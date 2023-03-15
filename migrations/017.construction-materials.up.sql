-- Launch of Construction category
-- Fields: Core construction material, Secondary construction materials, Roof covering materials
-- Construction materials: Wood, Stone, Brick, Steel, Reinforced Concrete, Other Metal
--   Other Natural Material, Other Man-Made Material
-- CREATE TYPE construction_materials
--     AS ENUM (
--         'Wood',
--         'Stone',
--         'Brick',
--         'Steel',
--         'Reinforced Concrete',
--         'Other Metal',
--         'Other Natural Material',
--         'Other Man-Made Material'
--     );
-- -- Roof covering materials: Slate, Clay Tile, Wood, Asphalt, Iron or Steel, Other Metal
-- --   Other Natural Material, Other Man-Made Material
-- CREATE TYPE roof_covering
--     AS ENUM (
--         'Slate',
--         'Clay Tile',
--         'Wood',
--         'Asphalt',
--         'Iron or Steel',
--         'Other Metal',
--         'Other Natural Material',
--         'Other Man-Made Material'
--     );
-- -- Core Construction Material
-- ALTER TABLE buildings
--     ADD COLUMN IF NOT EXISTS construction_core_material construction_materials;
-- -- Secondary Construction Materials
-- ALTER TABLE buildings
--     ADD COLUMN IF NOT EXISTS construction_secondary_materials construction_materials;
-- -- Main Roof Covering
-- ALTER TABLE buildings
--     ADD COLUMN IF NOT EXISTS construction_roof_covering roof_covering;
CREATE TABLE IF NOT EXISTS reference_tables.construction_roof_covering_classification (
    construction_roof_covering_id serial PRIMARY KEY,
    description_en VARCHAR(128) NOT NULL,
    description_id VARCHAR(128) NOT NULL
);

TRUNCATE TABLE reference_tables.construction_roof_covering_classification RESTART IDENTITY CASCADE;

INSERT INTO
    reference_tables.construction_roof_covering_classification (description_en, description_id)
VALUES
    ('Slate', 'Slate'),
    ('Clay Tile', 'Clay Tile'),
    ('Wood', 'Wood'),
    ('Asphalt', 'Asphalt'),
    ('Iron or Steel', 'Iron or Steel'),
    ('Other Metal', 'Other Metal'),
    (
        'Other Natural Material',
        'Other Natural Material'
    ),
    (
        'Other Man-Made Material',
        'Other Man-Made Material'
    );

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS construction_roof_covering integer,
ADD
    FOREIGN KEY (construction_roof_covering) REFERENCES reference_tables.construction_roof_covering_classification (construction_roof_covering_id);

CREATE TABLE IF NOT EXISTS reference_tables.construction_materials_classification (
    construction_materials_id serial PRIMARY KEY,
    description_en VARCHAR(128) NOT NULL,
    description_id VARCHAR(128) NOT NULL
);

TRUNCATE TABLE reference_tables.construction_materials_classification RESTART IDENTITY CASCADE;

INSERT INTO
    reference_tables.construction_materials_classification (description_en, description_id)
VALUES
    ('Wood', 'Wood'),
    ('Stone', 'Stone'),
    ('Brick', 'Brick'),
    ('Steel', 'Steel'),
    ('Reinforced Concrete', 'Reinforced Concrete'),
    ('Other Metal', 'Other Metal'),
    (
        'Other Natural Material',
        'Other Natural Material'
    ),
    (
        'Other Man-Made Material',
        'Other Man-Made Material'
    );

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS construction_core_material integer,
ADD
    FOREIGN KEY (construction_core_material) REFERENCES reference_tables.construction_materials_classification (construction_materials_id);

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS construction_secondary_materials integer,
ADD
    FOREIGN KEY (construction_secondary_materials) REFERENCES reference_tables.construction_materials_classification (construction_materials_id);