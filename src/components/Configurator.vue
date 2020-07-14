<template>
  <div id="configurator" class="shadow rounded-lg pt-2 px-2 pb-1">
    <div class="d-flex">
      <h5>Project</h5>
    </div>
    <Input
      label="Project Name"
      placeholder="Our Cool Project"
      v-model="specs.project.name"
      @input="updateSlug()"
    />
    <Input
      label="Project Slug "
      placeholder="our-cool-project"
      tooltip="The project name in kebab case"
      v-model="specs.project.slug"
      @input="projectSlugManuallyChanged = true"
    />
    <Input
      label="Repository URL"
      placeholder="https://github.com/user/slug/"
      type="url"
      tooltip="The URL of your Git repository"
      v-model="specs.project.repoUrl"
    />
    <Input
      label="Documentation URL"
      placeholder="https://docs.our-cool-project.io/"
      type="url"
      tooltip="The URL of your documentation"
      v-model="specs.project.docsUrl"
    />

    <div class="d-flex">
      <h5>CONTRIBUTING.md</h5>
    </div>
    <InputSwitch
      label="Generate"
      tooltip="Should the CONTRIBUTING.md file be generated?"
      v-model="specs.contributing.generate"
    />
    <Input
      label="Security Email"
      placeholder="security@example.com"
      type="email"
      tooltip="Where would you like to be informed about sensitive bugs?"
      v-model="specs.contributing.emailSensitiveBugs"
      :disabled="!specs.contributing.generate"
    />

    <div class="d-flex">
      <h5>CODE_OF_CONDUCT.md</h5>
    </div>
    <InputSwitch
      label="Generate"
      tooltip="Should the CODE_OF_CONDUCT.md file be generated?"
      v-model="specs.codeOfConduct.generate"
    />
    <Input
      label="Enforcement Email"
      placeholder="contact@example.com"
      type="email"
      tooltip="Where do you want to be notified about violations and misconduct?"
      v-model="specs.codeOfConduct.enforcementEmail"
      :disabled="!specs.codeOfConduct.generate"
    />
    <InputSwitch
      label="Enforcement Guide"
      tooltip="Should it contain guidelines on how to enforce the rules?"
      v-model="specs.codeOfConduct.enforcementGuidelines"
      :disabled="!specs.codeOfConduct.generate"
    />
  </div>
</template>

<script>
import Input from "./Input";
import InputSwitch from "./InputSwitch";

export default {
  name: "Configurator",
  components: {
    Input,
    InputSwitch
  },
  methods: {
    generate() {
      this.$emit("generate", this.specs);
    },
    updateSlug() {
      if (!this.projectSlugManuallyChanged) {
        this.specs.project.slug = this.specs.project.name
          .replace(/([A-Z])([A-Z])/g, "$1-$2")
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .replace(/[\s_]+/g, "-")
          .toLowerCase();
      }
    }
  },
  watch: {
    specs: {
      handler: function() {
        // debounce the automatic generation while the user still types
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(this.generate, 500);
      },
      deep: true
    }
  },
  data() {
    return {
      specs: {
        project: {
          name: "",
          slug: "",
          repoUrl: "",
          docsUrl: ""
        },
        contributing: {
          generate: true,
          emailSensitiveBugs: ""
        },
        codeOfConduct: {
          generate: true,
          enforcementEmail: "",
          enforcementGuidelines: false
        }
      },
      projectSlugManuallyChanged: false,
      timeoutId: 0
    };
  }
};
</script>

<style scoped>
#configurator {
  background-color: var(--light);
}
</style>