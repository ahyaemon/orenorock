<script>
    import GyouFactory from '../domain/vo/moji/gyou_factory'
    import { get } from 'svelte/store'
    import { artists, update_rands } from '../store'

    let gyous = GyouFactory.default();

    function has_data(hiragana) {
        const artist = get(artists).find((a) => {
            return a.headHiragana.jp === hiragana.jp
        });
        return artist !== undefined
    }
</script>

<style>
    nav {
        border-right: 1px solid #e5e5e5;
        width: 300px;
        height: 100%;

        text-align: center;
    }

    #title {
        padding: 10px;
        border-bottom: 1px solid #e5e5e5;
    }

    .button {
        display: inline-block;
        width: 90%;
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
        <label>
            <a href="/random" on:click="{update_rands}"class="button button-red">RANDOM</a>
        </label>
    </div>
    <div class="gyous">
        {#each gyous as gyou}
            <div class="row">
                {#each gyou.hiraganas as hiragana}
                    <label>
                        <a href="{'/artists/' + hiragana.c + hiragana.v}">
                            <span class="hiragana" class:b="{has_data(hiragana)}">{hiragana.jp}</span>
                        </a>
                    </label>
                {/each}
            </div>
        {/each}
    </div>
</nav>
