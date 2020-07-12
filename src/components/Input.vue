<template>
  <b-row class="my-3" align-v="center">
    <b-col cols="12" lg="4" class="d-flex pr-0">
      <b-row align-v="center">
        <b-col cols="12">
          <label class="my-0" :for="getKebabCaseLabel">{{ label }}</label>
          <b-icon-info-circle
              class="ml-1"
              v-show="tooltip"
              v-b-tooltip.hover
              :title="tooltip"
          ></b-icon-info-circle>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="12" lg="8">
      <b-form-input
        :id="getKebabCaseLabel"
        :placeholder="placeholder"
        :type="computedType"
        :disabled="disabled"
        trim
        v-bind:value="value"
        v-on:update="$emit('input', $event)"
      ></b-form-input>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Input",
  props: ["label", "placeholder", "type", "tooltip", "disabled", "value"],
  computed: {
    getKebabCaseLabel() {
      return this.label
        .replace(/([A-Z])([A-Z])/g, "$1-$2")
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, "-")
        .toLowerCase();
    },
    computedType() {
      return this.type ? this.type : "text";
    }
  }
};
</script>

<style scoped>
</style>