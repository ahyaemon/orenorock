import Music from "./music";
import {hm} from "../../vo/moji/hiragana";
import Artist from "./artist";

export default class ArtistFactory {
    public static create_list_from_json(json: any) {
        const consonants = Object.keys(json);
        const _artists: Artist[] = [];
        let musicId = 0;

        for (const consonant of consonants) {
            const vowels = Object.keys(json[consonant]);
            for (const vowel of vowels) {
                const artists = json[consonant][vowel];
                for (const artist of artists) {
                    const musics: Music[] = [];
                    for (const music of artist[3]) {
                        musicId += 1;
                        musics.push({
                            id: musicId,
                            title: music[1],
                            youtubeId: music[0],
                        })
                    }

                    const url = artist[1];
                    const wikiUrl = artist[2];
                    const _artist: Artist = {
                        headHiragana: (hm as any)[consonant + vowel],
                        name: artist[0],
                        url: (url === "-") ? null : url,
                        wikiUrl: (wikiUrl === "-") ? null : wikiUrl,
                        musics
                    };
                    _artists.push(_artist);
                }

            }
        }
        return {
            artists: _artists,
            music_amount: musicId,
        };
    }
}
