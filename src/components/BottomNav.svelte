<style>
    .bottom-nav {
        height: 60px;
        background-color: rgb(170, 170, 170);
    }

    .button {
        padding: 10px 40px;
    }

    .hamburger {
        color: white;
        font-weight: bold;
        font-size: 40px;
    }

    .container {
        height: 100%;
        display: flex;
        align-items: center;
        /*justify-content: space-between;*/
    }

    .random-box {
        order: 1;
        flex-grow: 3;
        text-align: center;
    }

    .hamburger-box {
        order: 2;
        flex-grow: 1;
        text-align: center;
    }

    .icon {
        fill: white;
        margin-top: 8px;
    }
</style>

<script>
    import { update_rands } from '../store'
</script>

<div class="bottom-nav">
    <div class="container">
        <div class="random-box">
            <label>
                <a on:click="{update_rands}" href="/random" class="button button-red">RANDOM</a>
            </label>
        </div>
        <div class="hamburger-box">
            <svg class="icon" height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
        </div>
    </div>
</div>
