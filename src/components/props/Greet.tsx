import { GreetProps } from "./common.types"

export const Greet=({name,messageCount}: GreetProps)=>{
    return(
        <div>
            `Hello {name}, You have {messageCount} unread messages`
        </div>
    )
}