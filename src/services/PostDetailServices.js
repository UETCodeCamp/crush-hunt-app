
import APIServices from "../services/APIServices"

export const save = () => {
    return APIServices.makeAuthRequest({
        url: '/posts/5ae31a8950fab01e2b9cd796/favorites',
        method: 'POST',
        
    });
};

export const getPostDetail = (id) => {
    console.log(id);
    return APIServices.makeAuthRequest({
        url: '/posts/' + id ,
        method: 'GET'
    })
}