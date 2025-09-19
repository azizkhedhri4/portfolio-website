// Define and export the type for a single certification
export type Certification = {
    id: number;
    title: string;
    issuer: string;
    date: string;
    description: string;
    technologies: string[];
    image: string;
    credentialId?: string;
    credentialUrl?: string;
};

// Define and export your certifications array
export const certifications: Certification[] = [
    {
        id: 1,
        title: "ANSYS Certification",
        issuer: "ANSYS Inc.",
        date: "2024",
        description: "Professional certification in ANSYS for finite element analysis, structural simulation, and engineering problem-solving.",
        technologies: ["ANSYS", "FEA Analysis", "Structural Simulation", "Engineering"],
        image: "/ansys certification.png",
        credentialId: "ANSYS-2024",
    },
    {
        id: 2,
        title: "CATIA Certification",
        issuer: "Dassault Systèmes",
        date: "2024",
        description: "Certification in CATIA covering part design, assembly modeling, and surface design for aerospace and automotive industries.",
        technologies: ["CATIA", "Part Design", "Assembly Modeling", "Surface Design"],
        image: "/catia certification.png",
        credentialId: "CATIA-2024",
    },
];
