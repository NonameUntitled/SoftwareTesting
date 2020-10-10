<template>
  <div>
    <div v-if="!!anime">
      <img
        :src=this.anime.previewUrl
        :alt="anime.name"
      />
      <h1>{{ anime.name }}</h1>
      <p>Year: {{ anime.year ? anime.year : "Unknown" }}</p>
    </div>

    <div v-else>
      <p>Error: {{ this.error }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Anime from "../models/Anime";
import AnimeService from "../data/AnimeService";

@Component
export default class AnimeProfile extends Vue {
  @Prop() animeId!: number;

  anime: Anime | null = null;
  error: Error | null = null;

  async mounted() {
    try {
      this.anime = await AnimeService.getAnimeById(this.animeId);
    } catch (e) {
      // error
    }
  }
}
</script>

<style>
img {
  max-width: 30%;
}
</style>