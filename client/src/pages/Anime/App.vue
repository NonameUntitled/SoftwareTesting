<template>
  <div id="app">
    <TopMenu class="top-menu" :links="linkData"/>
    <Anime :item="gameInstance"/>
  </div>
</template>

<script>
import TopMenu from "@/components/TopMenu";
import Anime from "@/pages/Anime/Anime";
import animeQuizService from "@/services/animeQuizService";

export default {
  name: 'App',
  components: {
    Anime,
    TopMenu
  },
  data: function () {
    return {
      linkData: [{text: "Back to home", link: "index.html"}],
      gameInstance: {}
    }
  },
  mounted() {
    animeQuizService.getAnime().then(gameInstance => {
      this.$set(this, "gameInstance", gameInstance)
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

body {
  height: 100%;
  margin: 0;
  top: 0;
}
</style>