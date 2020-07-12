<template>
  <div class="float-right">
    <div class="d-flex">
      <b-icon-info-circle v-b-tooltip.hover title="Show plain markdown" class="ml-auto"></b-icon-info-circle>
      <b-form-checkbox
        switch
        size="lg"
        class="ml-1"
        v-bind:checked="value"
        v-on:input="$emit('input', $event)"
      ></b-form-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputSwitchMarkdown",
  props: ["value"]
};
</script>

<style scoped>
.custom-switch {
  top: -7px;
  left: 5px;
}
</style>