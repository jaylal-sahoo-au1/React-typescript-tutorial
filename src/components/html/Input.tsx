type InputProps = React.ComponentProps<'input'>

export const Input = ({type,...rest}: InputProps) => {
  return <input type={type} {...rest} />
}