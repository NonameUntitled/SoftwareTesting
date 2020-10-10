<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Anime List</router-link> |
      <router-link to="/about">About Us</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;

}
</style>
