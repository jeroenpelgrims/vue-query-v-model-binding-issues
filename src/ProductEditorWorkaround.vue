<script setup lang="ts">
import { ref } from "vue";
import type { Product } from "./useProduct";
const props = defineProps<{
  product: Product;
}>();

const editedProduct = ref<Product>(props.product);
</script>

<template>
  <input
    :value="editedProduct.name"
    @input="
      editedProduct = {
        ...editedProduct,
        name: ($event?.target as HTMLInputElement)?.value,
      }
    "
  />
  <div>Edited name: {{ editedProduct.name }}</div>
</template>
