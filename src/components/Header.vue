<template>
  <div class="shadow mb-3">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#">
        <img id="logo" src="/logo.png" class="d-inline-block align-top" alt="contributing-gen" />
        Contributing-Gen
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="https://github.com/bttger/contributing-gen">Improve the Template</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="https://github.com/bttger/contributing-gen-web">
            <img
              id="github-logo"
              src="../assets/GitHub-Mark-64px.png"
              class="d-inline-block align-top"
              alt="GitHub Repository"
            />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
</script>

<style scoped>
#logo {
  width: 20pt;
}
#github-logo {
  width: 16pt;
}
</style>