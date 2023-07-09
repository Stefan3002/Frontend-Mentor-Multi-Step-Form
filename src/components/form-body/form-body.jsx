import './form-body.css'
import FormStepOne from "../form-step-one/form-step-one";
import {useSelector} from "react-redux";
import {getStep} from "../../utils/store/utils-reducer/utils-selectors";
import FormStepTwo from "../form-step-two/form-step-two";
import FormStepThree from "../form-step-three/form-step-three";
const FormBody = () => {
    const step = useSelector(getStep)

    return (
        <div className='form-body'>
            {
                step === 0 ? <FormStepOne /> : step === 1 ? <FormStepTwo /> : step === 2 ? <FormStepThree /> : null
            }

        </div>
    )
}
export default FormBody