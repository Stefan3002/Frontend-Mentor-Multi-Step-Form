import {useDispatch, useSelector} from "react-redux";
import {getErrors, getPersonalInfo} from "../utils/store/utils-reducer/utils-selectors";
import {useCallback, useEffect, useState} from "react";
import {setErrors} from "../utils/store/utils-reducer/utils-actions";

const useValidate = () => {
    let ans = true
    const personalInfo = useSelector(getPersonalInfo)
    const dispatch = useDispatch()

    const validate = () => {
        ans = true
        const errorsObj = {
            step: 0,
            fields: []
        }

        const {name, email, phone} = personalInfo
        if (!email || !name || !phone) {
            ans = false
            if (!name)
                errorsObj.fields.push(0)
            if (!email)
                errorsObj.fields.push(1)
            if (!phone)
                errorsObj.fields.push(2)
            dispatch(setErrors(errorsObj))
        }
        // For the regex:
        // https://www.w3resource.com/javascript/form/email-validation.php

        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            ans = false
            errorsObj.fields.push(1)
            dispatch(setErrors(errorsObj))
        }

        return ans
    }




    return [validate]

}
export default useValidate