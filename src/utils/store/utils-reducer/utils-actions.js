export const setStep = (step) => {
    return {
        type: 'SET_STEP',
        payload: step
    }
}

export const setPersonalInfo = (info) => {
    return {
        type: 'SET_PERSONAL_INFO',
        payload: info
    }
}

export const setPlansInfo = (info) => {
    return {
        type: 'SET_PLANS_INFO',
        payload: info
    }
}