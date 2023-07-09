import './form-header.css'
import stepsData from '../../utils/data/steps.json'
import Step from "../step/step";
import {useDispatch} from "react-redux";
import {setStep} from "../../utils/store/utils-reducer/utils-actions";
const FormHeader = () => {
    const {steps} = stepsData
    const dispatch = useDispatch()
    const changeStep = (index) => {
        dispatch(setStep(index - 1))
    }

    return (
        <div className='form-header'>
            {
                steps.map((step, idx) => {
                    return <Step callback={changeStep} stepInfo={step} idx={idx + 1} />
                })
            }
        </div>
    )
}
export default FormHeader