<template>
  <div id="configurator">
    <div id="buttons">
      <vs-button flat active @click="generate">Generate</vs-button>
    </div>
    <div id="specification">
      <p>sdsdf</p>
      <p>sdfsdf</p>
      This wont show
    </div>
  </div>
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