<script>
    import { artists } from '../store';
    import { get } from 'svelte/store';
    import MusicSummaryFactory from '../domain/entity/music/music_summary_factory';
    import { mobile_breakpoint } from '../const'

    export let has_artist_name = true;
    export let has_link = false;
    export let music_id;
    let music_summary = MusicSummaryFactory.from_artists_and_music_id(get(artists), music_id);

    let width;
    $: youtube_width = (width > mobile_breakpoint) ? 560 :240;
    $: youtube_height = (width > mobile_breakpoint) ?315 : 135;
</script>

<svelte:window bind:innerWidth="{width}"/>

<div>
    <div style="margin: 20px 0 10px 0;">
        {#if has_artist_name}
            <h4>{music_summary.artistName}</h4>
        {/if}
        <h5>{music_summary.title}</h5>
    </div>
    <iframe
            title="music_summary.title"
            width="{youtube_width}"
            height="{youtube_height}"
            src="{'https://www.youtube.com/embed/' + music_summary.youtubeId}"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style="background-color:black;"
    ></iframe>
    {#if has_link}
        <div style="margin: 10px;">
            <label>
                <a class="button button-green" href="{'/artist/' + encodeURI(music_summary.artistName)}">他の動画も見る</a>
            </label>
        </div>
    {/if}
</div>

