<template>
  <div class="center navbar">
      <vs-navbar center-collapsed :dark=true>
        <template #left>
          <img src="/logo.png" alt="">
          <h4>contributing-gen</h4>
        </template>
        <template #right>
          <vs-button flat active @click="openGithubRepo">Contribute</vs-button>
        </template>
      </vs-navbar>
    </div>
</template>

<script>
export default {
  methods: {
      openGithubRepo() {
          window.open("https://github.com/bttger/contributing-gen", "_blank")
      }
  }
};
</script>

<style scoped>
img {
    width: 20pt;
}
h4 {
    padding-left: 3pt;
    color: #ffffff;
}
</style>