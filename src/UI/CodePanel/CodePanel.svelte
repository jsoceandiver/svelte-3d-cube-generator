<style src="./CodePanel.css"></style>

<svelte:head>
    <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-okaidia.min.css"
            integrity="sha512-mIs9kKbaw6JZFfSuo+MovjU+Ntggfoj8RwAmJbVXQ5mkAX5LlgETQEweFPI18humSPHymTb5iikEOKWF7I8ncQ=="
            crossorigin="anonymous" />
</svelte:head>

<script>
    import Prism from 'prismjs';
    import store from '../../DAL/store';
    import { getHTML, cssSource, generateHTMLDownloadFile } from '../../domain/source-code-provider';
    import { copyToClipboard } from '../../domain/copy-provider';

    // https://prismjs.com/
    window.Prism = window.Prism || {};
    //window.Prism.manual = true;

    let storeData = {};

    let html = '';
    let css = '';

    let htmlElement = null;

    /**
     * subscribe to all changes on store items
     * @param {object} updatedStore
     */
    store.subscribe(updatedStore => {
        storeData = updatedStore;
        html = Prism.highlight(`${getHTML(storeData)}`, Prism.languages.html, 'html');
        css = Prism.highlight(cssSource, Prism.languages.css, 'css');
    });
</script>

<div class="controls code-panel">

    <!-- html -->
    <div class="control">
        <h3>HTML <button
                type="button"
                id="copy-html"
                class="copy-code-btn"
                on:click={() => { copyToClipboard(getHTML(storeData)) }}
        >Copy Code</button></h3>

        <pre class="code-pre" bind:this={htmlElement}>
            <code id="html-code">{@html html}</code>
        </pre>
    </div>

    <!-- css -->
    <div class="control">
        <h3>CSS <button
                    type="button"
                    id="copy-css"
                    class="copy-code-btn"
                    on:click={() => { copyToClipboard(cssSource) }}
        >Copy Code</button></h3>
        <pre class="code-pre">
            <code id="css-code">{@html css}</code>
        </pre>
    </div>

    <div class="download-btn-wrapper"><a href="{ generateHTMLDownloadFile(storeData) }" id="download-btn" download="index.html">Download</a></div>
</div>