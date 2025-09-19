// lib/data.ts
import { Briefcase, Code, GraduationCap } from "lucide-react";

// Define and export the type for a single project
export type Project = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    live: string;
};

// Define and export your projects array
export const projects: Project[] = [
    {
        id: 1,
        title: "4-Cylinder Inline Engine Configuration",
        description: "3D CAD model of a complete 4-cylinder inline engine assembly featuring pistons, connecting rods, crankshaft, and main bearings. This assembly demonstrates the conversion of reciprocating piston motion into rotational power through the crankshaft mechanism. Includes flywheel for energy storage and smooth operation.",
        technologies: ["SolidWorks", "CATIA", "3D Modeling", "Engine Design", "Mechanical Assembly"],
        image: "/4-cylinder inline engine configuration .png",
        live: "#",
    },
    {
        id: 2,
        title: "Coil-Over Shock Absorber System",
        description: "Complete 3D CAD model of a coil-over shock absorber for automotive and motorcycle suspension systems. Features coil spring, damper body with hydraulic fluid, threaded adjustment collar for preload, and top/bottom mounting eyelets. Designed for shock absorption and oscillation damping in vehicle suspension applications.",
        technologies: ["SolidWorks", "CATIA", "Suspension Design", "Hydraulic Systems", "Spring-Damper Analysis"],
        image: "/automotive and motorcycle suspension systems.png",
        live: "#",
    },
    {
        id: 3,
        title: "Single-Cylinder Piston-Crank Mechanism",
        description: "3D CAD model of a fundamental crank-slider mechanism featuring a transparent blue piston, golden yellow connecting rod, and grey crankshaft with offset lobes. This mechanism converts reciprocating motion into rotational motion, applicable in internal combustion engines, refrigeration compressors, and pneumatic/hydraulic pumps.",
        technologies: ["SolidWorks", "CATIA", "Mechanism Design", "Kinematic Analysis", "Reciprocating Systems"],
        image: "/reciprocating engine or compressor system.png",
        live: "#",
    },
];

export const historyData = [
    {
      icon: Briefcase,
      title: "Stage en l'industrie aéronautique tunisienne",
      company: "I.A.T",
      date: "2025 - 2025",
      description:
        "Stage en l'industrie aéronautique tunisienne (I.A.T) - Gained experience in aerospace industry operations, manufacturing processes, and quality control systems.",
    },
    {
      icon: Briefcase,
      title: "Stage",
      company: "MECANOPRECIS",
      date: "2024 - 2024",
      description:
        "Stage at MECANOPRECIS - Hands-on experience in precision mechanical manufacturing, quality control, and production processes.",
    },
    {
      icon: GraduationCap,
      title: "Licence en Génie Mécanique - CFM",
      institution: "Institut Supérieur des Études Technologiques Jendouba",
      date: "2023 - 2025",
      description:
        "Licence en génie mécanique spécialité CFM (Conception Fabrication Mécanique) - Specialized in mechanical design and manufacturing processes.",
    },
    {
      icon: GraduationCap,
      title: "BAC Technique",
      institution: "Lycée Farhat Hached Bizerte",
      date: "2023",
      description:
        "Bac technique - Technical high school diploma from Lycée Farhat Hached in Bizerte, providing foundation in technical studies.",
    },
  ];

export const frontendTech = [
    "Fusion 360",
    "SolidWorks",
    "CATIA",
];

export const backendTech = [
    "ANSYS",
    "Abaqus",
];

export const toolsAndDevops = ["Project Management", "Quality Control", "Manufacturing"];

export const programmingLanguages = ["Python", "MATLAB", "C++", "LabVIEW"];
