<template>
  <div id="mdOutputDiv" class="shadow rounded-lg p-3 mb-3">
    <b-tabs pills>
      <b-tab v-for="tab in tabs" :key="tab.title">
        <template v-slot:title>
          {{ tab.title }}
          <b-button
            size="sm"
            pill
            class="ml-1 py-0 px-2"
            @click.stop="clickDownload(tab.title, tab.markdown)"
            v-if="!tab.noDownloadButton"
          >
            <b-icon-download class="my-0 mx-0"></b-icon-download>
          </b-button>
        </template>
        <InputSwitchMarkdown v-model="showPlainMarkdown" />
        <div class="inline text-left mt-3">
          <vue-markdown class="markdown-body" v-show="!showPlainMarkdown" v-bind:source="tab.markdown">{{ tab.markdown }}</vue-markdown>
          <div v-html="generatePlainMarkdownHtml(tab.markdown)" v-show="showPlainMarkdown"></div>
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
    generatePlainMarkdownHtml(markdown) {
      return markdown.replace(/\n/g, "<br>")
    },
    clickDownload(title, content) {
      const blob = new Blob([content], {
        type: "text/markdown; charset=UTF-8"
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = title;
      link.click();
      URL.revokeObjectURL(link.href);
    }
  }
};
</script>

<style scoped>
#mdOutputDiv {
  background-color: var(--light);
}
</style>