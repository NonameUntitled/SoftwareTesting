<template>
  <div class="anime-detail-component">
    <AnimeDetailInfo :anime-id="animeId" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AnimeDetailInfo from "../components/AnimeDetailInfo.vue";

@Component({
  components: { AnimeDetailInfo }
})
export default class AnimePage extends Vue {
  animeId!: number;
  created() {
    this.animeId = Number.parseInt((this as any).$route.params.id);
  }
}
</script>

<style scoped>
img {
  font-size: 20px;
  font-weight: bold;
}
</style>