export type ButtonProps = {
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}

export type ContainerProps = {
    styles: React.CSSProperties
}

export type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export type HeadingProps={
    children:string
}

export type InputFieldProps={
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)=>void
}

export type OscarProps={
    children: JSX.Element
}

export type personProps={
    name: Name
}

export type PersonListProps={
    names:Name[]
};

export type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export type Name={
    first : string
    last: string
}

export type Users={
    name: string
    email:string
}

