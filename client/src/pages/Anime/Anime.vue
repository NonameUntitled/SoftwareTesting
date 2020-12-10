<template>
  <div class="quiz">
    <h1>Look at dat face!</h1>
    <p v-if="!areImageLoaded">
      Loading...
    </p>
    <img v-else id="anime_image" :src=item.imageUrl>
    <h1>Try to answer who it is!</h1>
    <label v-if="!isWrittenCorrectly">
      <input v-model.number="userInput" type="text" placeholder="Enter the name" id="input_field" />
    </label>
    <h1 v-if="isWrittenCorrectly" id="correct_answer">You are right! {{ item.name }} is here!</h1>
    <h1 v-else-if="isNontrivialInput" id="incorrect_answer">
      No, you're wrong.
    </h1>
  </div>
</template>

<script>
export default {
  name: "Anime",
  computed: {
    isWrittenCorrectly() {
      return this.userInput === this.item.name
    },
    isNontrivialInput() {
      return this.userInput.length !== 0
    },
    areImageLoaded() {
      return "imageUrl" in this.item
    }
  },
  props: {
    item: {
      required: true
    }
  },
  data() {
    return {
      userInput: '',
    }
  }
}
</script>

<style scoped>
.quiz {
  font-size: 120%;
}

li {
  margin: 10px;
}

input {
  font-size: 120%;
}

img {
  max-width: 30%;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
