import './form-step-two.css'
import FormBodyHeader from "../form-body-header/form-body-header";
import fieldsInfo from '../../utils/data/step-two-fields.json'
import Field from "../field/field";
const FormStepTwo = () => {
    const {fields, prices} = fieldsInfo
    return (
        <div className='form-step form-step-two'>
            <div className="form-info">
                <FormBodyHeader title='Select your plan' subtitle='You have the option of monthly or yearly billing.' />
                <div className="form-icons">
                    {
                        fields.map((field, idx) => {
                            return <Field type='card' fieldInfo={field} price={prices[idx]} idx={idx}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default FormStepTwo