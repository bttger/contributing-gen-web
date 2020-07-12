<template>
  <b-row class="my-3">
    <b-col cols="12" lg="4" class="d-flex pr-0">
      <b-row align-v="center">
        <b-col cols="12">
          <label class="my-0">{{ label }}</label>
          <b-icon-info-circle
              class="ml-1"
              v-show="tooltip"
              v-b-tooltip.hover
              :title="tooltip"
          ></b-icon-info-circle>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="12" lg="8" class="d-flex">
      <b-form-checkbox
        switch
        :disabled="disabled"
        size="lg"
        class="pt-0 mt-0"
        v-bind:checked="value"
        v-on:input="$emit('input', $event)"
      ></b-form-checkbox>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "InputSwitch",
  props: ["label", "tooltip", "disabled", "value"]
};
</script>

<style scoped>
</style>