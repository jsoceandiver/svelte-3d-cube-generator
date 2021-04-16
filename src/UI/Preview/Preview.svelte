<style src="./Preview.css"></style>

<script>
    import store from '../../DAL/store';
    import { hexToRgba } from '../../domain/color-provider';
    // import Modal from '../Modal/Modal.svelte';
    //import './Preview.css';
</script>

<div class="preview">

    <div class="cube rotation-{$store.rotationType}" style="
        --width: {$store.width}px;
        --height: {$store.height}px;
        --depth: {$store.depth}px;
        --duration: {$store.duration}s;
        --easing: {$store.easingType};
        font-size: {$store.fontSize}rem;">

        <div class="cube-face cube-face-front" style="background-color: {hexToRgba($store.frontFaceBgColor)}">{$store.frontFaceText}</div>
        <div class="cube-face cube-face-back" style="background-color: {hexToRgba($store.backFaceBgColor)}">{$store.backFaceText}</div>
        <div class="cube-face cube-face-left" style="background-color: {hexToRgba($store.leftFaceBgColor)}">{$store.leftFaceText}</div>
        <div class="cube-face cube-face-right" style="background-color: {hexToRgba($store.rightFaceBgColor)}">{$store.rightFaceText}</div>
        <div class="cube-face cube-face-top" style="background-color: {hexToRgba($store.topFaceBgColor)}">{$store.topFaceText}</div>
        <div class="cube-face cube-face-bottom" style="background-color: {hexToRgba($store.bottomFaceBgColor)}">{$store.bottomFaceText}</div>
    </div>

    <!--<Modal>
        <div>Content</div>
        <div slot="bottom-panel">aaa</div>
    </Modal>-->
</div>
