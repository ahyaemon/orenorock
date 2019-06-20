<script>
    import GyouFactory from '../domain/vo/moji/gyou_factory'
    import { get } from 'svelte/store'
    import { artists, update_rands } from '../store'
    import { createEventDispatcher } from 'svelte'
    import { mobile_breakpoint } from '../const'

    let gyous = GyouFactory.default();

    function has_data(hiragana) {
        const artist = get(artists).find((a) => {
            return a.headHiragana.jp === hiragana.jp
        });
        return artist !== undefined
    }

    const dispatch = createEventDispatcher();
    function emit_change_page() {
        return dispatch('change_page', null)
    }

    let width;
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

<svelte:window bind:innerWidth="{width}"/>

<nav>
    <div id="title">
        <a href="/" on:click="{emit_change_page}"><h4>俺のロックまとめ</h4></a>
    </div>
    {#if width > mobile_breakpoint}
        <div>
            <label>
                <a href="/random" on:click="{update_rands}"class="button button-red">RANDOM</a>
            </label>
        </div>
    {/if}
    <div class="gyous">
        {#each gyous as gyou}
            <div class="row">
                {#each gyou.hiraganas as hiragana}
                    <label>
                        <a href="{'/artists/' + hiragana.c + hiragana.v}" on:click="{emit_change_page}">
                            <span class="hiragana" class:b="{has_data(hiragana)}">{hiragana.jp}</span>
                        </a>
                    </label>
                {/each}
            </div>
        {/each}
    </div>
</nav>
