const KEY = 'css-3d-cube-gen';

/**
 * save data to the storage
 * @param {object} data
 */
export const saveToStorage = data => {
    if(!window.localStorage) return;
    const value = encodeURIComponent(JSON.stringify(data));
    window.localStorage.setItem(KEY, value);
};

/**
 * get value from storage
 * @return {object|null}
 */
export const getFromStorage = () => {
    if(!window.localStorage) return null;

    let value = null;

    try{
        value = JSON.parse(decodeURIComponent(window.localStorage.getItem(KEY)));
    }
    catch(ex){}

    if(!value) return null;
    return value;
};