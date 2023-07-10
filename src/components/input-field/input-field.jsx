import './input-field.css'
import {useSelector} from "react-redux";
import {getAddonsInfo, getPersonalInfo} from "../../utils/store/utils-reducer/utils-selectors";
const InputField = ({type, callback, idx}) => {
    const personalInfo = useSelector(getPersonalInfo)
    const addonsInfo = useSelector(getAddonsInfo)
    if(type === 'check')
        return (
            <div className='input-field'>
                <input type="checkbox" checked={addonsInfo.addons.includes(idx)}/>
            </div>
        )
    else
        return (
            <div className='input-field'>
                <input value={idx === 0 ? personalInfo.name : idx === 1 ? personalInfo.email : personalInfo.phone} onChange={(event) => callback(event, idx)} type="text"/>
            </div>
        )
}
export default InputField