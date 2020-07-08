<template>
  <div id="configurator">
    <div id="buttons">
      <vs-button flat active @click="generate" id="generateButton">Generate</vs-button>
    </div>
    <div id="specification">
      <vs-row class="row">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <h4>Project</h4>
          <hr />
        </vs-col>
      </vs-row>
      <vs-row class="row">
        <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" w="4">
          <p class="description">Project Name</p>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="flex-end" vs-align="center" w="8">
          <vs-input v-model="projectName" placeholder="Our Cool Project" />
        </vs-col>
      </vs-row>
      <vs-row class="row">
        <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" w="4">
          <p class="description">Project Slug</p>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="flex-end" vs-align="center" w="8">
          <vs-input v-model="projectSlug" placeholder="our-cool-project" />
        </vs-col>
      </vs-row>
      <vs-row class="row">
        <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" w="4">
          <p class="description">Repository URL</p>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="flex-end" vs-align="center" w="8">
          <vs-input v-model="repositoryUrl" placeholder="https://github.com/user/slug/" />
        </vs-col>
      </vs-row>
      <vs-row class="row">
        <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" w="4">
          <p class="description">Documentation URL</p>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="flex-end" vs-align="center" w="8">
          <vs-input
            v-model="documentationUrl"
            placeholder="https://github.com/user/slug/blob/master/README.md"
          />
        </vs-col>
      </vs-row>

      <vs-row class="row">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <h4>CONTRIBUTING.md</h4>
          <hr />
        </vs-col>
      </vs-row>
      <vs-row class="row">
        <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" w="4">
          <p class="description">Generate</p>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="flex-end" vs-align="center" w="8">
          <vs-switch v-model="generateContributing" />
        </vs-col>
      </vs-row>
      <vs-row class="row">
        <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" w="4">
          <p class="description">Security Email</p>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="flex-end" vs-align="center" w="8">
          <vs-input v-model="securityEmail" placeholder="security@example.com" />
        </vs-col>
      </vs-row>

      <vs-row class="row">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <h4>CODE_OF_CONDUCT.md</h4>
          <hr />
        </vs-col>
      </vs-row>
      <vs-row class="row">
        <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" w="4">
          <p class="description">Generate</p>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="flex-end" vs-align="center" w="8">
          <vs-switch v-model="generateCodeOfConduct" />
        </vs-col>
      </vs-row>
      <vs-row class="row">
        <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" w="4">
          <p class="description">Enforcement Email</p>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="flex-end" vs-align="center" w="8">
          <vs-input v-model="enforcementEmail" placeholder="email@example.com" />
        </vs-col>
      </vs-row>
      <vs-row class="row">
        <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" w="4">
          <p class="description">Enforcement Guidelines</p>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="flex-end" vs-align="center" w="8">
          <vs-switch success v-model="enforcementGuidelines" />
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Configurator",
  methods: {
    generate() {}
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
      enforcementGuidelines: false
    };
  }
};
</script>

<style scoped>
div {
  background-color: rgb(31, 44, 83);
  margin: 0;
}
#generateButton {
  float: right;
  margin-left: 100%;
}
#configurator {
  padding: 5pt;
}
hr {
  margin-left: 5pt;
  margin-right: 5pt;
  background-color: rgb(165, 165, 165);
  height: 1px;
  width: inherit;
  border: none;
}
h4 {
  margin: 5pt;
  float: left;
  margin-right: 100%;
}
.description {
  float: left;
  margin: 5pt;
}
.row {
  margin-bottom: 5pt;
}
</style>