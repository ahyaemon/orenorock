<script context="module">
     export async function preload(page, session) {
          return { moji: page.params.moji }
     }
</script>

<script>
     import { artists } from '../../store'
     import { get } from 'svelte/store'
     import { hm } from '../../domain/vo/moji/hiragana'
     import MusicSummaryItem from '../../components/MusicSummaryItem.svelte'

     export let moji;
     $: hiragana = hm[moji];
     $: music_ids = get(artists)
             .filter(artist => artist.headHiragana.c + artist.headHiragana.v === moji)
             .map(artist => artist.musics[0].id)
</script>

<h1>{hiragana.jp}</h1>
{#each music_ids as music_id (music_id)}
    <hr>
    <div style="margin: 0 0 30px 0">
        <MusicSummaryItem {music_id} />
    </div>
{/each}
