import { PersonListProps } from "./common.types"

export const PersonList=({names}: PersonListProps)=>{
  return <div>{names.map((l)=>(
    <h1>{l.first} {l.last}</h1>
  ))}</div>
}
