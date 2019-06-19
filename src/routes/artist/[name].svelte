<script context="module">
    export async function preload(page, session) {
        return { name: page.params.name }
    }
</script>

<script>
    import { get } from 'svelte/store';
    import { artists } from '../../store';
    import MusicSummaryItem from '../../components/MusicSummaryItem.svelte'

    export let name;
    let artist = get(artists)
            .find(artist => artist.name === name);
    let music_ids = artist.musics.map(music => music.id);
</script>

<style>
    a {
        text-decoration: underline;
    }
</style>

<h1>{artist.name}</h1>
{#if artist.url}
    <p>
        <a href="{artist.url}" target="_blank">公式サイト</a>
    </p>
{/if}
{#if artist.wikiUrl}
    <p>
        <a href="{artist.wikiUrl}" target="_blank">wiki</a>
    </p>
{/if}
{#each music_ids as music_id (music_id)}
    <hr>
    <div style="margin: 0 0 30px 0">
        <MusicSummaryItem {music_id} has_artist_name="{false}"/>
    </div>
{/each}

