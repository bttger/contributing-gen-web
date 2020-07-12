<template>
  <div id="mdOutputDiv" class="shadow rounded-lg p-2 mb-3">
    <b-tabs pills>
      <b-tab v-for="tab in tabs" :key="tab.title" :title="tab.title">
        <InputSwitchMarkdown v-model="showPlainMarkdown" />
        <div class="inline text-left mt-3">
          <vue-markdown v-show="!showPlainMarkdown" v-bind:source="tab.markdown">{{ tab.markdown }}</vue-markdown>
          <div v-html="tab.plainMarkdown" v-show="showPlainMarkdown"></div>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import InputSwitchMarkdown from "./InputSwitchMarkdown";

export default {
  name: "MarkdownOutput",
  components: {
    VueMarkdown,
    InputSwitchMarkdown
  },
  props: ["tabs"],
  data() {
    return {
      showPlainMarkdown: false
    };
  }
};
</script>

<style scoped>
#mdOutputDiv {
  background-color: var(--light);
}
</style>