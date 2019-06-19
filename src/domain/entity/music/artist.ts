import Music from "./music"
import Hiragana, { defaultHiragana } from "../../vo/moji/hiragana"

export default interface Artist {
    headHiragana: Hiragana
    name: string
    url: string | null
    wikiUrl: string | null
    musics: Music[]
}

export const defaultArtist: Artist = {
    headHiragana: defaultHiragana,
    name: "",
    url: "",
    wikiUrl: "",
    musics: [],
};
