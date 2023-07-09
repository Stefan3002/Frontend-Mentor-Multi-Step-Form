import './form-step-one.css'
import './form-step.css'
import fieldsInfo from '../../utils/data/step-one-fields.json'
import Field from "../field/field";
import Button from "../button/button";
import {useDispatch, useSelector} from "react-redux";
import {setStep} from "../../utils/store/utils-reducer/utils-actions";
import {getStep} from "../../utils/store/utils-reducer/utils-selectors";
import FormBodyHeader from "../form-body-header/form-body-header";
const FormStepOne = () => {
    const {fields} = fieldsInfo
    const dispatch = useDispatch()
    const step = useSelector(getStep)
    const nextFormStep = () => {
        dispatch(setStep(step + 1))
    }

    return (
        <div className='form-step form-step-one'>
            <div className="form-info">
                <FormBodyHeader title='Personal Info' subtitle='Please provide your name, email address, and phone number.' />
                {
                    fields.map(field => {
                        return <Field fieldInfo={field} />
                    })
                }
            </div>
            <div className="button-container">
                <Button callback={nextFormStep} text='Next Step' />
            </div>
        </div>
    )
}
export default FormStepOne