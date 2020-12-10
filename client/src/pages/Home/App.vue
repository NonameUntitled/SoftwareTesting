<template>
  <div id="app">
    <TopMenu class="top-menu" :links="linkData"/>
    <img alt="Anime Logo" src="../../assets/AnimeLogo.png">
    <Home msg="You are observing the 'Try to guess the name' web-page"/>
  </div>
</template>

<script>
import Home from './Home.vue'
import TopMenu from "@/components/TopMenu";

export default {
  name: 'App',
  components: {
    TopMenu,
    Home
  },
  data: function() {
    return {
      linkData: [{text: "Anime Page", link: "animePage"}, {text: "About", link: "about"}]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  height: 100%;
  margin: 0;
  top: 0;
}
</style>
