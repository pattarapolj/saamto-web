export type Project = {
    slug: string;
    title: string;
    category: string;
    images: string[];
    description?: string;
    location?: string;
};

const image = (name: string) => `/images/${name}`;

export const projects: Project[] = [
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
