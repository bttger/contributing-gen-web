<template>
  <div id="app">
    <Header />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-5 pr-auto pr-lg-0 mb-3">
          <Configurator @generate="generate($event)" />
        </div>
        <div class="col-12 col-lg-6 col-xl-7">
          <MarkdownOutput :tabs="markdownOutput" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Configurator from "@/components/Configurator.vue";
import MarkdownOutput from "@/components/MarkdownOutput.vue";

import dot from "dot/doT";
import contributingTemplate from "raw-loader!contributing-gen/templates/contributing.dot";
import codeOfConductTemplate from "raw-loader!contributing-gen/templates/codeOfConduct.dot";
import welcomeMessage from "raw-loader!./assets/welcomeMessage.md";
dot.templateSettings.strip = false;

export default {
  name: "App",
  components: {
    Header,
    Configurator,
    MarkdownOutput
  },
  data() {
    return {
      contributingCompiled: dot.template(contributingTemplate),
      codeOfConductCompiled: dot.template(codeOfConductTemplate),
      markdownOutput: [
        {
          title: "Welcome",
          markdown: welcomeMessage
        }
      ]
    };
  },
  methods: {
    generate(specs) {
      this.markdownOutput = [];
      
      if (specs.contributing.generate) {
        this.markdownOutput.push({
          title: "CONTRIBUTING.md",
          markdown: specs.contributing.generate
            ? this.contributingCompiled(specs)
            : ""
        });
      }
      if (specs.codeOfConduct.generate) {
        this.markdownOutput.push({
          title: "CODE_OF_CONDUCT.md",
          markdown: specs.codeOfConduct.generate
            ? this.codeOfConductCompiled(specs)
            : ""
        });
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
