import { ButtonProps } from "./common.types"

export const Button = ({handleClick}: ButtonProps) => {
    return <button onClick={event => handleClick(event, 1)}>Click</button>
}