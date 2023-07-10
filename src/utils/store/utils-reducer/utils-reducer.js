const INITIAL_STATE = {
    step: 0,
    personalInfo: {
        name: '',
        email: '',
        phone: ''
    },
    plansInfo: {
        plan: undefined
    },
    addonsInfo: {
        addons: []
    },
    totalPrice : 0
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
        case 'SET_ADDONS_INFO':
            return {
                ...state,
                addonsInfo: payload
            }
        case 'SET_TOTAL_PRICE':
            return {
                ...state,
                totalPrice: payload
            }
        default:
            return {
                ...state
            }
    }
}