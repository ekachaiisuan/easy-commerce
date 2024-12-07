<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useCartStore } from './stores/user/cart';
const cart = useCartStore()

onMounted(()=>{
  cart.loadCart()
})
</script>

<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>