-- Remove community fields
-- Ownership type, enumerate type from:
--
-- CREATE TYPE ownership_type
-- AS ENUM ('Private individual',
--     'Private company',
--     'Private offshore ownership',
--     'Publicly owned',
--     'Institutionally owned');
-- ALTER TABLE buildings
--     ADD COLUMN IF NOT EXISTS ownership_type ownership_type DEFAULT 'Private individual';
-- Ownership perception, would you describe this as a community asset?
-- Boolean yes / no
-- Below accepts t/f, yes/no, y/n, 0/1 as valid inputs all of which
-- ALTER TABLE buildings
--     ADD COLUMN IF NOT EXISTS ownership_perception boolean DEFAULT null;
-- Historic ownership type / perception
-- Has this building ever been used for community or public services activities?
-- Boolean yes / no
-- ALTER TABLE buildings
--     ADD COLUMN IF NOT EXISTS ownership_historic boolean DEFAULT null;
ALTER TABLE
    building_user_attributes
ADD
    COLUMN IF NOT EXISTS community_type_worth_keeping BOOLEAN NULL;

ALTER TABLE
    building_user_attributes
ADD
    COLUMN IF NOT EXISTS community_type_worth_keeping_reasons JSONB DEFAULT '{}' :: JSONB;

ALTER TABLE
    building_user_attributes
ADD
    COLUMN IF NOT EXISTS community_local_significance BOOLEAN DEFAULT false;

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS community_local_significance_total INT DEFAULT 0;

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS community_activities BOOLEAN NULL;

-- CREATE TYPE public_ownership_type
--     AS ENUM (
--         'State-owned',
--         'Charity-owned',
--         'Community-owned/cooperative',
--         'Owned by other non-profit body',
--         'Not in public/community ownership'
--     );
-- ALTER TABLE buildings
-- ADD COLUMN community_public_ownership public_ownership_type;
CREATE TABLE IF NOT EXISTS reference_tables.public_ownership_type_classification (
    public_ownership_type_id serial PRIMARY KEY,
    description_en VARCHAR(128) NOT NULL,
    description_id VARCHAR(128) NOT NULL
);
ALTER TABLE reference_tables.public_ownership_type_classification DISABLE TRIGGER ALL;
TRUNCATE TABLE reference_tables.public_ownership_type_classification RESTART IDENTITY;

INSERT INTO
    reference_tables.public_ownership_type_classification (description_en, description_id)
VALUES
    ('Government-owned','Kepemilikan Pemerintah'),
    ('Charity-owned', 'Kepemilikan Badan Amal'),
    (
        'Community-owned/ cooperative',
        'Kepemilikan Masyarakat/ Koperasi'
    ),
    (
        'Owned by other non-profit body',
        'Dimiliki Badan Nirlaba'
    ),
    (
        'Not in public/ community ownership',
        'Bukan Kepemilikan Publik/ Masyarakat'
    );
ALTER TABLE reference_tables.public_ownership_type_classification ENABLE TRIGGER ALL;
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS public_ownership_type integer,
ADD
    FOREIGN KEY (public_ownership_type) REFERENCES reference_tables.public_ownership_type_classification (public_ownership_type_id);

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS community_public_ownership_sources VARCHAR [];