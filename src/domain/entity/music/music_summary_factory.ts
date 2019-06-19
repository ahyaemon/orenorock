import Artist from "./artist";
import MusicSummary from "./music_summary";

export default class MusicSummaryFactory {
    public static from_artists_and_music_id(artists: Artist[], music_id: number): MusicSummary {
        for (const artist of artists) {
            for (const music of artist.musics) {
                if (music_id === music.id) {
                    return {
                        youtubeId: music.youtubeId,
                        title: music.title,
                        artistName: artist.name
                    }
                }
            }
        }
    }
}
