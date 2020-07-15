import { SIGN_IN } from './SignInActions'

const initialState = {
    account: null,
}

export default function(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case SIGN_IN:
            return { ...initialState, account: { ...payload, success: true } }
        default:
          return state    
    }
}