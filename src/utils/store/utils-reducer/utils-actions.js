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

export const setAddonsInfo = (info) => {
    return {
        type: 'SET_ADDONS_INFO',
        payload: info
    }
}

export const setTotalPrice = (price) => {
    return {
        type: 'SET_TOTAL_PRICE',
        payload: price
    }
}