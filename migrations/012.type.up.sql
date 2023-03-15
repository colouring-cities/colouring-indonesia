-- Building attachment, ENUM: Detached, Semi-detached, End-Terrace, Mid-Terrace
-- CREATE TYPE building_attachment_form
-- AS ENUM ('Detached',
--     'Semi-Detached',
--     'End-Terrace',
--     'Mid-Terrace');
-- ALTER TABLE buildings
--     ADD COLUMN IF NOT EXISTS building_attachment_form building_attachment_form;
-- [Disabled for launch] Date of change of use
-- This needs to pair with demolition
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS date_change_building_use smallint;

CREATE TABLE IF NOT EXISTS reference_tables.building_attachment_form_classification (
    building_attachment_form_id serial PRIMARY KEY,
    description_en VARCHAR(128) NOT NULL,
    description_id VARCHAR(128) NOT NULL
);

TRUNCATE TABLE reference_tables.building_attachment_form_classification RESTART IDENTITY CASCADE;

INSERT INTO
    reference_tables.building_attachment_form_classification (description_en, description_id)
VALUES
    ('Detached', 'Terpisah'),
    ('Semi-Detached', 'Sebagian Terpisah'),
    ('End-Terrace', 'Bagian Belakang Terpisah'),
    ('Mid-Terrace', 'Di Tengah Teras');

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS building_attachment_form integer,
ADD
    FOREIGN KEY (building_attachment_form) REFERENCES reference_tables.building_attachment_form_classification (building_attachment_form_id);