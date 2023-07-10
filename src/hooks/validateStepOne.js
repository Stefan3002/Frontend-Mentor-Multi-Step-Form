import {useSelector} from "react-redux";
import {getPersonalInfo} from "../utils/store/utils-reducer/utils-selectors";
import {useCallback, useEffect, useState} from "react";

const useValidate = () => {
    const [ans, setAns] = useState(true)
    const personalInfo = useSelector(getPersonalInfo)
    useEffect(() => {
        const {name, email, phone} = personalInfo
        if(!email || !name || !phone)
            setAns(false)
        // For the regex:
        // https://www.w3resource.com/javascript/form/email-validation.php

        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
            setAns(false)


    }, [])


    return [ans]

}
export default useValidate