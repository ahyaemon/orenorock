import { writable, readable } from 'svelte/store';
import data from '../static/data.json';
import ArtistFactory from './domain/entity/music/artist_factory';

const res = ArtistFactory.create_list_from_json(data);
export const artists = writable(res.artists);
export const music_amount = readable(res.music_amount, () => {});
