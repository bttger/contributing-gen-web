<template>
  <div>
      <vue-markdown>i am a ~~tast~~ **test**.</vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: "MarkdownOutput",
  components: {
      VueMarkdown
  }
};
</script>

<style scoped>
div {
  background-color: rgb(119, 0, 255);
  margin: 0;
}
</style>