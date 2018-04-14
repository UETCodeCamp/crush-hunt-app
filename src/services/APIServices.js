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

export const APIServicesExtend = (baseURL) => {
    return new APIServices(baseURL);
};

export default new APIServices();
