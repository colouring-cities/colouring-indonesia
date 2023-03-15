ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS has_extension boolean null;

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS extension_year smallint;

-- ALTER TABLE buildings ADD COLUMN IF NOT EXISTS developer_type varchar;
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS developer_name text [];

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS developer_source_link text [];

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS designers text [];

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS designers_source_link text [];

-- ALTER TABLE buildings ADD COLUMN IF NOT EXISTS lead_designer_type varchar;
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS designer_awards boolean null;

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS awards_source_link text [];

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS builder text [];

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS builder_source_link text [];

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS other_team text [];

ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS other_team_source_link text [];

CREATE TABLE IF NOT EXISTS reference_tables.developer_type_classification (
    developer_type_id serial PRIMARY KEY,
    description_en VARCHAR(128) NOT NULL,
    description_id VARCHAR(128) NOT NULL
);

-- ALTER TABLE reference_tables.developer_type_classification DISABLE TRIGGER ALL;
TRUNCATE TABLE reference_tables.developer_type_classification RESTART IDENTITY;

INSERT INTO
    reference_tables.developer_type_classification (description_en, description_id)
VALUES
    ('Landowner', 'Landowner'),
    ('Speculative builder', 'Speculative builder'),
    (
        'Government architecture department',
        'Government architecture department'
    ),
    (
        'Architect/ architectural firm',
        'Architect/ architectural firm'
    ),
    ('Engineering firm', 'Engineering firm'),
    ('Other', 'Other');

-- ALTER TABLE reference_tables.developer_type_classification ENABLE TRIGGER ALL;
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS developer_type integer,
ADD
    FOREIGN KEY (developer_type) REFERENCES reference_tables.developer_type_classification (developer_type_id);

CREATE TABLE IF NOT EXISTS reference_tables.lead_designer_type_classification (
    lead_designer_type_id serial PRIMARY KEY,
    description_en VARCHAR(128) NOT NULL,
    description_id VARCHAR(128) NOT NULL
);

-- ALTER TABLE reference_tables.developer_type_classification DISABLE TRIGGER ALL;
TRUNCATE TABLE reference_tables.lead_designer_type_classification RESTART IDENTITY;

INSERT INTO
    reference_tables.lead_designer_type_classification (description_en, description_id)
VALUES
    ('State', 'Negara'),
    ('Charity', 'Amal'),
    (
        'Community/ Cooperative',
        'Komunitas/ Koperasi'
    ),
    (
        'Other non-profit body',
        'Badan nirlaba lainnya'
    ),
    (
        'Private (individual)',
        'Privasi (individu)'
    ),
    (
        'Private (company/estate)',
        'Swasta (perusahaan/ estat)'
    ),
    ('Religious body', 'Badan keagamaan'),
    ('Other', 'Lainnya');

-- ALTER TABLE reference_tables.developer_type_classification ENABLE TRIGGER ALL;
ALTER TABLE
    buildings
ADD
    COLUMN IF NOT EXISTS lead_designer_type integer,
ADD
    FOREIGN KEY (lead_designer_type) REFERENCES reference_tables.lead_designer_type_classification (lead_designer_type_id);