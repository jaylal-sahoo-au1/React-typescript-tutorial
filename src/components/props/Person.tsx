import { personProps } from "./common.types"

export const Person=({name:{first:f,last:l}}: personProps)=>{
    return(
        <h1>{f} {l}</h1>
    )
}