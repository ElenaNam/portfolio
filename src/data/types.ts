export const ProjectCats = {
  COM: "Client Projects",
  EDU: "Course Projects",
  PET: "Pet Projects",
} as const;

export type ProjectCatsType = (typeof ProjectCats)[keyof typeof ProjectCats];

export interface SocialItemInterface {
  id: number;
  title: string;
  width: string;
  height: string;
  viewBox: string;
  link?: string;
}

export interface MenuItemInterface {
  id: number;
  title: string;
  link: string;
}

export interface ProjectInterface {
  id?: number;
  title: string;
  desc: string;
  stack: string[];
  link: string;
  imgSrc: string;
  isCached?: boolean;
  cat: string;
  task?: string;
}

export interface SkillsInterface {
  id?: number;
  title: string;
  desc: string;
}

export interface initialStateInterface {
  socials: SocialItemInterface[];
  socialsForMobileMenu: SocialItemInterface[];
  socialsForFooter: SocialItemInterface[];
  menuItems: MenuItemInterface[];
  projects: ProjectInterface[];
  skills: SkillsInterface[];
}
