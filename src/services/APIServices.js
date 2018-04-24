import axios from "axios";
import {getLocalData} from "./StorageServices";
import getEnv from "../helpers/getEnv";

const _getAppVersion = () => {
    const app = getLocalData('app');

    return app ? app.version : '1.0.0';
};

class APIServices {
    constructor(baseURL) {
        const _baseURL = baseURL || getEnv('baseAPIUrl');

        this.api = axios.create({
            baseURL: _baseURL,
            timeout: 15000,
        });
    }

    makeRequest(args) {
        const _headers = args.headers ? args.headers : {};

        const defaultHeaders = {
            'X-App-Version': _getAppVersion(),
        };

        args = {
            ...args,
            headers: {
                ...defaultHeaders,
                ..._headers
            }
        };

        return this.api(args)
            .then(({data}) => {
                return Promise.resolve(data);
            });
    }
}

export const extendsAPIServices = (baseURL) => {
    return new APIServices(baseURL);
};

export const login = (email, password) => {
    const url = 'https://crush.blogk.xyz/login';
    const request = new Request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    });

    return fetch(request).then(response => {
        return response.json();
    });
};

export const register = (email, name, password) => {
    const url = 'https://crush.blogk.xyz/register';
    const request = new Request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            name: name,
            password: password,
        })
    });

    return fetch(request).then(response => {
        return response.json();
    });
}

export default new APIServices();