import './button.css'
const Button = ({text, callback}) => {
    return (
        <div className="button">
            <button onClick={callback} >{text}</button>
        </div>
    )
}
export default Button