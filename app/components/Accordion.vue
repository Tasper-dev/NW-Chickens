<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="props.dataTarg"
        :aria-expanded="props.ariaExpand"
        :aria-controls="props.ariaControl"
      >
        {{ props.btnText }}
      </button>
    </h2>
    <div
      :id="props.accBodyId"
      :class="props.accClass"
      :data-bs-parent="props.parent"
    >
      <div class="accordion-body">
        <strong> {{ props.accTitle }}</strong>
        {{ props.accBody }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  dataTarg: {
    type: String,
    required: true,
  },
  ariaExpand: {
    type: String,
    default: "false",
  },
  ariaControl: {
    type: String,
    required: true,
  },
  btnText: {
    type: String,
    required: true,
  },
  accBodyId: {
    type: String,
    required: true,
  },
  accClass: {
    type: String,
    default: "accordion-collapse collapse",
  },
  parent: {
    type: String,
    required: true,
  },
  accTitle: {
    type: String,
    required: true,
  },
  accBody: {
    type: String,
    required: true,
  },
});
</script>
<style scoped></style>
