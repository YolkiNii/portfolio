import { ProjectCardProps } from "../ui/ProjectCard";

export const projects: ProjectCardProps[] = [
  {
    title: "Spending Tracker",
    subheader: "A simple tracker app for your spending.",
    demoVideoPath: "/spending_tracker_demo.gif",
    demoVideoAlt: "Demo Video for Spending Tracker",
    projectLink: "https://github.com/YolkiNii/spending-tracker",
    usedTechnologies: [
      "Javascript", "React", "MUI", "Sass", "NodeJS", "ExpressJS", "JWT", "MySQL"
    ]
  },
  {
    title: "Triviardy",
    subheader: "Multiplayer trivia browser game",
    demoVideoPath: "/triviardy_demo.gif",
    demoVideoAlt: "Demo Video for Triviardy",
    projectLink: "https://github.com/YolkiNii/triviardy",
    usedTechnologies: [
      "Typescript", "React", "TailwindCSS", "Socket.io", "NodeJS", "ExpressJS"
    ]
  }
]
