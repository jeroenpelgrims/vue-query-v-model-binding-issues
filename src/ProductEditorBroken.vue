<script setup lang="ts">
import { ref } from "vue";
import type { Product } from "./useProduct";
const props = defineProps<{
  product: Product;
}>();

const editedProduct = ref<Product>(props.product);
</script>

<template>
  <input v-model="editedProduct.name" type="text" placeholder="Product name" />
  <div>Edited name: {{ editedProduct.name }}</div>
</template>
