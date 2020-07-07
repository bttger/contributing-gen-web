<template>
  <div id="app">
    <Header />
    <div class="grid">
      <Configurator />
      <MarkdownOutput />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Configurator from "@/components/Configurator.vue";
import MarkdownOutput from '@/components/MarkdownOutput.vue';
import Footer from '@/components/Footer.vue';

import dot from "dot/doT";
import contributingTemplate from "raw-loader!contributing-gen/templates/contributing.dot";
dot.templateSettings.strip = false;

export default {
  name: "App",
  components: {
    Header,
    Configurator,
    MarkdownOutput,
    Footer
  },
  data() {
    return {
      specs: {
        project: {
          name: "Our Cool Project",
          slug: "our-cool-project",
          repoUrl: "https://github.com/user/slug/",
          docsUrl: "https://github.com/user/slug/blob/master/README.md"
        },
        contributing: {
          generate: true,
          emailSensitiveBugs: "security@example.com"
        },
        codeOfConduct: {
          generate: true,
          enforcementEmail: "email@example.com",
          enforcementGuidelines: false
        }
      },
      contributingTemplate: contributingTemplate,
      contributingMarkdown: ""
    };
  },
  methods: {
    generate() {
      const contributingCompiled = dot.template(this.contributingTemplate);
      this.contributingMarkdown = contributingCompiled(this.specs);
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
  color: #d6d6d6;
  margin-top: 60px;
  background-color: rgb(2, 59, 92);
}
</style>
