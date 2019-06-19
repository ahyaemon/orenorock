import { writable, readable, get } from 'svelte/store';
import data from '../static/data.json';
import ArtistFactory from './domain/entity/music/artist_factory';
import RandUtil from './utils/rand_util';

const create_rands = () => RandUtil.create_rand(get(music_amount), 3);

const res = ArtistFactory.create_list_from_json(data);
export const artists = writable(res.artists);
export const music_amount = readable(res.music_amount, () => {});
export const rands = writable(create_rands());

export const update_rands = () => {
    rands.set(create_rands());
};
