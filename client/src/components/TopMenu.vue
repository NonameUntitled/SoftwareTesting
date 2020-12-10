<template>
  <div class="top-menu">
    <div class="topnav" id="top-list">
      <a v-bind:key="idx" v-for="(link, idx) in links" :href=link.link :style="width"> {{ link.text }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
  computed: {
    width () {
      return "width: " + ((100.0 / this.links.length) - 2 ).toString() + "%"
    }
  },
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.top-menu {
  overflow: auto;
  width: 100%;
}

.topnav {
  margin: 0;
  overflow: auto;
  width: 100%;
}

.topnav a {
  font-size: 120%;
  font-family: sans-serif;
  text-align: center;

  background-color: #ffffff;
  color: #2b2b2b;

  height: 20px;
  margin: 0;
  padding: 14px 16px;
  float: left;

  text-decoration: none;
}

.topnav a:hover {
  font-size: 150%;
  font-family: sans-serif;
  text-align: center;

  background-color: #ffffff;
  color: #2b2b2b;

  text-decoration: none;
}

</style>
