<template>
  <div id="app">
    <Header />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-5 pr-auto pr-lg-0 mb-3">
          <Configurator />
        </div>
        <div class="col-12 col-lg-6 col-xl-7">
          <MarkdownOutput />
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
      specs: {
        project: {
          name: "Our Cool Project",
          slug: "our-cool-project",
          repoUrl: "https://github.com/user/slug/",
          docsUrl: "https://docs.our-cool-project.io/"
        },
        contributing: {
          generate: true,
          emailSensitiveBugs: "security@example.com"
        },
        codeOfConduct: {
          generate: true,
          enforcementEmail: "contact@example.com",
          enforcementGuidelines: false
        }
      },
      contributingTemplate: contributingTemplate,
      codeOfConductTemplate: codeOfConductTemplate,
      contributingMarkdown: "",
      codeOfConductMarkdown: ""
    };
  },
  computed: {
    compileContributing() {
      return dot.template(this.contributingTemplate);
    },
    compileCodeOfConduct() {
      return dot.template(this.codeOfConductTemplate);
    }
  },
  methods: {
    generate() {
      const contributingCompiled = this.compileContributing();
      const codeOfConductCompiled = this.compileCodeOfConduct();
      this.contributingMarkdown = this.specs.contributing.generate
        ? contributingCompiled(this.specs)
        : "";
      this.codeOfConductMarkdown = this.specs.codeOfConduct.generate
        ? codeOfConductCompiled(this.specs)
        : "";
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
