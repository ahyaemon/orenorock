<script>
    import { artists } from '../store';
    import { get } from 'svelte/store';
    import MusicSummaryFactory from '../domain/entity/music/music_summary_factory';

    export let has_artist_name = true;
    export let has_link = false;
    export let music_id;
    let music_summary = MusicSummaryFactory.from_artists_and_music_id(get(artists), music_id);
</script>

<div>
    <div style="margin: 20px 0 10px 0;">
        {#if has_artist_name}
            <h4>{music_summary.artistName}</h4>
        {/if}
        <h5>{music_summary.title}</h5>
    </div>
    <iframe
            title="music_summary.title"
            width="560"
            height="315"
            src="{'https://www.youtube.com/embed/' + music_summary.youtubeId}"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style="background-color:black;"
    ></iframe>
    {#if has_link}
        <div style="margin: 10px;">
            <label>
                <a class="button button-green" href="{'/artist/' + music_summary.artistName}">他の動画も見る</a>
            </label>
        </div>
    {/if}
</div>

