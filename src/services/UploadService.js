import APIServices from "./APIServices";

export const PostUrlAndTitle = (imageUrl,title) => {
    return APIServices.makeAuthRequest({
        url: '/posts',
        method: 'POST',
        data: {
            url: imageUrl,
            title: title,
        }
    });
};

export const UploadImage = (data) => {
    return APIServices.makeAuthRequest({
        url: '/posts/upload',
        method: 'POST',
        data: data,
    })
};