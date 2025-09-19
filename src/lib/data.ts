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
    github: string;
};

// Define and export your projects array
export const projects: Project[] = [
    {
        id: 1,
        title: "Automotive Component Design",
        description: "Designed and analyzed automotive suspension components using SolidWorks and ANSYS. Conducted stress analysis, fatigue testing, and optimization for improved performance and weight reduction.",
        technologies: ["SolidWorks", "ANSYS", "FEA Analysis", "MATLAB", "Design Optimization"],
        image: "/subscriptionTrackr.jpg",
        live: "#",
        github: "https://github.com/fedi-abidi/automotive-design",
    },
    {
        id: 2,
        title: "Robotic Arm Mechanism",
        description: "Developed a 6-DOF robotic arm with precision control systems. Implemented kinematic analysis, path planning algorithms, and real-time control using LabVIEW and Python.",
        technologies: ["SolidWorks", "LabVIEW", "Python", "Control Systems", "Kinematics"],
        image: "/portfoliomockup.jpg",
        live: "#",
        github: "https://github.com/fedi-abidi/robotic-arm",
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
