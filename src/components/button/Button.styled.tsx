import styled from "styled-components"

type ButtonPropsType = {
    bgColor?: string
}

export const Button = styled.button<ButtonPropsType>`
    border: 1px solid;
    border-color: ${props => props.bgColor || 'ABB2BF'}
`

