import { writable } from 'svelte/store';
import { getFromStorage } from './storage-provider';

// try get data from the storage
const dataFromStorage = getFromStorage();

/**
 * get string value
 * @param {string} name
 * @param {string} defaultValue
 * @return {*}
 */
const getStringValue = (name, defaultValue) => {
    if(!dataFromStorage || !dataFromStorage[name]) return defaultValue;
    return dataFromStorage[name];
};

/**
 * init the store
 * @type {Writable<{}>}
 */
const store = writable({

    // animation
    rotationType: getStringValue('rotationType', 'y'),
    easingType: getStringValue('easingType', 'linear'), // ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2)
    duration: dataFromStorage && !isNaN(Number(dataFromStorage.duration)) ? dataFromStorage.duration : 4, // sec

    // texts
    leftFaceText: getStringValue('leftFaceText', 'Left'),
    rightFaceText: getStringValue('rightFaceText', 'Right'),
    topFaceText: getStringValue('topFaceText', 'Top'),
    bottomFaceText: getStringValue('bottomFaceText', 'Bottom'),
    frontFaceText: getStringValue('frontFaceText', 'Front'),
    backFaceText: getStringValue('Back', 'Front'),

    // background colors
    leftFaceBgColor: getStringValue('leftFaceBgColor', '#a178d3'),
    rightFaceBgColor: getStringValue('rightFaceBgColor', '#78a9d3'),
    topFaceBgColor: getStringValue('topFaceBgColor', '#788fd3'),
    bottomFaceBgColor: getStringValue('bottomFaceBgColor', '#78d3ac'),
    frontFaceBgColor: getStringValue('frontFaceBgColor', '#98d378'),
    backFaceBgColor: getStringValue('backFaceBgColor', '#78d2d3'),

    // size
    width: dataFromStorage && !isNaN(Number(dataFromStorage.width)) ? dataFromStorage.width : 290,
    height: dataFromStorage && !isNaN(Number(dataFromStorage.height)) ? dataFromStorage.height : 270,
    depth: dataFromStorage && !isNaN(Number(dataFromStorage.depth)) ? dataFromStorage.depth : 190,

    // font
    fontSize: dataFromStorage && !isNaN(Number(dataFromStorage.fontSize)) ? dataFromStorage.fontSize : 1.5 // rem
});

export default store;