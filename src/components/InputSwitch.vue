<template>
  <b-row class="my-3">
    <b-col cols="12" lg="4" class="d-flex pr-0">
      <label class="my-0">{{ label }}</label>
      <b-icon-info-circle
        v-show="tooltip"
        shift-h="2"
        shift-v="2"
        v-b-tooltip.hover
        :title="tooltip"
      ></b-icon-info-circle>
    </b-col>
    <b-col cols="12" lg="8" class="d-flex">
      <b-form-checkbox switch size="lg" class="pt-0 mt-0" v-bind:checked="value" v-on:input="$emit('input', $event)"></b-form-checkbox>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "InputSwitch",
  props: ["label", "tooltip", "value"]
};
</script>

<style scoped>
</style>