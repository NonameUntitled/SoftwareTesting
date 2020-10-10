"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Anime_1 = tslib_1.__importDefault(require("../model/Anime"));
class AnimeController {
    constructor() {
        this.animeList = [
            new Anime_1.default(0, "UVAO", "http://localhost:3000/anime1.jpg", 1970),
            new Anime_1.default(1, "YUI", "http://localhost:3000/anime2.jpg", 2010),
            new Anime_1.default(2, "YUKINO", "http://localhost:3000/anime3.jpg", 2013),
            new Anime_1.default(3, "ITACHI", "http://localhost:3000/anime4.jpg", 2007),
            new Anime_1.default(4, "ITMO", "http://localhost:3000/anime5.jpg", 1901),
            new Anime_1.default(5, "SASUKE", "http://localhost:3000/anime6.jpg", 2007),
        ];
        this.lastId = this.animeList.length;
    }
    async getAll(_, response) {
        response.send(this.animeList);
    }
    async getById(request, response) {
        const id = Number.parseInt(request.params.id);
        response.send(this.animeList.find(anime => anime.id === id));
    }
    async insert(request, response) {
        const anime = { ...request.body, id: this.lastId++ };
        this.animeList.push(anime);
        response.send(anime);
    }
}
exports.default = AnimeController;
//# sourceMappingURL=AnimeController.js.map