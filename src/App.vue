<script setup lang="ts">
import ProductEditorBroken from "./ProductEditorBroken.vue";
import ProductEditorProperFix from "./ProductEditorProperFix.vue";
import ProductEditorWorkaround from "./ProductEditorWorkaround.vue";
import useProduct from "./useProduct";

const product = useProduct();
</script>

<template>
  <div v-if="product.isLoading.value">Loading...</div>
  <div v-else>
    <h1>Broken:</h1>
    <ProductEditorBroken :product="product.data.value!" />

    <h1>Workaround:</h1>
    <ProductEditorWorkaround :product="product.data.value!" />

    <h1>Fix:</h1>
    <ProductEditorProperFix :product="product.data.value!" />
  </div>
</template>
