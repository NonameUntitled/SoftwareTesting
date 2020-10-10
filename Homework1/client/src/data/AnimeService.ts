import Anime from "@/models/Anime";
import {axiosInstance} from "@/main";
import {AxiosResponse} from "axios";

export default class AnimeService {
    static async getList(): Promise<Anime[]> {
        const response: AxiosResponse<Anime[]> = await axiosInstance.get("/anime");
        return response.data
    }

    static async getAnimeById(id: number): Promise<Anime> {
        const response: AxiosResponse<Anime> = await axiosInstance.get(`/anime/${id}`);
        return response.data;
    }

    static async createAnime(anime: Anime): Promise<Anime> {
        const response: AxiosResponse<Anime> = await axiosInstance.post('/anime', anime);
        return response.data
    }
}
