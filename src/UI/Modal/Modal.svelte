<script>
    import './Modal.css';

    export let title = '';
</script>

<div class="modal-backdrop"></div>
<div class="modal">
    <h1>{title}</h1>
    <div class="content">
        <slot />
    </div>
    <div class="bottom-panel">
        <slot name="bottom-panel">
            <button type="button">Close</button>
        </slot>
    </div>
</div>