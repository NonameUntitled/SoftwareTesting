<template>
  <div id="app">
    <TopMenu class="top-menu" :links="linkData"/>
    <About/>
  </div>
</template>

<script>
import TopMenu from "@/components/TopMenu";
import About from "@/pages/About/About";

export default {
  name: 'App',
  components: {
    About,
    TopMenu,
  },
  data: function () {
    return {
      linkData: [ {text: "Back to home", link: "index.html"}]
    };
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  text-align: center;
  color: #2c3e50;
}

body {
  height: 100%;
  margin: 0;
  top: 0;
}

top-menu {
  font-family: sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
