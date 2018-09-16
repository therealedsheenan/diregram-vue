const TOKEN_NAME = 'diregram-user';

export const getUserToken = () => localStorage.getItem(TOKEN_NAME);
export const setUserToken = (token: string) => localStorage.setItem(TOKEN_NAME, token);

export const removeUserToken = () => localStorage.removeItem(TOKEN_NAME);
