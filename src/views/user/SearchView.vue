<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import UserLayout from '@/layouts/UserLayout.vue';
import { useProductStore } from '@/stores/user/product'
import Product from '@/components/Product.vue'

const route = useRoute()
const productStore = useProductStore()
const searchText = ref('')


watch(() => route.query.q, (newSearchText) => {
    searchText.value = newSearchText
}, { immediate: true })

const filterProduct = computed(() => {
    return productStore.filterProducts(searchText.value)
})


</script>
<template>
    <UserLayout>
        <div class="text-3xl m-4">Search : <b>{{ searchText }}</b></div>
        <Product :products="filterProduct">
        </Product>
    </UserLayout>

</template>