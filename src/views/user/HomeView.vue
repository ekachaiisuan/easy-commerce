<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import { useProductStore } from '@/stores/user/product'
import Product from '@/components/Product.vue'
import { useCartStore } from '@/stores/user/cart';

const productStore = useProductStore()
const cart = useCartStore()

const addToCart = (product)=>{
    console.log('hello add to cart',product)
    cart.addToCart(product)
}
</script>
<template>
    <UserLayout>
        <div class="hero bg-base-200 min-h-screen">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Hello there</h1>
                    <p class="py-6">
                        Welcome to Shop jarabe
                    </p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        <Product 
        :products="productStore.list"
        :addToCart="addToCart"
        ></Product>
    </UserLayout>


</template>