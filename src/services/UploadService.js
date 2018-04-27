import APIServices from "./APIServices";

export const _Post = (title) => {
    return APIServices.makeRequest({
        url: '/posts',
        method: 'POST',
        data: {
            title: title,
        }
    });
};