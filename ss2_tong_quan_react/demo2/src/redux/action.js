
export const login = (account) => {
    return {
        type: 'LOGIN',
        payload: account,
    };
};
export const logout = () => {
    return {
        type: 'LOGIN',
        payload: null,
    };
};
