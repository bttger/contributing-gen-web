<template>
  <div id="mdOutputDiv" class="shadow rounded-lg p-2 mb-3">
    <b-tabs pills>
      <b-tab v-for="tab in tabs" :key="tab.title">
        <template v-slot:title>
          {{ tab.title }}
          <b-button v-if="!tab.noDownloadButton" pill class="ml-2" @click.prevent="clickDownload($event, tab.title, tab.markdown)">
            <b-icon icon="download"></b-icon>
          </b-button>
        </template>
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
  },
  methods: {
    clickDownload(event, title, content) {
      event.stopPropagation();

      const blob = new Blob([content], { type: 'text/markdown; charset=UTF-8' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = title
      link.click()
      URL.revokeObjectURL(link.href)
    }
  }
};
</script>

<style scoped>
#mdOutputDiv {
  background-color: var(--light);
}
</style>