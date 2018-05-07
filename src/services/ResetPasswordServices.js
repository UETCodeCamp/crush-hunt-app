import APIServices from "./APIServices";

export const forgotPassword = (email) => {
    return APIServices.makeAuthRequest({
        url: '/accounts/forget-password',
        method: 'POST',
        data: {
            email: email
        }
    });
};