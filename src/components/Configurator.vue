<template>
  <div id="configurator" class="shadow rounded-lg pt-3 px-3 pb-1">
    <div class="d-flex">
      <h5>Project</h5>
    </div>
    <Input
      label="Project Name"
      placeholder="XYZ"
      v-model="specs.project.name"
    />
    <Input
      label="Default Branch"
      placeholder="main"
      v-model="specs.project.defaultBranch"
    />
    <Input
      label="Repository URL"
      placeholder="https://github.com/user/project-slug"
      type="url"
      tooltip="The URL of your Git repository"
      v-model="specs.project.repoUrl"
    />
    <Input
      label="Documentation URL"
      placeholder="https://docs.xyz-project.io"
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
          defaultBranch: "",
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