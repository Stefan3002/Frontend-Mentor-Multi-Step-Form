import './field.css'
import InputField from "../input-field/input-field";
import Icon from "../icon/icon";
import icon1 from '../../utils/images/icon-arcade.svg'
import icon2 from '../../utils/images/icon-advanced.svg'
import icon3 from '../../utils/images/icon-pro.svg'
import {useSelector} from "react-redux";
import {getAddonsInfo, getErrors, getPlansInfo} from "../../utils/store/utils-reducer/utils-selectors";
const Field = ({fieldInfo, type, price, idx, description, callback, currentStep}) => {
    const selectedPlan = useSelector(getPlansInfo)
    const selectedAddons = useSelector(getAddonsInfo)
    const errors = useSelector(getErrors)
    const {step, fields} = errors
    const {plan} = selectedPlan
    if(type === 'card')
        return (
            <div style={{background: plan === idx ? '#d6d6e1' : null}} onClick={() => callback(idx)} className='field field-card'>
                <Icon img={idx === 0 ? icon1 : idx === 1 ? icon2 : icon3} />
                <div className="plan-info">
                    <p className='plan-name'>{fieldInfo}</p>
                    <p className='price'>${price}/mo</p>
                </div>
            </div>
        )
    else if(type === 'long')
        return (
            <div style={{background: selectedAddons.addons.includes(idx) ? '#d6d6e1' : null}} onClick={(event) => callback(event, idx)} className='field field-long'>
                <div className="field-long-left">
                    <InputField type='check' idx={idx} />
                    <div className="field-left-info">
                        <p>{fieldInfo}</p>
                        <p className='sub-info'>{description}</p>
                    </div>
                </div>
                <p className='price'>+${price}/mo</p>
            </div>
        )
    else
        return (
            <div className='field'>
                <div className="field-header">
                    <p>{fieldInfo}</p>
                    {step === currentStep && fields.includes(idx) ? <p className='error-msg'>This field is required</p> : null}
                </div>
                <InputField currentStep={currentStep} idx={idx} callback={callback} />
            </div>
        )
}
export default Field