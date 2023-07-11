import './form-header.css'
import stepsData from '../../utils/data/steps.json'
import Step from "../step/step";
import {useDispatch} from "react-redux";
import {setStep} from "../../utils/store/utils-reducer/utils-actions";
import useValidate from "../../hooks/validateStepOne";

import desktopImg from '../../utils/images/bg-sidebar-desktop.svg'
import mobileImg from '../../utils/images/bg-sidebar-mobile.svg'
const FormHeader = () => {
    const width = window.innerWidth
    const {steps} = stepsData
    const dispatch = useDispatch()
    const [validate] = useValidate()
    const changeStep = (index) => {
        if(!validate())
            return
        dispatch(setStep(index - 1))
    }

    return (
        <div className='form-header' style={{backgroundImage: width > 1100 ? `url(${desktopImg})` : `url(${mobileImg})`}}>
            {
                steps.map((step, idx) => {
                    return <Step callback={changeStep} stepInfo={step} idx={idx + 1} />
                })
            }
        </div>
    )
}
export default FormHeader