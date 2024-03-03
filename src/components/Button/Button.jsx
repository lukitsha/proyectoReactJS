const Button = (props) => {
    console.log(props)
    return <button style={{background: props.bgColor, color: props.fontColor}} className={props.className}>{props.label}</button>
}

export default Button