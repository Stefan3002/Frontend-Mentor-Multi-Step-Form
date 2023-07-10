// import {useSelector} from "react-redux";
// import {getPersonalInfo} from "../utils/store/utils-reducer/utils-selectors";
//
// export const useValidate = () => {
//     const validateStepOne = () => {
//         const personalInfo = useSelector(getPersonalInfo)
//         const {name, email, phone} = personalInfo
//         if(!email || !name || !phone)
//             return false
//
//         return true
//     }
//     return {validateStepOne}
// }