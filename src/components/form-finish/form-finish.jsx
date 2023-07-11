import './form-finish.css'
import finishImg from '../../utils/images/icon-thank-you.svg'
const FormFinish = () => {
    return (
        <div className='form-step form-finish'>
            <img className='finish-img' src={finishImg} alt=""/>
            <h1 className='finish-header'>Thank you!</h1>
            <p className='finish-subheader'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}
export default FormFinish