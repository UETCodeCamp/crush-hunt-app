import axios from "axios"
import APIServices from "../services/APIServices"

export const save = (id) => {
    return APIServices.makeAuthRequest({
        url: '/posts/' + id + '/favorites',
        method: 'POST',

    });
};
export const unsave = (id) => {

    return APIServices.makeAuthRequest({
        url: '/posts/' + id + '/favorites/',
        method: 'DELETE',

    });
};
export const getPostDetail = (id) => {
    return APIServices.makeAuthRequest({
        url: '/posts/' + id,
        method: 'GET'
    })
}

export const handleTime = (date) => {
    var res = null;
    var currentDate = new Date();
    var postDate = new Date(date);

    var miliseconds = currentDate.valueOf() - postDate.valueOf();

    var seconds = Math.floor(miliseconds / 1000);

    if (seconds < 60) res = seconds + " seconds";
    else {
        var minutes = Math.floor(miliseconds / 1000 / 60);
        if (minutes < 60) res = minutes + " minutes";
        else {
            var hours = Math.floor(miliseconds / 1000 / 60 / 60);
            if (hours < 24) res = hours + " hours";
            else {
                var days = Math.floor(miliseconds / 1000 / 60 / 60 / 24);
                if (days < 7) res = days + " days";
                else {
                    var weeks = Math.floor(miliseconds / 1000 / 60 / 60 / 24 / 7);
                    if (weeks < 4) res = weeks + " weeks";
                    else {
                        var months = Math.floor(miliseconds / 1000 / 60 / 60 / 24 / 7 / 4);
                        if (months < 12) res = months + " months";
                        else {
                            var years = Math.floor(miliseconds / 1000 / 60 / 60 / 24 / 7 / 4 / 12);
                            res = years + " years";
                        }
                    }
                }
            }
        }
    }

    if (res[0] === "1" && res[1] === " ") res = res.slice(0, res.length - 1);
    return res;
}

export const vote = (id) => {
    return APIServices.makeAuthRequest({
        url: '/posts/' + id + '/vote',
        method: 'POST'
    })
}


export const unvote = (id) => {
    return APIServices.makeAuthRequest({
        url: '/posts/' + id + '/un-vote',
        method: 'POST'
    })
}

export const getPostComments = (id) => {
    return APIServices.makeAuthRequest({
        url: '/posts/' + id + '/comments',
        method: 'GET'
    })
}

export const addComment = (id, comment) => {
    console.log("comment", comment)
    return APIServices.makeAuthRequest({
        url: '/posts/' + id + '/comments',
        method: 'POST',
        data: {
            content: comment
        }
    })
}

export const deleteComment = (id, commentID) => {
    return APIServices.makeAuthRequest({
        url: '/posts/' + id + '/comments/' + commentID,
        method: 'DELETE',

    })
}

export const getUserAvatar = (id) => {
    return axios.get("https://crush.blogk.xyz/public/" + id + '/avatar', {
        params: {
            id: id,
        }
    }).then((response) => {
        return response.request.responseURL;
    })
};