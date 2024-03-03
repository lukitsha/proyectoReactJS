const Button = (props) => {
    console.log(props)
    return <button style={{background: props.bgColor}}>{props.label}</button>
}

export default Button