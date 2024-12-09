<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import UserLayout from '@/layouts/UserLayout.vue';
import { useProductStore } from '@/stores/user/product'
import { useCartStore } from '@/stores/user/cart';
import Product from '@/components/Product.vue'

const route = useRoute()
const productStore = useProductStore()
const searchText = ref('')
const cart = useCartStore()
const router = useRouter()


watch(() => route.query.q, (newSearchText) => {
    searchText.value = newSearchText
}, { immediate: true })

const filterProduct = computed(() => {
    return productStore.filterProducts(searchText.value)
})

const addToCart = (product)=>{
    console.log('add to cart from search',product)
    cart.addToCart(product)
    router.push({
        name:'cart'
    })
}


</script>
<template>
    <UserLayout>
        <div class="text-3xl m-4">Search : <b>{{ searchText }}</b></div>
        <Product 
        :products="filterProduct"
        :addToCart="addToCart"
        >
        </Product>
    </UserLayout>

</template>