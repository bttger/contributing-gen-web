<template>
  <div id="configurator" class="shadow-sm rounded-lg p-2">
    <div id="buttons" class="d-flex flex-row-reverse pb-2 border-bottom">
      <b-button
        class="sm primary-button"
        variant="primary"
        :disabled="generateButtonDisabled || !(generateContributing || generateCodeOfConduct)"
        @click="generate"
      >Generate</b-button>
    </div>
    <div id="specification" class="pt-2">
      <div class="d-flex">
        <h5>Project</h5>
      </div>
      <Input
        label="Project Name"
        placeholder="Our Cool Project"
        v-model="projectName"
        @input="[updateSlug(), specificationChanged()]"
      />
      <Input
        label="Project Slug "
        placeholder="our-cool-project"
        tooltip="The project name in kebab case"
        v-model="projectSlug"
        @input="[projectSlugManuallyChanged = true, specificationChanged()]"
      />
      <Input
        label="Repository URL"
        placeholder="https://github.com/user/slug/"
        type="url"
        tooltip="The URL of your Git repository"
        v-model="repositoryUrl"
        @input="specificationChanged"
      />
      <Input
        label="Documentation URL"
        placeholder="https://docs.our-cool-project.io/"
        type="url"
        tooltip="The URL of your documentation"
        v-model="documentationUrl"
        @input="specificationChanged"
      />

      <div class="d-flex">
        <h5>CONTRIBUTING.md</h5>
      </div>
      <InputSwitch
        label="Generate"
        tooltip="Should the CONTRIBUTING.md file be generated?"
        v-model="generateContributing"
        @input="specificationChanged"
      />
      <Input
        label="Security Email"
        placeholder="security@example.com"
        type="email"
        tooltip="Where would you like to be informed about sensitive bugs?"
        v-model="securityEmail"
        :disabled="!generateContributing"
        @input="specificationChanged"
      />

      <div class="d-flex">
        <h5>CODE_OF_CONDUCT.md</h5>
      </div>
      <InputSwitch
        label="Generate"
        tooltip="Should the CODE_OF_CONDUCT.md file be generated?"
        v-model="generateCodeOfConduct"
        @input="specificationChanged"
      />
      <Input
        label="Enforcement Email"
        placeholder="contact@example.com"
        type="email"
        tooltip="Where do you want to be notified about violations and misconduct?"
        v-model="enforcementEmail"
        :disabled="!generateCodeOfConduct"
        @input="specificationChanged"
      />
      <InputSwitch
        label="Enforcement Guide"
        tooltip="Should it contain guidelines on how to enforce the rules?"
        v-model="enforcementGuidelines"
        :disabled="!generateCodeOfConduct"
        @input="specificationChanged"
      />
    </div>
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
      this.generateButtonDisabled = true;
      console.log("Generate Button clicked");
    },
    updateSlug() {
      if (!this.projectSlugManuallyChanged) {
        this.projectSlug = this.projectName
          .replace(/([A-Z])([A-Z])/g, "$1-$2")
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .replace(/[\s_]+/g, "-")
          .toLowerCase();
      }
    },
    specificationChanged() {
      this.generateButtonDisabled = false;
    }
  },
  data() {
    return {
      projectName: "",
      projectSlug: "",
      repositoryUrl: "",
      documentationUrl: "",
      generateContributing: true,
      securityEmail: "",
      generateCodeOfConduct: true,
      enforcementEmail: "",
      enforcementGuidelines: false,
      projectSlugManuallyChanged: false,
      generateButtonDisabled: true
    };
  }
};
</script>

<style scoped>
#configurator {
  background-color: var(--light);
}
</style>