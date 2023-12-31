import './form-step-two.css'
import FormBodyHeader from "../form-body-header/form-body-header";
import fieldsInfo from '../../utils/data/step-two-fields.json'
import Field from "../field/field";
import Button from "../button/button";
import {useDispatch, useSelector} from "react-redux";
import {getPlansInfo, getStep} from "../../utils/store/utils-reducer/utils-selectors";
import {setPlansInfo, setStep} from "../../utils/store/utils-reducer/utils-actions";
const FormStepTwo = () => {
    const {fields, prices} = fieldsInfo
    const dispatch = useDispatch()
    const step = useSelector(getStep)
    const plans = useSelector(getPlansInfo)
    const nextFormStep = () => {
        dispatch(setStep(step + 1))
    }
    const prevFormStep = () => {
        dispatch(setStep(step - 1))
    }

    const setPlansInfoCB = (idx) => {
        const newPLans = {
            ...plans,
            plan: idx
        }
        dispatch(setPlansInfo(newPLans))
    }

    return (
        <div className='form-step form-step-two'>
            <div className="form-info">
                <FormBodyHeader title='Select your plan' subtitle='You have the option of monthly or yearly billing.' />
                <div className="form-icons">
                    {
                        fields.map((field, idx) => {
                            return <Field callback={setPlansInfoCB} type='card' fieldInfo={field} price={prices[idx]} idx={idx}/>
                        })
                    }
                </div>
            </div>
            <div className="button-container">
                <p onClick={prevFormStep} className='back-button'>Go Back</p>
                <Button callback={nextFormStep} text='Next Step' />
            </div>
        </div>
    )
}
export default FormStepTwo