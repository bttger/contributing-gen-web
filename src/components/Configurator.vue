<template>
  <div id="configurator">
    
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

</style>