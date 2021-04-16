import { hexToRgba } from './color-provider';

/**
 * css source
 * @type {string}
 */
export const cssSource = `
html, body{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    background: #fff;
    color: #111;
    width: 100vw;
    min-height: 100vh;
}

.cube{
    --width: 200px;
    --height: 200px;
    --depth: 200px;
    --duration: 4s;
    --easing: linear;

    width: var(--width);
    height: var(--height);
    position: relative;

    perspective: 2000px;
    transform-style: preserve-3d;

    font-size: 1.5rem;
    font-weight: bold;
    transition: 1s all;
    
    margin: auto;
}

/**
 * animations
 */
.cube.rotation-combined{
    animation: cube-rotation-combined var(--duration) infinite var(--easing);
}

@keyframes cube-rotation-combined {
    25% { transform: rotateX(180deg) }
    50% { transform: rotateY(180deg) rotateX(180deg) }
    75% { transform: rotateY(180deg) }
    100% { transform: rotateX(360deg) rotateY(360deg) }
}

.cube.rotation-y{
    animation: cube-rotation-y var(--duration) infinite var(--easing);
}

@keyframes cube-rotation-y {
    100% { transform: rotateY(360deg) }
}

.cube.rotation-x{
    animation: cube-rotation-x var(--duration) infinite var(--easing);
}

@keyframes cube-rotation-x {
    100% { transform: rotateX(360deg) }
}

.cube.rotation-z{
    animation: cube-rotation-z var(--duration) infinite var(--easing);
}

@keyframes cube-rotation-z {
    100% { transform: rotateZ(360deg) }
}

.cube.rotation-xy{
    animation: cube-rotation-xy var(--duration) infinite var(--easing);
}

@keyframes cube-rotation-xy {
    100% { transform: rotateX(360deg) rotateY(360deg) }
}

.cube.rotation-xyz{
    animation: cube-rotation-xyz var(--duration) infinite var(--easing);
}

@keyframes cube-rotation-xyz {
    100% { transform: rotateZ(360deg) rotateY(360deg) rotateX(360deg) }
}

.cube-face{
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.cube-face{
    border: 1px solid #000;
}

.cube-face-front,
.cube-face-back{
    width: var(--width);
    height: var(--height);
    background: linear-gradient(to bottom left, transparent, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.3) 51%, transparent);
}

.cube-face-front{
    transform: rotateY(0deg) translateZ(calc(var(--depth) / 2));
}

.cube-face-back{
    transform: rotateY(180deg) translateZ(calc(var(--depth) / 2));
}

.cube-face-left,
.cube-face-right{
    width: var(--depth);
    height: var(--height);
    background: linear-gradient(to bottom right, transparent,rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.3) 51%, transparent);
}

.cube-face-left{
    left: calc(-1 * var(--depth) / 2);
}

.cube-face-right{
    left: calc(var(--width) - var(--depth) / 2);
}

.cube-face-left{
    transform: rotateY(-90deg) translateZ(0);
}

.cube-face-right{
    transform: rotateY(90deg) translateZ(0);
}

.cube-face-top,
.cube-face-bottom{
    width: var(--width);
    height: var(--depth);
    background: linear-gradient(to bottom right, transparent, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.3) 51%, transparent);
}

.cube-face-top{
    top: calc(-1 * var(--depth));
}

.cube-face-bottom{
    top: var(--height);
}

.cube-face-top{
    transform: rotateX(90deg) translateZ(calc(-1 * var(--depth) / 2));
}

.cube-face-bottom{
    transform: rotateX(-90deg) translateZ(calc(-1 * var(--depth) / 2));
}

`;

/**
 * get HTML
 * @param {object} storeData
 * @return {string}
 */
export const getHTML = storeData => {
    return `
<div class="cube rotation-${storeData.rotationType}" style="
    --width: ${storeData.width}px; 
    --height: ${storeData.height}px; 
    --depth: ${storeData.depth}px; 
    --easing: ${storeData.easingType};
    --duration: ${storeData.duration}s;
    font-size: ${storeData.fontSize}rem;">
    
    <div class="cube-face cube-face-front" style="background-color: ${hexToRgba(storeData.frontFaceBgColor)}">${storeData.frontFaceText}</div>
    <div class="cube-face cube-face-back" style="background-color: ${hexToRgba(storeData.backFaceBgColor)}">${storeData.backFaceText}</div>
    <div class="cube-face cube-face-left" style="background-color: ${hexToRgba(storeData.leftFaceBgColor)}">${storeData.leftFaceText}</div>
    <div class="cube-face cube-face-right" style="background-color: ${hexToRgba(storeData.rightFaceBgColor)}">${storeData.rightFaceText}</div>
    <div class="cube-face cube-face-top" style="background-color: ${hexToRgba(storeData.topFaceBgColor)}">${storeData.topFaceText}</div>
    <div class="cube-face cube-face-bottom" style="background-color: ${hexToRgba(storeData.bottomFaceBgColor)}">${storeData.bottomFaceText}</div>
</div>
        `;
};

/**
 * generate html download file as data-url
 * @param {object} storeData
 * @return {string}
 */
export const generateHTMLDownloadFile = storeData => {

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>CSS 3D Flip Card Generator</title>
    
<style>
${cssSource}
</style>

</head>
<body>  
${getHTML(storeData)}

</body>
</html>`;
    const blob = new Blob([html], {type: 'text/html'});
    return window.URL.createObjectURL(blob);

    /*const $download = document.getElementById('download-btn');
    $download.href = url;
    // window.URL.revokeObjectURL(url);*/
};