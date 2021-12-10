export const userActionTypes = {
    SAVE_USER: 'SAVE_USER'
}

export const saveUserAction = () => {
    return ({
        type: userActionTypes.SAVE_USER
    })
}