<template>
  <header class="header container-fluid bg-success p-3">
    <h1 class="display-1">NW Chickens</h1>
    <slot name="subheader"></slot>
  </header>
</template>
<script setup></script>
<style scoped>
.header {
  background: #198754;
  background: linear-gradient(
    90deg,
    rgba(25, 135, 84, 1) 0%,
    rgba(37, 201, 125, 1) 49%,
    rgba(25, 135, 84, 1) 100%
  );
}
</style>
