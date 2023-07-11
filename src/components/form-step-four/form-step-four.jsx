import './form-step-four.css'
import FormBodyHeader from "../form-body-header/form-body-header";
import Field from "../field/field";
import Button from "../button/button";
import {useDispatch, useSelector} from "react-redux";
import {
    getAddonsInfo,
    getPersonalInfo,
    getPlansInfo,
    getStep,
    getTotalPrice
} from "../../utils/store/utils-reducer/utils-selectors";
import {setStep, setTotalPrice} from "../../utils/store/utils-reducer/utils-actions";
import planFields from '../../utils/data/step-two-fields.json'
import addonsFields from '../../utils/data/step-three-fields.json'
import {useEffect} from "react";
const FormStepFour = () => {

    const dispatch = useDispatch()
    const step = useSelector(getStep)

    const personalInfo = useSelector(getPersonalInfo)
    const addonsInfo = useSelector(getAddonsInfo)
    const planInfo = useSelector(getPlansInfo)
    const totalPrice = useSelector(getTotalPrice)

    const {plan} = planInfo
    const {fields, prices} = addonsFields

    const endFormFlow = () => {
        dispatch(setStep(step + 1))
    }
    const prevFormStep = () => {
        dispatch(setStep(step - 1))
    }

    const changeFormStep = () => {
        dispatch(setStep(1))
    }

    useEffect(() => {
        let total = 0
        for(let i = 0; i < addonsInfo.addons.length; i++)
            total += prices[addonsInfo.addons[i]]

        total += planFields.prices[plan]

        dispatch(setTotalPrice(total))
    })

    return (
        <div className='form-step form-step-four'>
            <div className="form-info">
                <FormBodyHeader title='Finishing up' subtitle='Double-check everything looks OK before confirming.' />
                <div className="form-summary">
                    <div className="summary">
                        <div className="plan-left">
                            <p className='plan-name plan-name-bigger'>{planFields.fields[plan]}</p>
                            <p className='change-button' onClick={changeFormStep}>Change</p>
                        </div>
                        <p className='price-thick'>${planFields.prices[plan]}/mo</p>
                    </div>
                    <hr/>
                    <div className="addons-container">

                        {
                            addonsInfo.addons.map(addon => {
                                return <div className='addon-info'>
                                    <p className='addon-info-name'>{fields[addon]}</p>
                                    <p>+${prices[addon]}/mo</p>
                                </div>
                            })
                        }

                    </div>
                </div>
                <div className="form-total">
                    <p>Total</p>
                    <p className='total-price'>${totalPrice}/mo</p>
                </div>
            </div>
            <div className="button-container">
                <p onClick={prevFormStep} className='back-button'>Go Back</p>
                <Button callback={endFormFlow} text='Confirm' />
            </div>
        </div>
    )
}
export default FormStepFour