import './form-step-one.css'
import './form-step.css'
import fieldsInfo from '../../utils/data/step-one-fields.json'
import Field from "../field/field";
import Button from "../button/button";
import {useDispatch, useSelector} from "react-redux";
import {setPersonalInfo, setStep} from "../../utils/store/utils-reducer/utils-actions";
import {getPersonalInfo, getStep} from "../../utils/store/utils-reducer/utils-selectors";
import FormBodyHeader from "../form-body-header/form-body-header";
import useValidate from "../../hooks/validateStepOne";
const FormStepOne = () => {
    const {fields} = fieldsInfo
    const personalInfo = useSelector(getPersonalInfo)
    const dispatch = useDispatch()
    const step = useSelector(getStep)
    const [validate] = useValidate()

    const nextFormStep = () => {
        if(!validate())
            return
        dispatch(setStep(step + 1))
    }

    const setPersonalInfoCB = (event, idx) => {
        const target = event.target.value
        let newPersonalInfo

        switch (idx){
            case 0:
                newPersonalInfo = {
                    ...personalInfo,
                    name: target
                }
                break
            case 1:
                newPersonalInfo = {
                    ...personalInfo,
                    email: target
                }
                break
            case 2:
                newPersonalInfo = {
                    ...personalInfo,
                    phone: target
                }
                break
            default:
                newPersonalInfo = personalInfo
        }

        dispatch(setPersonalInfo(newPersonalInfo))
    }

    return (
        <div className='form-step form-step-one'>
            <div className="form-info">
                <FormBodyHeader title='Personal Info' subtitle='Please provide your name, email address, and phone number.' />
                {
                    fields.map((field, idx) => {
                        return <Field currentStep={0} idx={idx} callback={setPersonalInfoCB} fieldInfo={field} />
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