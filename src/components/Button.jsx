const Button = ({text, color = "blue"}) => {
    return (
        <button style={{color: color}}>{text}</button>
    )
}

export default Button;