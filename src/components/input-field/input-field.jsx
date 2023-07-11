import './input-field.css'
import {useSelector} from "react-redux";
import {getAddonsInfo, getErrors, getPersonalInfo} from "../../utils/store/utils-reducer/utils-selectors";
const InputField = ({type, callback, idx, currentStep, placeholder}) => {
    const personalInfo = useSelector(getPersonalInfo)
    const addonsInfo = useSelector(getAddonsInfo)
    const errors = useSelector(getErrors)
    const {step, fields} = errors

    if(type === 'check')
        return (
            <div className='input-field'>
                <input type="checkbox" checked={addonsInfo.addons.includes(idx)}/>
            </div>
        )
    else
        return (
            <div className='input-field'>
                <input placeholder={placeholder} style={{borderColor: step === currentStep && fields.includes(idx) ? 'red' : '#939496'}} value={idx === 0 ? personalInfo.name : idx === 1 ? personalInfo.email : personalInfo.phone} onChange={(event) => callback(event, idx)} type="text"/>
            </div>
        )
}
export default InputField