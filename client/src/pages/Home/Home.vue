<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 class="message">That is my first homework</h1>
    <h1 class="message">Feel free to explore other tabs!</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-top: 50px;
}
h1 {
  font-size: 300%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.message {
  font-size: 200%;
}

</style>
