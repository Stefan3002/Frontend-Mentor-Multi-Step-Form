import './msform.css'
import FormHeader from "../form-header/form-header";
import FormBody from "../form-body/form-body";
import Button from "../button/button";
import {setStep} from "../../utils/store/utils-reducer/utils-actions";
import {useDispatch, useSelector} from "react-redux";
import {getPersonalInfo, getStep} from "../../utils/store/utils-reducer/utils-selectors";
import useValidate from "../../hooks/validateStepOne";
import fieldsInfo from "../../utils/data/step-one-fields.json";
const MSForm = () => {
    const width = window.innerWidth
    const step = useSelector(getStep)
    const [validate] = useValidate()
    const dispatch = useDispatch()

    const nextFormStep = () => {
        if(!validate())
            return
        dispatch(setStep(step + 1))
    }

    const prevFormStep = () => {
        dispatch(setStep(step - 1))
    }


    if(width > 1100)
        return (
            <div className='ms-form'>
                <FormHeader />
                <FormBody />
            </div>
        )
    else
        return (
            <>
                <FormHeader />
                <div className='ms-form'>
                    <FormBody />
                </div>
                {
                    width <= 1100 ? <div className="button-container">
                        {step === 0 ? <p></p> : <p onClick={prevFormStep} className='back-button'>Go Back</p>}
                        <Button callback={nextFormStep} text='Next Step' />
                    </div> : null
                }

            </>

        )

}
export default MSForm