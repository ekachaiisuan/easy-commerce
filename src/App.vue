<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useCartStore } from './stores/user/cart';
import { useProductStore } from './stores/user/product';
import { useEventStore } from './stores/event';

const cart = useCartStore()
const productStore = useProductStore()
const eventStore = useEventStore()

onMounted(() => {
  cart.loadCart()
  productStore.loadProducts()
  eventStore.popupMessage('info', 'Start')
})
</script>

<template>
 
    <div v-if="eventStore.alert" class="toast">
      <div class="alert" :class="`alert-${eventStore.data.status}`">
        <span>{{ eventStore.data.message }}</span>
      </div>
    </div>

    <RouterView></RouterView>
  


</template>