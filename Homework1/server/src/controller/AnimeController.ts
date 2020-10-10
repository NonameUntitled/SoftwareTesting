import Anime from "../model/Anime";
import {Request, Response} from "express";

export default class AnimeController {
    private animeList: Anime[] =
        [
            new Anime(0, "UVAO", "http://localhost:3000/anime1.jpg", 1970),
            new Anime(1, "YUI", "http://localhost:3000/anime2.jpg", 2010),
            new Anime(2, "YUKINO", "http://localhost:3000/anime3.jpg", 2013),
            new Anime(3, "ITACHI", "http://localhost:3000/anime4.jpg", 2007),
            new Anime(4, "ITMO", "http://localhost:3000/anime5.jpg", 1901),
            new Anime(5, "SASUKE", "http://localhost:3000/anime6.jpg", 2007),
        ];
    private lastId: number = this.animeList.length;

    async getAll(_: Request, response: Response) {
        response.send(this.animeList);
    }

    async getById(request: Request, response: Response) {
        const id = Number.parseInt(request.params.id);
        response.send(
            this.animeList.find(anime => anime.id === id)
        );
    }

    async insert(request: Request, response: Response) {
        const anime = {...request.body, id: this.lastId++} as Anime;
        this.animeList.push(anime);
        response.send(anime);
    }
}
