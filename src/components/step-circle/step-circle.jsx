import './step-circle.css'
import {useSelector} from "react-redux";
import {getStep} from "../../utils/store/utils-reducer/utils-selectors";
const StepCircle = ({idx}) => {
    const step = useSelector(getStep)
    {
        if (step + 1 === idx)
            return (
                <div className='step-circle' style={{background: '#BCE1F9FF', color: 'black'}}>
                    {idx}
                </div>
            )
        else
            return (
                <div className='step-circle'>
                    {idx}
                </div>
            )
    }

}
export default StepCircle