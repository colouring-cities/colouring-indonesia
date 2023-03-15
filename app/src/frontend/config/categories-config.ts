/**
 * An enumeration of all categories in the system.
 * The string value is also the category URL slug.
 */
export enum Category {
    Location = 'location',
    LandUse = 'use',
    Type = 'type',
    Age = 'age',
    Size = 'size',
    Construction = 'construction',
    Streetscape = 'streetscape',
    Team = 'team',
    Planning = 'planning',
    Sustainability = 'sustainability',
    Dynamics = 'dynamics',
    Community = 'community',
}

/**
 * This is the sole configuration variable that defines the order of the categories
 * in the category grid. The order in the enum definition or the other configs does
 * not affect the order of the grid.
 */
export const categoriesOrder: Category[] = [
    Category.Location,
    Category.LandUse,
    Category.Type,
    Category.Age,
    Category.Size,
    Category.Construction,
    Category.Streetscape,
    Category.Team,
    Category.Planning,
    Category.Sustainability,
    Category.Dynamics,
    Category.Community,
];

interface CategoryDefinition {
    inactive?: boolean;
    slug: string;
    name_en: string;
    name_id: string;
    aboutUrl: string;
    intro_en: string;
    intro_id: string;
}

export const categoriesConfig: {[key in Category]: CategoryDefinition} = {
    [Category.Age]: {
        slug: 'age',
        name_en: 'Age',
        name_id : 'Usia',
        aboutUrl: 'https://pages.colouring.Indonesia/age',
        intro_en: 'Building age data can support energy analysis and help predict long-term change.',
        intro_id: '',
    },
    [Category.Size]: {
        slug: 'size',
        name_en: 'Size',
        name_id : 'Ukuran',
        aboutUrl: 'https://pages.colouring.Indonesia/shapeandsize',
        intro_en: 'How big are buildings?',
        intro_id: '',
    },
    [Category.Team]: {
        slug: 'team',
        name_en: 'Team',
        name_id : 'Tim',
        aboutUrl: 'https://pages.colouring.Indonesia/team',
        intro_en: 'Who built the buildings?',
        intro_id: '',
    },
    [Category.Construction]: {
        slug: 'construction',
        name_en: 'Construction',
        name_id : 'Konstruksi',
        aboutUrl: 'https://pages.colouring.Indonesia/construction',
        intro_en: 'How are buildings built?',
        intro_id: '',
    },
    [Category.Location]: {
        slug: 'location',
        name_en: 'Location',
        name_id : 'Lokasi',
        aboutUrl: 'https://pages.colouring.Indonesia/location',
        intro_en: 'Where are the buildings? Address, location and cross-references.',
        intro_id: '',
    },
    [Category.Community]: {
        slug: 'community',
        name_en: 'Community',
        name_id : 'Komunitas',
        aboutUrl: 'https://pages.colouring.Indonesia/community',
        intro_en: 'How does this building work for the local community?',
        intro_id: '',
    },
    [Category.Planning]: {
        inactive: true,
        slug: 'planning',
        name_en: 'Planning',
        name_id : 'Perencanaan',
        aboutUrl: 'https://pages.colouring.Indonesia/planning',
        intro_en: 'Planning controls relating to protection and reuse.',
        intro_id: '',
    },
    [Category.Sustainability]: {
        slug: 'sustainability',
        name_en: 'Sustainability',
        name_id : 'Keberlanjutan',
        aboutUrl: 'https://pages.colouring.Indonesia/sustainability',
        intro_en: 'Are buildings energy efficient?',
        intro_id: '',
    },
    [Category.Type]: {
        slug: 'type',
        name_en: 'Type',
        name_id : 'Tipe',
        aboutUrl: 'https://pages.colouring.Indonesia/buildingtypology',
        intro_en: 'How were buildings previously used?',
        intro_id: '',
    },
    [Category.LandUse]: {
        slug: 'use',
        name_en: 'Current Use',
        name_id : 'Penggunaan Saat Ini',
        aboutUrl: 'https://pages.colouring.Indonesia/use',
        intro_en: 'How are buildings used, and how does use change over time?',
        intro_id: '',
    },
    [Category.Streetscape]: {
        inactive: true,
        slug: 'streetscape',
        name_en: 'Street Context',
        name_id : 'Konteks Jalan',
        aboutUrl: 'https://pages.colouring.Indonesia/greenery',
        intro_en: "What's the building's context? Coming soon…",
        intro_id: '',
    },
    [Category.Dynamics]: {
        slug: 'dynamics',
        name_en: 'Dynamics',
        name_id : 'Dinamika',
        aboutUrl: 'https://pages.colouring.Indonesia/dynamics',
        intro_en: 'How has the site of this building changed over time?',
        intro_id: '',
    },
};
