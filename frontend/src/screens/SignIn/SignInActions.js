export const SIGN_IN = 'SIGN_IN'


export const signIn = (data) => {
    return { type: SIGN_IN, payload: data }
}