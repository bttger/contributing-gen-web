<template>
  <div class="shadow rounded-lg p-2">
        <b-tabs pills small>
          <b-tab title="CONTRIBUTING.md" active>
            <b-card-text>
              <div class="d-flex mt-3">
                <vue-markdown>{{ contributingMarkdown }}</vue-markdown>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab title="CODE_OF_CONDUCT.md">
            <b-card-text>
              <div class="d-flex mt-3">
                <vue-markdown>{{ codeOfConductMarkdown }}</vue-markdown>
              </div>
            </b-card-text>
          </b-tab>
        </b-tabs>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "MarkdownOutput",
  components: {
    VueMarkdown
  },
  props: ["contributingMarkdown", "codeOfConductMarkdown"]
};
</script>

<style scoped>
div {
  background-color: var(--light);
}
</style>