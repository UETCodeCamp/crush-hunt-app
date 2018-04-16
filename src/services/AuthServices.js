import {setLocalData, getLocalData} from "./StorageServices";

const _keyStore = '_auth';
let _state = getLocalData(_keyStore, {});
let _listeners = [];

const _broadcast = () => {
    _listeners.forEach(listener => {
        typeof listener === 'function' && listener();
    });
};

export const addListener = (listener) => {
    if (typeof listener !== 'function') {
        return;
    }

    if (_listeners.indexOf(listener) !== -1) {
        return;
    }

    _listeners.push(listener);
};

export const removeListener = (listener) => {
    _listeners = _listeners.filter(_listener => listener === _listener);
};

export const getState = () => {
    return _state;
};

export const setState = (state) => {
    _state = {
        ..._state,
        state
    };

    setLocalData(_keyStore, _state);
    _broadcast();

    return _state;
};