import db from '../../db';

interface MultiLingualOption {
    // value: string;
    // label: string;
    language: string;
}


interface MultiLingualLabel {
    // label: string;
    // language: string;
}
// type GetMultiLingualOptionsFn = (language: string) => Promise<MultiLingualOption[]>;
type GetMultiLingualOptionsFn = (language: string) => Promise<MultiLingualOption[]>;

const multiLingualFunctionMap: { [fieldName: string]: GetMultiLingualOptionsFn } = {

    // current_landuse_ground_floor: getLanduseOptions,
    // current_landuse_floor: getLanduseOptions,

    // type_class: getTypeOptions,
    // side_distances: getSideDistancesOptions,

    // year_built: getYearBuiltOptions,
    // date_source: getDateSourceOptions,



    construction_core_material: getConstructionMaterialOptions,
    construction_secondary_materials: getConstructionSecondaryMaterialOptions,
    construction_roof_covering: getRoofOptions,
    sust_breeam_rating: getSustBreeamRatingOptions,
    building_attachment_form: getBuildingAttachmentFormOptions,
    date_source: getDateSourceOptions,
    developer_type: getDeveloperTypeOptions,
    lead_designer_type: getLeadDesignerTypeOptions,
    // construction_front_cover_material: getCoverMaterialOptions,
    // construction_side_cover_material: getCoverMaterialOptions,

    // noise_level: getNoiseLevelOptions,

    // preservation_designation: getPreservationDesignationOptions,
    // monument_designation: getMonumentDesignationOptions,



    // building_state: getBuildingStateOptions,

    // ownership_type: getOwnershipOptions,
};

type GetMultiLingualLabelFn = (id: number, language: string) => Promise<MultiLingualLabel>;

const multiLingualLabelFunctionMap: { [fieldName: string]: GetMultiLingualLabelFn } = {

    // current_landuse_ground_floor: getLanduseLabel,
    // current_landuse_floor: getLanduseLabel,

    // type_class: getTypeLabel,
    // side_distances: getSideDistancesLabel,

    // year_built: getYearBuiltLabel,
    // date_source: getDateSourceLabel,

    construction_core_material: getConstructionMaterialLabel,
    construction_secondary_materials: getConstructionSecondaryMaterialLabel,
    construction_roof_covering: getRoofLabel,
    sust_breeam_rating: getSustBreeamRatingLabel,
    building_attachment_form: getBuildingAttachmentFormLabel,
    date_source: getDateSourceLabel,
    developer_type: getDeveloperTypeLabel,
    lead_designer_type: getLeadDesignerTypeLabel,
    // construction_front_cover_material: getCoverMaterialLabel,
    // construction_side_cover_material: getCoverMaterialLabel,

    // noise_level: getNoiseLevelLabel,

    // preservation_designation: getPreservationDesignationLabel,
    // monument_designation: getMonumentDesignationLabel,




    // building_state: getBuildingStateLabel,

    // ownership_type: getOwnershipLabel,
};



function getConstructionMaterialOptions(language: string = 'id') {
    switch (language) {
        case 'id':
            return db.manyOrNone(
                `SELECT
                construction_materials_id AS value,
                    description_id AS label
                    FROM reference_tables.construction_materials_classification`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                construction_materials_id AS value,
                description_en AS label
                FROM reference_tables.construction_materials_classification`
            );
            break;
    }
}
function getConstructionSecondaryMaterialOptions(language: string = 'id') {
    switch (language) {
        case 'id':
            return db.manyOrNone(
                `SELECT
                construction_materials_id AS value,
                    description_id AS label
                    FROM reference_tables.construction_materials_classification`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                construction_materials_id AS value,
                description_en AS label
                FROM reference_tables.construction_materials_classification`
            );
            break;
    }
}
function getRoofOptions(language: string = 'id') {
    switch (language) {
        case 'id':
            return db.manyOrNone(
                `SELECT
                construction_roof_covering_id AS value,
                    description_id AS label
                    FROM reference_tables.construction_roof_covering_classification`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                construction_roof_covering_id AS value,
                description_en AS label
                FROM reference_tables.construction_roof_covering_classification`
            );
            break;
    }
}

function getSustBreeamRatingOptions(language: string = 'id') {
    switch (language) {
        case 'id':
            return db.manyOrNone(
                `SELECT
                sust_breeam_rating_id AS value,
                    description_id AS label
                    FROM reference_tables.sust_breeam_rating_classification`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                sust_breeam_rating_id AS value,
                description_en AS label
                FROM reference_tables.sust_breeam_rating_classification`
            );
            break;
    }
}
function getBuildingAttachmentFormOptions(language: string = 'id') {
    switch (language) {
        case 'id':
            return db.manyOrNone(
                `SELECT
                building_attachment_form_id AS value,
                    description_id AS label
                    FROM reference_tables.building_attachment_form_classification`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                building_attachment_form_id AS value,
                description_en AS label
                FROM reference_tables.building_attachment_form_classification`
            );
            break;
    }
}
function getDateSourceOptions(language: string = 'id') {
    switch (language) {
        case 'id':
            return db.manyOrNone(
                `SELECT
                date_source_id AS value,
                    description_id AS label
                    FROM reference_tables.date_source_classification`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                date_source_id AS value,
                description_en AS label
                FROM reference_tables.date_source_classification`
            );
            break;
    }
}
function getDeveloperTypeOptions(language: string = 'id') {
    switch (language) {
        case 'id':
            return db.manyOrNone(
                `SELECT
                developer_type_id AS value,
                    description_id AS label
                    FROM reference_tables.developer_type_classification`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                developer_type_id AS value,
                description_en AS label
                FROM reference_tables.developer_type_classification`
            );
            break;
    }
}
function getLeadDesignerTypeOptions(language: string = 'id') {
    switch (language) {
        case 'id':
            return db.manyOrNone(
                `SELECT
                lead_designer_type_id AS value,
                    description_id AS label
                    FROM reference_tables.lead_designer_type_classification`
            );
            break;
        default:
            return db.manyOrNone(
                `SELECT
                lead_designer_type_id AS value,
                description_en AS label
                FROM reference_tables.lead_designer_type_classification`
            );
            break;
    }
}














function getConstructionMaterialLabel(id: number, language: string = 'id') {
    switch (language) {
        case 'id':
            return db.manyOrNone(
                `SELECT
                    description_id AS label
                FROM reference_tables.construction_materials_classification
                WHERE construction_materials_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.construction_materials_classification
                WHERE construction_materials_id = $1`, [id]
            );
            break;
    }
}
function getConstructionSecondaryMaterialLabel(id: number, language: string = 'id') {
    switch (language) {
        case 'id':
            return db.manyOrNone(
                `SELECT
                    description_id AS label
                FROM reference_tables.construction_materials_classification
                WHERE construction_materials_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.construction_materials_classification
                WHERE construction_materials_id = $1`, [id]
            );
            break;
    }
}
function getRoofLabel(id: number, language: string = 'id') {
    switch (language) {
        case 'id':
            return db.manyOrNone(
                `SELECT
                    description_id AS label
                FROM reference_tables.construction_roof_covering_classification
                WHERE construction_roof_covering_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.construction_roof_covering_classification
                WHERE construction_roof_covering_id = $1`, [id]
            );
            break;
    }
}
function getSustBreeamRatingLabel(id: number, language: string = 'id') {
    switch (language) {
        case 'id':
            return db.manyOrNone(
                `SELECT
                    description_id AS label
                FROM reference_tables.sust_breeam_rating_classification
                WHERE sust_breeam_rating_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.sust_breeam_rating_classification
                WHERE sust_breeam_rating_id = $1`, [id]
            );
            break;
    }
}
function getBuildingAttachmentFormLabel(id: number, language: string = 'id') {
    switch (language) {
        case 'id':
            return db.manyOrNone(
                `SELECT
                    description_id AS label
                FROM reference_tables.building_attachment_form_classification
                WHERE building_attachment_form_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.building_attachment_form_classification
                WHERE building_attachment_form_id = $1`, [id]
            );
            break;
    }
}
function getDateSourceLabel(id: number, language: string = 'id') {
    switch (language) {
        case 'id':
            return db.manyOrNone(
                `SELECT
                    description_id AS label
                FROM reference_tables.date_source_classification
                WHERE date_source_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.date_source_classification
                WHERE date_source_id = $1`, [id]
            );
            break;
    }
}
function getDeveloperTypeLabel(id: number, language: string = 'id') {
    switch (language) {
        case 'id':
            return db.manyOrNone(
                `SELECT
                    description_id AS label
                FROM reference_tables.developer_type_classification
                WHERE developer_type_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.developer_type_classification
                WHERE developer_type_id = $1`, [id]
            );
            break;
    }
}
function getLeadDesignerTypeLabel(id: number, language: string = 'id') {
    switch (language) {
        case 'id':
            return db.manyOrNone(
                `SELECT
                    description_id AS label
                FROM reference_tables.lead_designer_type_classification
                WHERE lead_designer_type_id = $1`, [id]
            );
            break;

        default:
            return db.manyOrNone(
                `SELECT
                    description_en AS label
                FROM reference_tables.lead_designer_type_classification
                WHERE lead_designer_type_id = $1`, [id]
            );
            break;
    }
}


export function getMultiLingualOptions(fieldName: string, language: string) {
    const optionsFn = multiLingualFunctionMap[fieldName];

    if (optionsFn == undefined) {
        throw new Error(`multilingual options not available for field '${fieldName}'`);
    }

    return optionsFn(language);
}


export function getMultiLingualLabel(fieldName: string, id: number, language: string) {
    const labelFn = multiLingualLabelFunctionMap[fieldName];

    if (labelFn == undefined) {
        throw new Error(`Error`);
    }

    return labelFn(id, language);
}
