<template>
  <div class="shadow rounded-lg p-2 mb-3">
    <b-tabs pills small>
      <b-tab title="CONTRIBUTING.md" active>
        <div class="float-right">
          <div class="d-flex">
            <b-icon-info-circle v-b-tooltip.hover title="Show plain markdown" class="ml-auto"></b-icon-info-circle>
            <b-form-checkbox
              id="plainMarkdownSwitch"
              switch
              size="lg"
              class="ml-1"
              v-model="plainMarkdown"
            ></b-form-checkbox>
          </div>
        </div>

        <div class="inline text-left mt-3">
          <vue-markdown v-show="!plainMarkdown">{{ contributingMarkdown }}</vue-markdown>
          <p v-show="plainMarkdown">{{ contributingMarkdown }}</p>
        </div>
      </b-tab>
      <b-tab title="CODE_OF_CONDUCT.md">
        <div class="float-right">
          <div class="d-flex">
            <b-icon-info-circle v-b-tooltip.hover title="Show plain markdown" class="ml-auto"></b-icon-info-circle>
            <b-form-checkbox
              id="plainMarkdownSwitch"
              switch
              size="lg"
              class="ml-1"
              v-model="plainMarkdown"
            ></b-form-checkbox>
          </div>
        </div>

        <div class="inline text-left mt-3">
          <vue-markdown v-show="!plainMarkdown">{{ codeOfConductMarkdown }}</vue-markdown>
          <p v-show="plainMarkdown">{{ codeOfConductMarkdown }}</p>
        </div>
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
  props: ["contributingMarkdown", "codeOfConductMarkdown"],
  data() {
    return {
      plainMarkdown: false
    };
  }
};
</script>

<style scoped>
div {
  background-color: var(--light);
}
.custom-switch {
  top: -7px;
  left: 5px;
}
</style>