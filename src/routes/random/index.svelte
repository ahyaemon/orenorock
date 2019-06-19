<script>
    import { onMount } from 'svelte';
    import { artists, rands } from '../../store'
    import { get } from 'svelte/store';
    import MusicSummaryItem from '../../components/MusicSummaryItem.svelte'
</script>

<h2>RANDOM</h2>

<!-- これが無いと rands の update が 下のループに反映されない -->
<p class="none">{$rands}</p>

{#each get(rands) as music_id (music_id)}
    <hr>
    <div style="margin: 0 0 30px 0">
        <MusicSummaryItem {music_id} has_link="{true}"/>
    </div>
{/each}
