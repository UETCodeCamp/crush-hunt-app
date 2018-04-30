import axios from "axios";

const APIUrl = "https://crush.blogk.xyz";

export const dataTrending = (page = 1, limit = 10) => {
    return axios.get(APIUrl + '/home/trending', {
        headers: {
            "Authorization": localStorage.token
        },
        params: {
            page: page,
            limit: limit,
        }
    })
        .then(function (response) {
            // console.log(response);
            return response.data;
        })
        .catch(function (error) {
            // console.log(error);
            return error;
        });
}

export const dataHot = (page = 1, limit = 10) => {
    return axios.get(APIUrl + '/home/hot', {
        headers: {
            "Authorization": localStorage.token,
        },
        params: {
            page: page,
            limit: limit,
        }
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return console.log(error);
        })
};

export const dataFresh = (page = 1, limit = 10) => {
    return axios.get(APIUrl + '/home/fresh', {
        headers: {
            "Authorization": localStorage.token,
        },
        params: {
            page: page,
            limit: limit,
        }
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return console.log(error);
        })
};

export const likePost = (_id) => {
    return axios.post(APIUrl + '/posts/:'+_id+'/vote', {
        headers: {
            "Authorization": localStorage.token,
        },
        params: {
            id: _id,
        }
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return console.log(error);
        })
};

export const unlikePost = (_id) => {
    return axios.post(APIUrl + '/posts/:'+_id+'/un-vote', {
        headers: {
            "Authorization": localStorage.token,
        },
        params: {
            id: _id,
        }
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return console.log(error);
        })
};


