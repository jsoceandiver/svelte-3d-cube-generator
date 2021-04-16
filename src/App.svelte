<script>
    import Header from './UI/Header.svelte';
    import Footer from './UI/Footer.svelte';
    import Control from './UI/Controls/Controls.svelte';
    import CodePanel from './UI/CodePanel/CodePanel.svelte';
    import Preview from './UI/Preview/Preview.svelte';
</script>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 1200px) {
        .wrapper {
            flex-direction: row;
            height: calc(100vh - 6rem);
            overflow: auto;
        }
    }

    .content {
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-image: linear-gradient(
                45deg
                ,#ececec 25%,transparent 0),linear-gradient(
                -45deg
                ,#ececec 25%,transparent 0),linear-gradient(
                45deg
                ,transparent 75%,#ececec 0),linear-gradient(
                -45deg
                ,transparent 75%,#ececec 0);
        background-size: 20px 20px;
        background-position: 0 0,0 10px,10px -10px,-10px 0;
    }

    @media (min-width: 1200px) {
        .content {
            width: calc(100% - 600px);
            /*height: 100vh;*/
        }
    }
</style>

<Header />

<div class="wrapper">
    <Control />

    <div class="content">
        <Preview />
    </div>

    <CodePanel />
</div>

<Footer />
