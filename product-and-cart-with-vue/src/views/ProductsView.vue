<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <ProductCardComponent
        v-for="(product, index) in inventory.slice(0,6)"
        :key="product.id"
        class="card"
        :index="index"
        :product="product"
        :addToCart="addToCart"
      />
    </div>
  </main>

</template>

<script>
import ProductCardComponent from '@/components/ProductCardComponent.vue'

export default {
  name: 'ProductCardComponent',
  props: ['inventory', 'addToCart'],
  components: {
    ProductCardComponent
  }
}
</script>

<style scoped>

</style>
