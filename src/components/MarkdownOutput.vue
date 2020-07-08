<template>
  <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
      <vue-markdown>i am a ~~tast~~ **test**.</vue-markdown>
  </vs-col>
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