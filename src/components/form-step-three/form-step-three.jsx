import './form-step-three.css'
import FormBodyHeader from "../form-body-header/form-body-header";
import Field from "../field/field";
import Button from "../button/button";
import {useDispatch, useSelector} from "react-redux";
import {getAddonsInfo, getStep} from "../../utils/store/utils-reducer/utils-selectors";
import {setAddonsInfo, setStep} from "../../utils/store/utils-reducer/utils-actions";
import fieldsInfo from '../../utils/data/step-three-fields.json'
const FormStepThree = () => {
    const {fields, prices, descriptions} = fieldsInfo
    const dispatch = useDispatch()
    const step = useSelector(getStep)
    const addonsInfo = useSelector(getAddonsInfo)

    const nextFormStep = () => {
        dispatch(setStep(step + 1))
    }
    const prevFormStep = () => {
        dispatch(setStep(step - 1))
    }

    const setAddonsInfoCB = (event, idx) => {
        let newAddons = []
        newAddons.push(...addonsInfo.addons)
        if(!newAddons.includes(idx))
            newAddons.push(idx)
        else
            newAddons = newAddons.filter(addon => addon !== idx)
        const newAddonsInfo = {
            addons: newAddons
        }
        dispatch(setAddonsInfo(newAddonsInfo))
    }

    return (
        <div className='form-step form-step-three'>
            <div className="form-info">
                <FormBodyHeader title='Pick add-ons' subtitle='Add-ons help enhance your gaming experience.' />
                <div className="form-icons">
                    {
                        fields.map((field, idx) => {
                            return <Field callback={setAddonsInfoCB} type='long' fieldInfo={field} price={prices[idx]} idx={idx} description={descriptions[idx]}/>
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
export default FormStepThree