<template>
  <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="right" vs-align="center" w="12">
        <vs-button flat active @click="generate">Active</vs-button>
      </vs-col>
    </vs-row>
  </vs-col>
</template>

<script>
export default {
  name: "Configurator",
  methods: {
    generate() {}
  }
};
</script>

<style scoped>
div {
  background-color: rgb(255, 0, 0);
  margin: 0;
}
</style>