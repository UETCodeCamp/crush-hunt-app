import APIServices from "./APIServices";

export const _Post = (title, image) => {
    return APIServices.makeRequest({
        url: '/posts',
        method: 'POST',
        data: {
            title: title,
            image: image,
        }
    });
};