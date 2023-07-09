const INITIAL_STATE = {
    step: 0,
    personalInfo: {
        name: '',
        email: '',
        phone: ''
    },
    plansInfo: {
        plan: undefined
    }
}

export const utilsReducer = (state = INITIAL_STATE, action) => {
    const {payload, type} = action
    switch (type){
        case 'SET_STEP':
            return {
                ...state,
                step: payload
            }
        case 'SET_PERSONAL_INFO':
            return {
                ...state,
                personalInfo: payload
            }
        case 'SET_PLANS_INFO':
            return {
                ...state,
                plansInfo: payload
            }
        default:
            return {
                ...state
            }
    }
}