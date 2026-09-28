export type Project = {
    slug: string;
    title: string;
    category: string;
    images: string[];
    description?: string;
    location?: string;
    area?: string;
    year?: string;
    scope?: string;
};

const image = (name: string) => `/images/${name}`;

export const projects: Project[] = [
    {
        slug: "lumpini-raminthra",
        title: "Lumpini Raminthra",
        category: "Residential/Condo",
        area: "35 sqm.",
        location: "Bangkok, Thailand",
        year: "2026",
        scope: "Interior Design & Build",
        images: [image("lumpini-raminthra-01.jpg"), image("lumpini-raminthra-02.jpg"), image("lumpini-raminthra-03.jpg"), image("lumpini-raminthra-04.jpg"), image("lumpini-raminthra-05.jpg")],
    },
    {
        slug: "baansiri-sukhumvit-10",
        title: "Baansiri Sukhumvit 10",
        category: "Residential/Condo",
        area: "60 sqm.",
        location: "Bangkok, Thailand",
        year: "2026",
        scope: "Interior Design & Build",
        images: [image("baansiri-sukhumvit-10-01.jpg"), image("baansiri-sukhumvit-10-02.jpg"), image("baansiri-sukhumvit-10-03.jpg"), image("baansiri-sukhumvit-10-04.jpg"), image("baansiri-sukhumvit-10-05.jpg")],
    },
    {
        slug: "unilever-office-design",
        title: "Unilever Office Design (Bidding)",
        category: "Corporate",
        area: "700 sqm.",
        location: "Bangkok, Thailand",
        year: "2026",
        scope: "Interior Design (Bidding Only)",
        images: [image("unilever-office-01.png"), image("unilever-office-02.png"), image("unilever-office-03.jpg"), image("unilever-office-04.jpg")],
    },
    {
        slug: "varinda-office",
        title: "Varinda Office",
        category: "Corporate",
        area: "1,675 sqm.",
        location: "Bangkok, Thailand",
        year: "2026",
        scope: "Architectural and Interior Design",
        images: [image("varinda-office-02.jpg"), image("varinda-office-01.jpg"), image("varinda-office-03.jpg"), image("varinda-office-04.jpg"), image("varinda-office-05.jpg"), image("varinda-office-06.jpg"), image("varinda-office-07.png")],
    },
    {
        slug: "denim-jatujak",
        title: "Denim Jatujak",
        category: "Residential/Condo",
        area: "25 sqm.",
        location: "Bangkok, Thailand",
        year: "2026",
        scope: "Interior Design & Build",
        images: [image("denim-jatujak-01.jpg"), image("denim-jatujak-02.png"), image("denim-jatujak-03.png")],
    },
    {
        slug: "sense-of-relax-eco-park",
        title: "Sense of Relax, Eco Park",
        category: "Retail",
        area: "40 sqm.",
        location: "Bangkok, Thailand",
        year: "2026",
        scope: "Interior Design & Build",
        images: [image("sense-of-relax-eco-park-01.jpg"), image("sense-of-relax-eco-park-02.jpg"), image("sense-of-relax-eco-park-03.png")],
    },
    {
        slug: "3506-ideo-rama9",
        title: "3506 Ideo Rama9",
        category: "Residential/Condo",
        area: "55 sqm.",
        location: "Bangkok, Thailand",
        year: "2026",
        scope: "Interior Design & Build",
        images: [image("3506-ideo-rama9-01.jpg"), image("3506-ideo-rama9-02.jpg"), image("3506-ideo-rama9-03.jpg"), image("3506-ideo-rama9-04.jpg"), image("3506-ideo-rama9-05.jpg")],
    },
    {
        slug: "grand-pleno-viphavadi-rangsit",
        title: "Grand pleno - Viphavadi Rangsit",
        category: "Residential/ Single Detached House",
        area: "60 sqm.",
        location: "Bangkok, Thailand",
        year: "2026",
        scope: "Interior Design & Build",
        images: [image("grand-pleno-viphavadi-rangsit-05.jpg"), image("grand-pleno-viphavadi-rangsit-01.jpg"), image("grand-pleno-viphavadi-rangsit-02.jpg"), image("grand-pleno-viphavadi-rangsit-03.jpg"), image("grand-pleno-viphavadi-rangsit-04.jpg")],
    },
    {
        slug: "lakewood-house",
        title: "Lakewood House",
        category: "Residential interior",
        location: "Bangkok, Thailand",
        description:
            "A thoughtfully designed residential interior embracing simplicity and natural elements. The space features warm wood tones, clean white surfaces, and integrated LED lighting to create a serene, modern living environment.",
        images: [
            image("lakewood-bedroom.jpg"),
            image("lakewood-living.jpg"),
            image("lakewood-wardrobe.jpg"),
            image("lakewood-workspace.jpg"),
            image("lakewood-detail.jpg"),
        ],
    },
    {
        slug: "ideo-rama-9",
        title: "Ideo Rama 9",
        category: "Residential interior",
        images: [
            image("ideo-rama9-living2.jpg"),
            image("ideo-rama9-overview.jpg"),
            image("ideo-rama9-bedroom.jpg"),
            image("ideo-rama9-living.jpg"),
            image("ideo-rama9-workspace.jpg"),
            image("ideo-rama9-detail.jpg"),
        ],
    },
    {
        slug: "burlington",
        title: "Burlington",
        category: "Residential interior",
        images: [
            image("burlington-kitchen-2.jpg"),
            image("burlington-bedroom.jpg"),
            image("burlington-kitchen-1.jpg"),
            image("burlington-wardrobe.jpg"),
            image("burlington-workspace.jpg"),
        ],
    },
    {
        slug: "K. JINNY",
        title: "K. JINNY",
        category: "Residential interior",
        images: [
            image("kjinny-living.jpg"),
            image("kjinny-bedroom.jpg"),
            image("kjinny-bedroom-tv.jpg"),
            image("kjinny-workspace-wide.jpg"),
            image("kjinny-workspace-bed.jpg"),
        ],
    },
    {
        slug: "whizdom",
        title: "Whizdom",
        category: "Residential interior",
        images: [
            image("whizdom-bedroom-wide.jpg"),
            image("whizdom-bedroom-front.jpg"),
            image("whizdom-detail-1.jpg"),
            image("whizdom-detail-2.jpg"),
        ],
    },
    {
        slug: "k7-house",
        title: "K7 House",
        category: "House & interior",
        images: [
            image("k7-exterior-1.jpg"),
            image("k7-living.png"),
            image("k7-kitchen.png"),
            image("k7-bedroom.png"),
            image("k7-bathroom-1.png"),
            image("k7-exterior-2.jpg"),
        ],
    },
    {
        slug: "cgrs-streaming",
        title: "CGRS Streaming",
        category: "Creative workspace",
        images: [
            image("cgrs-streaming-1.jpg"),
            image("cgrs-streaming-2.jpg"),
            image("cgrs-streaming-3.jpg"),
            image("cgrs-streaming-4.jpg"),
        ],
    },
];
