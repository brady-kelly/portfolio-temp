import { ReactNode } from "react";

export const getSkillLevelColor = (level: string) => {
  const lvl = Number(level);
  if (lvl >= 90) return "bg-emerald-500";
  if (lvl >= 80) return "bg-blue-500";
  if (lvl >= 70) return "bg-yellow-500";
  return "bg-slate-400";
};

export const getSkillLevelText = (level: string) => {
  const lvl = Number(level);
  if (lvl >= 90) return "Expert";
  if (lvl >= 80) return "Advanced";
  if (lvl >= 70) return "Intermediate";
  return "Beginner";
};

function getIconElement(iconName?: string): ReactNode {
  return "<span />";
  // switch (iconName?.toLowerCase()) {
  //     case "database":
  //         return (<Database className="w-5 h-5 text-white" />);
  //     case "code":
  //         return (<Code className="w-5 h-5 text-white" />);
  //     case "users":
  //         return (<Users className="w-5 h-5 text-white" />);
  //     case "cloud":
  //         return (<Cloud className="w-5 h-5 text-white" />)
  //     default:
  //         return (<BrainCog className="w-5 h-5 text-white" />);
  // }
}
