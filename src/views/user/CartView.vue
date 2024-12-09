<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import Close from '@/components/icons/Close.vue';
import { useCartStore } from '@/stores/user/cart';
import { RouterLink } from 'vue-router';

const cart = useCartStore()

const changeQuantity = (event,index) =>{
    const newQuantity = parseInt(event.target.value)
    cart.updateQuantity(index,newQuantity)
}

</script>
<template>
    <UserLayout>
        <h1 class="text-3xl font-bold m-4">Shopping Cart</h1>
        <div class="flex">
            <div class="flex-auto w-64 bg-base-200 p-4">
                <div v-if="cart.items.length === 0">
                    Cart is empty
                </div>
                <div v-else v-for="(item, index) in cart.items" class="flex">
                    <div class="flex-1">
                        <img class="w-full p-10" :src="item.imageUrl">
                    </div>
                    <div class="flex-1 relative">
                        <div class="flex flex-col justify-between h-full">
                            <div class="grid grid-cols-2">
                                <div>
                                    <div>
                                        <b>{{ item.name }}</b>
                                    </div>
                                    <div>
                                        {{ item.about }}
                                    </div>
                                    <div>
                                        {{ item.price }}
                                    </div>
                                </div>
                                <div>
                                    <select v-model="item.quantity" class="select select-bordered w-1/2" @change="changeQuantity($event,index)">
                                        <option v-for="quantity in [1, 2, 3, 4]">{{ quantity }}</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <b>In Stock</b>
                            </div>
                            <div class="absolute top-0 right-0">
                                <button @click="cart.removeItemInCart(index)"
                                    class="btn btn-ghost text-2xl"><b>x</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-auto w-32 bg-slate-200 p-4">
                <div class="text-xl font-bold">Order Summary</div>
                <div class="divider">รายการ</div>
                <div class="my-4">
                    <div class="flex justify-between">
                        <div>ราคาสินค้า</div>
                        <div>{{ cart.summaryPrice }}</div>
                    </div>
                    <div class="flex justify-between">
                        <div>ค่าส่ง</div>
                        <div>0</div>
                    </div>
                    <div class="flex justify-between">
                        <div>ราคารวมทั้งหมด</div>
                        <div>{{ cart.summaryPrice }}</div>
                    </div>
                </div>
                <div class="flex flex-row-reverse">
                    <RouterLink :to="{name:'checkout'}" class="btn btn-outline">
                        Checkout
                    </RouterLink>
                    
                </div>
            </div>
        </div>
    </UserLayout>

</template>