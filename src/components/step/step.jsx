import './step.css'
import StepCircle from "../step-circle/step-circle";
const Step = ({stepInfo, idx, callback}) => {
    return (
        <div className='step' onClick={() => callback(idx)}>
            <StepCircle idx={idx} />
            <div className="step-info">
                <p className='step-number'>Step {idx}</p>
                <p className='step-name'>{stepInfo}</p>
            </div>
        </div>
    )
}
export default Step