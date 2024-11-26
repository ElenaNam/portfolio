export interface SocialItemInterface {
    id: number
    title: string
    width: string
    height: string
    viewBox: string
    link?: string
}

export interface MenuItemInterface {
    id: number
    title: string
    link: string
}

export interface ProjectInterface {
    id?: number
    title: string
    desc: string
    stack: string[]
    link: string
    imgSrc: string
    isCached?: boolean
}

export interface initialStateInterface {
    socials: SocialItemInterface[]
    socialsForMobileMenu: SocialItemInterface[]
    socialsForFooter: SocialItemInterface[]
    menuItems: MenuItemInterface[]
    projects: ProjectInterface[]
}