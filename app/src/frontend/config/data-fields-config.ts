import { Category } from './categories-config';


/**
 * This interface is used only in code which uses dataFields, not in the dataFields definition itself
 * Cannot make dataFields an indexed type ({[key: string]: DataFieldDefinition}),
 * because then we wouldn't have type-checking for whether a given key exists on dataFields,
 * e.g. dataFields.foo_bar would not be highlighted as an error.
 */
export interface DataFieldDefinition {
    /**
     * The primary category to which the field belongs.
     * 
     * A field could be displayed in several categories, but this value will be used
     * when a single category needs to be shown in the context of a field, e.g.
     * in the case of edit history or the copy-paste tool (multi-edit)
     *  */
    category: Category;

    /**
     * The human-readable title of the field to be displayed as label.
     */
    slug?: string;
    title_en?: string;
    title_id?: string;
    multilingual: boolean;

    /**
     * Text to be displayed in the hint tooltip next to the input field.
     * 
     * This supports a simple Markdown-like syntax for embedding clickable URLs in the hint
     * for example "see [here](http://example.com/info.html) for more information"
     */
    tooltip_en?: string;
    tooltip_id?: string;
    /**
     * If the defined type is an array, this describes the fields of each array item.
     * The nested fields don't currently need a category field to be defined.
     */
    items?: { [key: string]: Omit<DataFieldDefinition, 'category'> };


    /**
     * If the defined type is a dictionary, this describes the types of the dictionary's fields
     */
    fields?: { [key: string]: Omit<DataFieldDefinition, 'category'> }

    /**
     * The example is used to determine the runtime type in which the attribute data is stored (e.g. number, string, object)
     * This gives the programmer auto-complete of all available building attributes when implementing a category view.
     * 
     * E.g. if the field is a text value, an empty string ("") is the simplest example.
     * 
     * Making it semantically correct is useful but not necessary.
     * E.g. for building attachment form, you could use "Detached" as example
     */
    example: any;

    /**
     * Whether the field is a field that has an independent value for each user.
     * For example, user building likes are one of such fields.
     * By default this is false - fields are treated as not user-specific.
     */
    perUser?: boolean;
}

export const buildingUserFields = {
    community_like: {
        perUser: true,
        category: Category.Community,
        title_en: "Do you like this building and think it contributes to the city?",
        title_id: "Apakah kamu menyukai bangunan ini dan apakah bangunan ini berkontribusi untuk kota?",
        example: true,
    },
    community_type_worth_keeping: {
        perUser: true,
        category: Category.Community,
        title_en: "Do you think this **type** of building is generally worth keeping?",
        title_id: "Apakah menurutmu jenis bangunan ini umumnya layak untuk dipertahankan?",
        example: true,
    },
    community_type_worth_keeping_reasons: {
        slug: 'community_type_worth_keeping_reasons',
        perUser: true,
        category: Category.Community,
        title_en: 'Why is this type of building worth keeping?',
        title_id: 'Mengapa bangunan ini layak dipertahankan?',
        fields: {
            external_design: {
                title_en: "because the external design contributes to the streetscape",
                title_id: "Karena desain eksternal berkontribusi pada pemandangan jalanan",
            },
            internal_design: {
                title_en: 'because the internal design works well',
                title_id: 'Karena desain internal bekerja dengan baik',
            },
            adaptable: {
                title_en: 'because the building is adaptable / can be reused to make the city more sustainable',
                title_id: 'Karena bangunannya adaptif / dapat digunakan kembali untuk membuat kota lebih berkelanjutan'
            },
            other: {
                title_en: 'other',
                title_id: 'Lainnya'
            }
        },
        example: {
            external_design: true,
            internal_design: true,
            adaptable: false,
            other: false
        }
    },

    community_local_significance: {
        perUser: true,
        category: Category.Community,
        slug: 'community_local_significance',
        title_en: "Do you think this building should be recorded as a local heritage asset?",
        title_id: "Πιστεύετε ότι το κτίριο πρέπει να καταγραφεί ως στοιχείο πολιτιστικής κληρονομιάς;",
        example: true
    },

    community_expected_planning_application: {
        perUser: true,
        category: Category.Community,
        title_en: "Do you expect this site to be affected by a planning application in the near future?",
        title_id: "Do you expect this site to be affected by a planning application in the near future?",
        example: true
    }
};


export const dataFields = { /* eslint-disable @typescript-eslint/camelcase */

    location_title: {
        category: Category.Location,
        title_en: "Building name",
        tooltip_en: "",
        title_id: "Building name",
        tooltip_id: "",
        example: "Name",
    },


    location_name: {
        category: Category.Location,
        title_en: "Building information (link)",
        tooltip_en: "Link to a website with information on the building, not needed for most.",
        title_id: "Building information (link)",
        tooltip_id: "Link to a website with information on the building, not needed for most.",
        example: "https://en.wikipedia.org/wiki/Palace_of_Westminster",
    },
    location_number: {
        category: Category.Location,
        title_en: "Building number",
        tooltip_en: 'Numbers with an optional lowercase letter are accepted, e.g. 141 or 12b',
        title_id: "Nomor Bangunan",
        tooltip_id: 'Angka dengan huruf kecil (opsional) diterima, mis. 141 atau 12b',
        example: '12b',
    },
    location_street: {
        category: Category.Location,
        title_en: "Street",
        title_id: "Nama Jalan",
        example: "Gower Street",
        //tooltip_en: ,
    },
    location_line_two: {
        category: Category.Location,
        title_en: "Address line 2",
        title_id: "Nama Jalan 2",
        example: "Flat 21",
        //tooltip_en: ,
    },
    location_town: {
        category: Category.Location,
        title_en: "Town",
        title_id: "Kota",
        example: "Jakarta",
        //tooltip_en: ,
    },
    location_postcode: {
        category: Category.Location,
        title_en: "Postcode",
        title_id: "Kode Pos",
        example: "W1W 6TR",
        //tooltip_en: ,
    },
    // ref_toid: {
    //     category: Category.Location,
    //     title_en: "TOID",
    //     tooltip_en: "Ordnance Survey Topography Layer ID (to be filled automatically)",
    //     title_en: "TOID",
    //     tooltip_en: "Ordnance Survey Topography Layer ID (to be filled automatically)",
    //     example: "",
    // },

    /**
     * UPRNs is not part of the buildings table, but the string fields 
     * are included here for completeness
     */
    // uprns: {
    //     category: Category.Location,
    //     title_en: "UPRNs",
    //     tooltip_en: "Unique Property Reference Numbers (to be filled automatically)",
    //     example: [{uprn: "", parent_uprn: "" }, {uprn: "", parent_uprn: "" }],
    // },

    // ref_osm_id: {
    //     category: Category.Location,
    //     title_en: "OSM ID",
    //     tooltip_en: "OpenStreetMap feature ID",
    //     example: "",
    // },
    location_latitude: {
        category: Category.Location,
        title_en: "Latitude",
        title_id: "Garis Lintang",
        example: 12.4564,
    },
    location_longitude: {
        category: Category.Location,
        title_en: "Longitude",
        title_id: "Garis Bujur",
        example: 0.12124,
    },

    current_landuse_group: {
        category: Category.LandUse,
        title_en: "Current Land Use (Group)",
        title_id: "Penggunaan Saat Ini (grup)",
        tooltip_en: "Land use Groups as classified by [NLUD](https://www.gov.uk/government/statistics/national-land-use-database-land-use-and-land-cover-classification)",
        tooltip_id: "Kelompok penggunaan lahan seperti yang diklasifikasikan oleh [NLUD](https://www.gov.uk/government/statistics/national-land-use-database-land-use-and-land-cover-classification)",
        example: ["", ""],
    },
    current_landuse_order: {
        category: Category.LandUse,
        title_en: "Current Land Use (Order)",
        title_id: "Penggunaan Saat Ini (order)",
        tooltip_en: "Land use Order as classified by [NLUD](https://www.gov.uk/government/statistics/national-land-use-database-land-use-and-land-cover-classification)",
        tooltip_id: "Tata guna lahan seperti yang diklasifikasikan oleh [NLUD](https://www.gov.uk/government/statistics/national-land-use-database-land-use-and-land-cover-classification)",
        example: "",
    },
    current_landuse_source: {
        category: Category.LandUse,
        title_en: "Source of information",
        title_id: "Sumber Informasi",
        tooltip_en: "Source for the current land use",
        tooltip_id: "Sumber untuk penggunaan lahan saat ini",
        example: "",
        items_en: [
            "Expert/personal knowledge of building",
            "Online streetview image",
            "Open planning authority dataset",
            "Open property tax dataset",
            "Open housing dataset",
            "Open address dataset",
            "Other"
        ],
        items_id: [
            "Ahli/pengetahuan pribadi mengenai bangunan",
            "Gambaran dari streetview online",
            "Dataset terbuka mengenai kebijakan perencanaan",
            "Dataset terbuka mengenai pajak properti",
            "Dataset terbuka mengenai perumahan",
            "Data set terbuka mengenai alamat",
            "Lainnya"
        ],
    },
    current_landuse_source_detail: {
        category: Category.LandUse,
        title_en: "Source details",
        title_id: "",
        tooltip_en: "References for current land use source (max 500 characters)",
        tooltip_id: "",
        example: "",
    },
    current_landuse_link: {
        category: Category.LandUse,
        title_en: "Source Links",
        title_id: "",
        tooltip_en: "URL for current land use reference",
        tooltip_id: "",
        example: ["", "", ""],
    },
    current_landuse_verified: {
        category: Category.LandUse,
        title_en: 'Has this land use been manually verified?',
        title_id: "",
        example: true,
    },
    building_attachment_form: {
        category: Category.Type,
        title_en: "Adjacency/configuration",
        title_id: "Kedekatan / Konfigurasi",
        tooltip_en: "We have prepopulated these based on their current attachment. A building can either be detached, semi-detached or part of a terrace (middle or end)",
        tooltip_id: "Kami telah mengisi ini berdasarkan kedekatan bangunan saat ini. Sebuah bangunan dapat terpisah, semi-terpisah atau bagian dari teras (tengah atau akhir).",
        example: "",
        slug: 'building_attachment_form',
        multilingual: true,
    },
    date_change_building_use: {
        category: Category.Type,
        title_en: "When did use change?",
        title_id: "",
        tooltip_en: "This is the date the building stopped being used for for the function it was built for. I.e. if it was Victorian warehouse which is now an office this would be when it became an office or if it was something before that, maybe a garage then the date that happened",
        tooltip_id: "",
        example: 1920,
    },
    /**
     * original_building_use does not exist in database yet.
     * Slug needs to be adjusted if the db column will be named differently 
     */
    original_building_use: {
        category: Category.Type,
        title_en: "Original building use",
        title_id: "Penggunaan Bangunan Sebenarnya",
        tooltip_en: "What was the building originally used for when it was built? I.e. If it was Victorian warehouse which is now an office this would be warehouse",
        tooltip_id: "Apa kegunaan awal bangunan tersebut ketika dibangun? Misal. jika gedung tersebut adalah gudang Victoria yang sekarang menjadi kantor, maka pada bagian ini dapat ditulis sebagai gudang.",
        example: "",
    },

    size_roof_shape: {
        category: Category.Type,
        title_en: "Roof type",
        title_id: "Tipe Atap",
        tooltip_id: "",
        example: "",
        //tooltip_en: ,
    },

    date_year: {
        category: Category.Age,
        title_en: "Year built (best estimate)",
        title_id: "Tahun Dibangun (Estimasi terbaik)",
        example: 1924,
    },
    date_lower: {
        category: Category.Age,
        title_en: "Earliest possible start date",
        title_id: "Tanggal Kemungkinan Awal Dimulai",
        tooltip_en: "This should be the earliest year in which building could have started.",
        tooltip_id: "Bagian ini menunjukkan tahun paling awal dimana pembangunan seharusnya dimulai.",
        example: 1900,
    },
    date_upper: {
        category: Category.Age,
        title_en: "Latest possible start year",
        title_id: "Tanggal Kemungkinan Terbaru Dimulai",
        tooltip_en: "This should be the latest year in which building could have started.",
        tooltip_id: "Bagian ini menunjuukan tahun terakhir dimana pembangunan dapat dimulai.",
        example: 2000,
    },
    facade_year: {
        category: Category.Age,
        title_en: "Facade year",
        title_id: "Tahun Fasad",
        tooltip_en: "Best estimate",
        tooltip_id: "Estimasi terbaik",
        example: 1900,
    },
    date_source: {
        category: Category.Age,
        title_en: "Source of information",
        title_id: "Sumber Informasi",
        tooltip_en: "Source for the main start date",
        tooltip_id: "Sumber informasi mengenai tanggal utama awal penggunaan bangunan",
        items: [
            "Expert knowledge of building",
            "Expert estimate from image",
            "Survey of Indonesia",
            "Pevsner Guides",
            "Victoria County History",
            "Local history publication",
            "Other publication",
            "National Heritage List for England",
            "Other database or gazetteer",
            "Historical map",
            "Other archive document",
            "Film/Video",
            "Other website",
            "Other"
        ],
        example: "",
    },
    date_source_detail: {
        category: Category.Age,
        title_en: "Source details",
        title_id: "Detail Sumber Informasi",
        tooltip_en: "References for date source (max 500 characters)",
        tooltip_id: "",
        example: "",
    },
    date_link: {
        category: Category.Age,
        title_en: "Text and Image Links",
        title_id: "Link Website",
        tooltip_en: "URL for age and date reference",
        tooltip_id: "URL untuk referensi usia dan tanggal",
        example: ["", "", ""],
    },

    size_storeys_core: {
        category: Category.Size,
        title_en: "Core storeys",
        title_id: "Jumlah Lantai Utama",
        tooltip_en: "How many storeys between the pavement and start of roof?",
        tooltip_id: "Berapa lantai antara perkerasan dan awal atap?",
        example: 10,
    },
    size_storeys_attic: {
        category: Category.Size,
        title_en: "Attic storeys",
        title_id: "Jumlah Lantai Loteng",
        tooltip_en: "How many storeys above start of roof?",
        tooltip_id: "Berapa lantai di atas awal atap?",
        example: 1,
    },
    size_storeys_basement: {
        category: Category.Size,
        title_en: "Basement storeys",
        title_id: "Jumlah Lantai Bawah Tanah",
        tooltip_en: "How many storeys below pavement level?",
        tooltip_id: "Berapa lantai di bawah permukaan jalan?",
        example: 1,
    },
    size_height_apex: {
        category: Category.Size,
        title_en: "Height to apex (m)",
        title_id: "Ketinggian hingga ke Puncak (m)",
        example: 100.5,
        //tooltip_en: ,
    },
    size_height_eaves: {
        category: Category.Size,
        title_en: "Height to eaves (m)",
        title_id: "Ketinggian hingga ke Atap (m)",
        example: 20.33,
        //tooltip_en: ,
    },
    size_floor_area_ground: {
        category: Category.Size,
        title_en: "Ground floor area (m²)",
        title_id: "Luas Lantai Dasar (m²)",
        example: 1245.6,
        //tooltip_en: ,
    },
    size_floor_area_total: {
        category: Category.Size,
        title_en: "Total floor area (m²)",
        title_id: "Luas Total (m²)",
        example: 2001.7,
        //tooltip_en: ,
    },
    size_width_frontage: {
        category: Category.Size,
        title_en: "Frontage Width (m)",
        title_id: "Lebar Halaman (m)",
        example: 12.2,
        //tooltip_en: ,
    },

    size_configuration: {
        category: Category.Size,
        title_en: "Configuration (semi/detached, end/terrace)",
        title_id: "",
        example: "",
        //tooltip_en: ,
    },

    size_plot_area_total: {
        category: Category.Streetscape,
        title_en: "Total area of plot (m²)",
        title_id: "",
        example: 123.02,
        //tooltip_en: ,
    },
    size_far_ratio: {
        category: Category.Streetscape,
        title_en: "FAR ratio (percentage of plot covered by building)",
        title_id: "",
        example: 0.1,
        //tooltip_en: ,
    },

    construction_core_material: {
        category: Category.Construction,
        title_en: "Core Material",
        tooltip_en: "The main structural material",
        title_id: "Material Utama",
        tooltip_id: "Bahan konstruksi lainnya",
        example: "",
        slug: 'construction_core_material',
        multilingual: true,
    },

    construction_secondary_materials: {
        category: Category.Construction,
        title_en: "Main Secondary Construction Material",
        tooltip_en: "Other construction material",
        title_id: "Material Sekunder",
        tooltip_id: "Bahan konstruksi lainnya",
        example: "",
        slug: 'construction_secondary_materials',
        multilingual: true,
    },

    construction_roof_covering: {
        category: Category.Construction,
        title_en: "Main Roof Covering",
        tooltip_en: 'Main roof covering material',
        title_id: "Penutup Atap Utama",
        tooltip_id: 'Bahan utama penutup atap',
        example: "",
        slug: 'construction_roof_covering',
        multilingual: true,
    },

    sust_breeam_rating: {
        category: Category.Sustainability,
        title_en: "BREEAM Rating",
        tooltip_en: "(Building Research Establishment Environmental Assessment Method) May not be present for many buildings",
        title_id: "BREEAM Rating",
        tooltip_id: "(Building Research Establishment Environmental Assessment Method) May not be present for many buildings",
        example: "",
        slug: 'sust_breeam_rating',
        multilingual: true,
    },
    sust_dec: {
        category: Category.Sustainability,
        title_en: "DEC Rating",
        title_id: "",
        tooltip_en: "(Display Energy Certificate) Any public building should have (and display) a DEC. Showing how the energy use for that building compares to other buildings with same use",
        tooltip_id: "",
        example: "G",
    },
    sust_aggregate_estimate_epc: {
        category: Category.Sustainability,
        title_en: "EPC Rating",
        title_id: "",
        tooltip_en: "(Energy Performance Certificate) Any premises sold or rented is required to have an EPC to show how energy efficient it is. Only buildings rate grade E or higher maybe rented",
        tooltip_id: "",
        example: "",
    },
    sust_retrofit_date: {
        category: Category.Sustainability,
        title_en: "Last significant retrofit",
        title_id: "",
        tooltip_en: "Date of last major building refurbishment",
        tooltip_id: "",
        example: 1920,
    },
    sust_life_expectancy: {
        category: Category.Sustainability,
        title_en: "Expected lifespan for typology",
        title_id: "",
        example: 123,
        //tooltip_en: ,
    },

    planning_portal_link: {
        category: Category.Planning,
        title_en: "Planning portal link",
        title_id: "",
        example: "",
        //tooltip_en: ,
    },
    planning_in_conservation_area: {
        category: Category.Planning,
        title_en: "In a conservation area?",
        title_id: "",
        example: true,
        //tooltip_en: ,
    },
    planning_conservation_area_name: {
        category: Category.Planning,
        title_en: "Conservation area name",
        title_id: "",
        example: "",
        //tooltip_en: ,
    },
    planning_in_list: {
        category: Category.Planning,
        title_en: "Is listed on the National Heritage List for England?",
        title_id: "",
        example: true,
        //tooltip_en: ,
    },
    planning_list_id: {
        category: Category.Planning,
        title_en: "National Heritage List for England list id",
        title_id: "",
        example: "121436",
        //tooltip_en: ,
    },
    planning_list_cat: {
        category: Category.Planning,
        title_en: "National Heritage List for England list type",
        title_id: "",
        example: "",
        //tooltip_en: ,
    },
    planning_list_grade: {
        category: Category.Planning,
        title_en: "Listing grade",
        title_id: "",
        example: "II",
        //tooltip_en: ,
    },
    planning_heritage_at_risk_id: {
        category: Category.Planning,
        title_en: "Heritage at risk list id",
        title_id: "",
        example: "",
        //tooltip_en: ,
    },
    planning_world_list_id: {
        category: Category.Planning,
        title_en: "World heritage list id",
        title_id: "",
        example: "",
        //tooltip_en: ,
    },
    planning_in_glher: {
        category: Category.Planning,
        title_en: "In the Greater Indonesia Historic Environment Record?",
        title_id: "",
        example: true,
        //tooltip_en: ,
    },
    planning_glher_url: {
        category: Category.Planning,
        title_en: "Greater Indonesia Historic Environment Record link",
        title_id: "",
        example: "",
        //tooltip_en: ,
    },
    planning_in_apa: {
        category: Category.Planning,
        title_en: "In an Architectural Priority Area?",
        title_id: "",
        example: true,
        //tooltip_en: ,
    },
    planning_apa_name: {
        category: Category.Planning,
        title_en: "Architectural Priority Area name",
        title_id: "",
        example: "",
        //tooltip_en: ,
    },
    planning_apa_tier: {
        category: Category.Planning,
        title_en: "Architectural Priority Area tier",
        title_id: "",
        example: "2",
        //tooltip_en: ,
    },
    planning_in_local_list: {
        category: Category.Planning,
        title_en: "Is locally listed?",
        title_id: "",
        example: true,
        //tooltip_en: ,
    },
    planning_local_list_url: {
        category: Category.Planning,
        title_en: "Local list link",
        title_id: "",
        example: "",
        //tooltip_en: ,
    },
    planning_in_historic_area_assessment: {
        category: Category.Planning,
        title_en: "Within a historic area assessment?",
        title_id: "",
        example: true,
        //tooltip_en: ,
    },
    planning_historic_area_assessment_url: {
        category: Category.Planning,
        title_en: "Historic area assessment link",
        title_id: "",
        example: "",
        //tooltip_en: ,
    },
    planning_demolition_proposed: {
        category: Category.Planning,
        title_en: "Is the building proposed for demolition?",
        title_id: "",
        example: true,
        //tooltip_en: ,
    },

    likes_total: {
        category: Category.Community,
        title_en: "Total number of likes",
        title_id: "Total number of likes",
        example: 100,
        tooltip_en: "People who like the building and think it contributes to the city.",
        tooltip_id: "People who like the building and think it contributes to the city.",
    },

    community_local_significance_total: {
        category: Category.Community,
        title_en: "People who think the building should be recorded as one of local significance",
        title_id: "People who think the building should be recorded as one of local significance",
        example: 100,
    },

    community_expected_planning_application_total: {
        category: Category.Community,
        title_en: "People who think the building will be affected by a planning application in the near future",
        title_id: "People who think the building will be affected by a planning application in the near future",
        example: 100,
    },

    community_activities_current: {
        category: Category.Community,
        title_en: "Are activities open to the community currently taking place in the building?",
        tooltip_en: "E.g. youth club, place of worship, GP surgery, pub",
        title_id: "Apakah kegiatan terbuka untuk masyarakat saat ini sedang berlangsung di bangunan ini?",
        tooltip_id: "Misal. klub pemuda, tempat ibadah, operasi GP, pub",
        example: true
    },
    community_activities: {
        category: Category.Community,
        title_en: "Has this ever been used for community activities in the past?",
        tooltip_en: "E.g. youth club, place of worship, GP surgery, pub",
        title_id: "Apakah bangunan ini pernah digunakan untuk kegiatan masyarakat di masa lalu?",
        tooltip_id: "Misal. klub pemuda, tempat ibadah, operasi GP, pub",
        example: true
    },
    community_activities_always: {
        category: Category.Community,
        title_en: "Has the building always been used for community activities?",
        tooltip_en: "E.g. youth club, place of worship, GP surgery, pub",
        title_id: "Apakah bangunan ini selalu digunakan untuk kegiatan masyarakat?",
        tooltip_id: "Misal. klub pemuda, tempat ibadah, operasi GP, pub",
        example: true
    },
    // community_activities_dates: {
    //     category: Category.Community,
    //     title_en: "When was this building used for community activities?"
    // },


    community_public_ownership: {
        category: Category.Community,
        title_en: "Is the building in public/community ownership?",
        title_id: "Is the building in public/community ownership?",
        example: "Not in public/community ownership"
    },

    community_public_ownership_sources: {
        category: Category.Community,
        title_en: "Community ownership source link",
        title_id: "Community ownership source link",
        example: ["https://example.com"]
    },

    dynamics_has_demolished_buildings: {
        category: Category.Dynamics,
        title_en: 'Were any other buildings ever built on this site?',
        title_id: "",
        example: true,
    },

    demolished_buildings: {
        category: Category.Dynamics,
        title_en: 'Past (demolished) buildings on this site',
        title_id: "",
        items: {
            year_constructed: {
                title_en: 'Construction year',
                title_id: 'Construction year',
                example: { min: 1989, max: 1991 },
            },
            year_demolished: {
                title_en: 'Demolition year',
                title_id: '',
                example: { min: 1993, max: 1994 },
            },
            lifespan: {
                title_en: 'Lifespan',
                title_id: '',
                example: "2-5",
            },
            overlap_present: {
                title_en: 'Roughly what percentage of this building was inside the current site boundary?',
                title_id: '',
                tooltip_en: '',
                tooltip_id: '',
                example: "25%"
            },
            links: {
                title_en: 'Links / sources',
                title_id: '',
                example: ["", ""]
            }
        },
        example: [
            {
                year_constructed: { min: 1989, max: 1991 },
                year_demolished: { min: 1993, max: 1994 },
                lifespan: "2-5", overlap_present: "50%", links: ["", ""]
            }
        ]
    },
    has_extension: {
        category: Category.Team,
        title_en: "Is there an extension?",
        title_id: "",
        tooltip_en: "",
        tooltip_id: "",
        example: false
    },
    extension_year: {
        category: Category.Team,
        title_en: "Year extension built (best estimate)",
        title_id: "",
        tooltip_en: "This field is the same as 'Year built (best estimate)' in the Age category'",
        tooltip_id: "",
        tooltip_extension_en: "This should be the year the extension was built, not the original building",
        tooltip_extension_id: "",
        example: 2020
    },
    developer_type: {
        category: Category.Team,
        title_en: "What type of developer built the building?",
        title_id: "",
        example: "",
        multilingual: true,
        slug: 'developer_type',
        items: [
            "State",
            "Charity",
            "Community/Cooperative",
            "Other non-profit body",
            "Private (individual)",
            "Private (company/estate)",
            "Religious body",
            "Other"
        ]
    },
    developer_name: {
        category: Category.Team,
        title_en: "Who were the developer(s)?",
        title_id: "",
        tooltip_en: "Free text. First name, space, then Last name",
        tooltip_id: "",
        example: ["", "", ""],
    },
    developer_source_link: {
        category: Category.Team,
        title_en: "Source links for developer(s)",
        title_id: "",
        tooltip_en: "URL for source for developer(s)",
        tooltip_id: "",
        example: ["", "", ""],
    },
    designers: {
        category: Category.Team,
        title_en: "Who were the main designer(s)?",
        title_id: "",
        tooltip_en: "Free text. First name, space, then Last name",
        tooltip_id: "",
        example: ["", "", ""],
    },
    designers_source_link: {
        category: Category.Team,
        title_en: "Source links for designer(s)",
        title_id: "",
        tooltip_en: "URL for source for designer(s)",
        tooltip_id: "",
        example: ["", "", ""],
    },
    lead_designer_type: {
        category: Category.Team,
        title_en: "Which best describes the lead designer?",
        title_id: "",
        example: "",
        multilingual: true,
        slug: 'lead_designer_type',
        items: [
            "Landowner",
            "Speculative builder",
            "Government architecture department",
            "Architect/ architectural firm",
            "Engineering firm",
            "Other"
        ]
    },
    designer_awards: {
        category: Category.Team,
        title_en: "Did the design team win any awards for this building?",
        title_id: "",
        tooltip_en: "",
        tooltip_id: "",
        example: false
    },
    awards_source_link: {
        category: Category.Team,
        title_en: "Source links for designer award(s)",
        title_id: "",
        tooltip_en: "URL for source for designer award(s)",
        tooltip_id: "",
        example: ["", "", ""],
    },
    builder: {
        category: Category.Team,
        title_en: "Name of builder/ construction team",
        title_id: "",
        example: ["", "", ""],
    },
    builder_source_link: {
        category: Category.Team,
        title_en: "Source builder/ construction team",
        title_id: "",
        example: ["", "", ""],
    },
    other_team: {
        category: Category.Team,
        title_en: "Other significant members of the team",
        title_id: "",
        example: ["", "", ""],
    },
    other_team_source_link: {
        category: Category.Team,
        title_en: "Source other significant team members",
        title_id: "",
        example: ["", "", ""],
    },
};

export const allFieldsConfig = { ...dataFields, ...buildingUserFields };