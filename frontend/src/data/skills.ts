import {
	SiCss,
	SiExpress,
	SiFigma,
	SiFirebase,
	SiGit,
	SiGithub,
	SiGnubash,
	SiHtml5,
	SiJavascript,
	SiKalilinux,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPython,
	SiReact,
	SiRedux,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { IconType } from "react-icons";

type Skill = {
	name: string;
	icon: IconType;
	color: string;
};

export const skills: Skill[] = [
	{ name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
	{ name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
	{ name: "React", icon: SiReact, color: "text-cyan-400" },
	{ name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
	{ name: "Python", icon: SiPython, color: "text-yellow-300" },
	{ name: "Bash", icon: SiGnubash, color: "text-gray-300" },
	{ name: "Shell", icon: SiGnubash, color: "text-gray-400" },
	{ name: "Figma", icon: SiFigma, color: "text-pink-500" },
	{ name: "Kali Linux", icon: SiKalilinux, color: "text-blue-400" },
	{ name: "Next.js", icon: SiNextdotjs, color: "text-white" },
	{ name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
	{ name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-300" },
	{ name: "CSS", icon: SiCss, color: "text-blue-400" },
	{ name: "Redux", icon: SiRedux, color: "text-purple-500" },
	{ name: "Express.js", icon: SiExpress, color: "text-gray-300" },
	{ name: "Git", icon: SiGit, color: "text-orange-500" },
	{ name: "HTML", icon: SiHtml5, color: "text-orange-600" },
	{ name: "GitHub", icon: SiGithub, color: "text-white" },
	{ name: "AWS", icon: FaAws, color: "text-yellow-400" },
	{ name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
	{ name: "React Native", icon: SiReact, color: "text-cyan-400" },
];
