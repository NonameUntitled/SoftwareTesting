<template>
  <div class="anime-list">
    <h1>Add new anime</h1>
    <form>
      <label>
        Name: <input v-model="name" type="text" />
      </label>
      <label>
        Year: <input v-model="year" type="number" />
      </label>
      <label>
        Image URL: <input v-model="imageUrl" type="text" />
      </label>
    </form>
    <div
        v-if="error"
        class="error"
    >

    </div>
    <button @click="createAnime">Submit</button>
    <h1>My anime list</h1>
    <ul>
      <li
        class="anime-list__item"
        v-for="anime of animeList"
        :key="anime.id"
        @click="openAnimeInfo(anime)"
      >
        {{ anime.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Anime from "@/models/Anime";
import { Component, Vue } from "vue-property-decorator";
import AnimeService from "../data/AnimeService";

@Component({})
export default class AnimeListPage extends Vue {
  animeList: Anime[] = [];
  error: Error | null = null;

  name = "";
  year = 1970;
  imageUrl = "";

  async mounted() {
    try {
      this.animeList = await AnimeService.getList();
    } catch (e) {
      this.error = e;
    }
  }

  openAnimeInfo(anime: Anime) {
    (this as any).$router.push({ path: `/anime/${anime.id}` });
  }

  async createAnime() {
    try {
      await AnimeService.createAnime(
        new Anime(this.name, this.year, this.imageUrl)
      );
      this.animeList = await AnimeService.getList();
    } catch (e) {
      this.error = e;
    }
  }
}
</script>

<style scoped>
.anime-list {
  vertical-align: bottom;
  justify-content: center;
}

h1 {
  font-size: 40px;
}

.anime-list__item {
  font-size: 30px;
  font-weight: bold;
  color: #42b782;
  cursor: pointer;
}

ul {
  list-style-type: none;
  justify-content: center;
  padding-left: 0;
}

li {
  margin: 10px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
}

button {
  margin: 10px;
  font-size: 30px;
  font-weight: bold;
  max-width: fit-content;
}
</style>
