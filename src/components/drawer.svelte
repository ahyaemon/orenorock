<script>
    import GyouFactory from '../domain/vo/moji/gyou_factory'
    let gyous = GyouFactory.default();

    function transition_random() {
        location.href = "/random"
    }
</script>

<style>
    nav {
        height: 100vh;
        border-right: 1px solid #e5e5e5;
        width: 300px;

        text-align: center;
    }

    #title {
        padding: 10px;
        border-bottom: 1px solid #e5e5e5;
    }

    #title a {
        text-decoration: none;
        color: black;
    }

    button {
        border: none;
        border-radius: 2px;
        background-color: rgba(255, 3, 0, 0.71);
        color: white;
        box-shadow: 1px 1px 1px grey;
        width: 90%;
        padding: 6px;
        margin: 20px 0 0 0;
    }

    .gyous {
        margin: 20px 0 0 0;
    }

    .row {
        margin: 4px 0 0 0;
    }

    .hiragana {
        margin: 0 16px;
    }
</style>

<nav>
    <div id="title">
        <a href="/"><h4>俺のロックまとめ</h4></a>
    </div>
    <div>
        <button on:click={transition_random}>RANDOM</button>
        <a href="/random"></a>
    </div>
    <div class="gyous">
        {#each gyous as gyou}
            <div class="row">
                {#each gyou.hiraganas as hiragana}
                    <span class="hiragana">{hiragana.jp}</span>
                {/each}
            </div>
        {/each}
    </div>
</nav>
