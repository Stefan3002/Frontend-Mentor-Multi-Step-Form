const INITIAL_STATE = {
    step: 0
}

export const utilsReducer = (state = INITIAL_STATE, action) => {
    const {payload, type} = action
    switch (type){
        case 'SET_STEP':
            return {
                ...state,
                step: payload
            }
        default:
            return state
    }
}