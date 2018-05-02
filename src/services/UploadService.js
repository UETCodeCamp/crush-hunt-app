import APIServices from "./APIServices";

export const _Post = (imageUrl,title) => {
    return APIServices.makeRequest({
        url: '/posts',
        method: 'POST',
        data: {
            url: imageUrl,
            title: title,
        }
    });
};

export const _PostUpload = (data) => {
    return APIServices.makeRequest({
        url: '/posts/upload',
        method: 'POST',
        data: data,
    })
};