import APIServices from "./APIServices";

export const reset_password = (access_token, email, password) => {
    return APIServices.makeAuthRequest({
        url: '/accounts/reset-password',
        method: 'POST',
        data: {
            email: email,
            token: access_token,
            password: password
        }
    });
};