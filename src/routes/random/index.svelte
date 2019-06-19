<script>
    import { onMount } from 'svelte';
    import { artists, music_amount } from '../../store'
    import { get } from 'svelte/store';
    import RandUtil from '../../utils/rand_util';
    import MusicSummaryFactory from '../../domain/entity/music/music_summary_factory'

    const rands = RandUtil.create_rand(get(music_amount), 3);
    let music_summaries = MusicSummaryFactory.create_list_from_artists(get(artists), rands);
</script>

<h2>RANDOM</h2>
{#each music_summaries as summary}
    <h4>{summary.artistName}</h4>
    <h5>{summary.title}</h5>
    <iframe
        title="summary.title"
        width="560"
        height="315"
        src="{'https://www.youtube.com/embed/' + summary.youtubeId}"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style="background-color:black;"
    ></iframe>
{/each}
