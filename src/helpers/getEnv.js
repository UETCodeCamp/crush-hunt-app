const config = {
    baseUrl: {
        $default: 'http://localhost:3000',
        staging: 'https://staging.crushunt.me',
        production: 'https://crushunt.me',
    },
    baseAPIUrl: {
        $default: 'http://localhost:6001',
        staging: 'https://api-staging.crushunt.me',
        production: 'https://api.crushunt.me',
    },
};

const _getEnvironment = () => {
    return process.env.REACT_APP_ENV || 'development';
};

export default (key, defaultValue = null) => {
    if (!config.hasOwnProperty(key)) {
        return defaultValue;
    }

    const env = _getEnvironment();
    const _dataConfig = config[key];

    return _dataConfig[env] ? _dataConfig[env] : _dataConfig['$default'] || defaultValue;
};