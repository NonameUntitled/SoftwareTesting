import axios from "axios"

axios.defaults.baseURL = location.protocol + "//" + location.hostname + ":" + 3000;

export default {
    getAnime() {
        return axios.get("/api/anime").then(res => res.data)
    },
}
