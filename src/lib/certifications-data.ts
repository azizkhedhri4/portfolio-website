// Define and export the type for a single certification
export type Certification = {
    id: number;
    title: string;
    issuer: string;
    date: string;
    description: string;
    technologies: string[];
    credentialId?: string;
    credentialUrl?: string;
};

// Define and export your certifications array
export const certifications: Certification[] = [
    {
        id: 1,
        title: "SolidWorks Associate (CSWA)",
        issuer: "Dassault Systèmes",
        date: "2024",
        description: "Certified SolidWorks Associate demonstrating proficiency in 3D modeling, assembly design, and engineering drawings using SolidWorks CAD software.",
        technologies: ["SolidWorks", "3D Modeling", "CAD Design", "Engineering Drawings"],
        credentialId: "CSWA-2024-001",
    },
    {
        id: 2,
        title: "ANSYS Mechanical APDL",
        issuer: "ANSYS Inc.",
        date: "2023",
        description: "Professional certification in ANSYS Mechanical APDL for finite element analysis, structural simulation, and engineering problem-solving.",
        technologies: ["ANSYS", "FEA Analysis", "Structural Simulation", "APDL"],
        credentialId: "ANSYS-MECH-2023",
    },
    {
        id: 3,
        title: "CATIA V5 Fundamentals",
        issuer: "Dassault Systèmes",
        date: "2024",
        description: "Fundamental certification in CATIA V5 covering part design, assembly modeling, and surface design for aerospace and automotive industries.",
        technologies: ["CATIA V5", "Part Design", "Assembly Modeling", "Surface Design"],
    },
];
