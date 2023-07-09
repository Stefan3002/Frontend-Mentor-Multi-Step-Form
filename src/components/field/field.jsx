import './field.css'
import InputField from "../input-field/input-field";
import Icon from "../icon/icon";
import icon1 from '../../utils/images/icon-arcade.svg'
import icon2 from '../../utils/images/icon-advanced.svg'
import icon3 from '../../utils/images/icon-pro.svg'
const Field = ({fieldInfo, type, price, idx}) => {
    if(type === 'card')
        return (
            <div className='field field-card'>
                <Icon img={idx === 0 ? icon1 : idx === 1 ? icon2 : icon3} />
                <div className="plan-info">
                    <p className='plan-name'>{fieldInfo}</p>
                    <p className='price'>${price}/mo</p>
                </div>
            </div>
        )
    else
        return (
            <div className='field'>
                <p>{fieldInfo}</p>
                <InputField />
            </div>
        )
}
export default Field