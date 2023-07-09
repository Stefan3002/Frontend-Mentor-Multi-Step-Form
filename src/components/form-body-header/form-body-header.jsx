import './form-body-header.css'
import Field from "../field/field";
const FormBodyHeader = ({title, subtitle}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2 className='sub-title'>{subtitle}</h2>
        </div>
    )
}
export default FormBodyHeader