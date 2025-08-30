import { ref } from "vue";

export function toggleBorder() {
  const showBorder = ref(false);
  const clickBorder = () => (showBorder.value = !showBorder.value);
  return {
    showBorder,
    clickBorder,
  };
}
