import Artist from "./artist";
import MusicSummary from "./music_summary";

export default class MusicSummaryFactory {
    public static create_list_from_artists(artists: Artist[], rands: number[]): MusicSummary[] {
        const musicSummaries: MusicSummary[] = [];
        for (const artist of artists) {
            for (const music of artist.musics) {
                if (rands.indexOf(music.id) >= 0) {
                    musicSummaries.push({
                        youtubeId: music.youtubeId,
                        title: music.title,
                        artistName: artist.name
                    })
                }
            }
        }
        return musicSummaries
    }
}
