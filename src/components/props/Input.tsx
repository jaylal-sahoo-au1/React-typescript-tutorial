import { InputFieldProps } from "./common.types"

export const InputField=({value, handleChange}: InputFieldProps)=>{
    return <input type="text" value={value} onChange={(event)=>handleChange(event)}/>
}