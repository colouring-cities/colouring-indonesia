-- equivalent to 015 migration
INSERT INTO reference_tables.landuse_classifications
(landuse_id, description_en, description_id, level, parent_id, is_used)
VALUES
-- group
('U071X','Garden buildings','Garden buildings','group','U070',True);


-- equivalent to 016 migration
INSERT INTO reference_tables.buildings_landuse_group
(landuse_id, description_en, description_id, parent_order_id)
VALUES
-- group
('U071X','Garden buildings','Garden buildings', 'U070');
