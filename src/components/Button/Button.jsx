const Button = (props) => {
    console.log(props)
    return <button onClick={props.callback} style={{background: props.bgColor, color: props.fontColor}} className={props.className}>{props.label}</button>
}

export default Button