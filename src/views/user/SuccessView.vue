<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import { onMounted,ref } from 'vue';
import { useCartStore } from '@/stores/user/cart';
const cart = useCartStore()
const orderData = ref({})
onMounted(() => {
    cart.loadCheckout()
    if(cart.checkout.orderNumber){
        orderData.value = cart.checkout
    }
})
</script>
<template>
    <UserLayout>
        <div class="card bg-base-100 w-3/4 shadow-xl mx-auto my-8 bg-slate-50">
            <div class="card-body">
                <h2 class="card-title">Your order is successful!</h2>
                <div>
                    Hi {{ orderData.orderNumber }}
                </div>
                <div>
                    เตรียมรอรับสินค้าของคุณได้เลย
                </div>
                <div class="divider"></div>
                <div class="grid grid-cols-4 gap-2">
                    <div>
                        <div class="font-bold">Order date</div>
                        <div>{{ orderData.createdDate }}</div>
                    </div>
                    <div>
                        <div class="font-bold">Order Number</div>
                        <div>{{ orderData.orderNumber }}</div>
                    </div>
                    <div>
                        <div class="font-bold">Payment method</div>
                        <div>{{ orderData.paymentMethod }}</div>
                    </div>
                    <div>
                        <div class="font-bold">Address</div>
                        <div>{{ orderData.address }}</div>
                    </div>
                </div>
                <div class="divider"></div>
                <div v-for="product in orderData.products" class="grid grid-cols-4 gap-2 mb-4 items-center">
                    <div>
                        <img class="w-full" :src="product.imageUrl">
                    </div>
                    <div>
                        ชื่อ : {{ product.name }}
                    </div>
                    <div>
                        จำนวน : {{ product.quantity }}
                    </div>
                    <div>
                        รวม : {{ product.price * product.quantity }}
                    </div>
                </div>
            </div>
        </div>

    </UserLayout>

</template>