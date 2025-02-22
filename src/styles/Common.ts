import { theme } from "./Theme"

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font = ({ family, weight, color, lineHeight, Fmin, Fmax }: FontPropsType) => `
    font-family: ${family || '"Fira Code", monospace'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.secondary};
    line-height: ${lineHeight || 1.2};
    font-size: clamp(${Fmin}px, calc( (100vw - 360px)/(1366 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
`