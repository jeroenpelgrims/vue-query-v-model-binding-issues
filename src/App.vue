<script setup lang="ts">
import ProductEditor from "./ProductEditor.vue";
import useProduct from "./useProduct";

const product = useProduct();
</script>

<template>
  <div v-if="product.isLoading.value">Loading...</div>
  <ProductEditor v-else :product="product.data.value!" />
</template>
