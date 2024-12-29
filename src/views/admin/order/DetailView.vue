<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute, useRouter, RouterLink } from 'vue-router';
import { useAdminOrderStore } from '@/stores/admin/order';
import AdminLayout from '@/layouts/AdminLayout.vue';
import Product from '@/components/Product.vue';

const orderIndex = ref(-1)
const orderData = ref({
    products: []
})
const adminOrderStore = useAdminOrderStore()
const route = useRoute()

onMounted(() => {
    if (route.params.id) {
        orderIndex.value = parseInt(route.params.id)
        const selectedOrder = adminOrderStore.getOrder(orderIndex.value)
        orderData.value = selectedOrder
    }
})

</script>
<template>
    <AdminLayout>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-3xl font-bold">Order detail id:{{ orderIndex }}</div>
            <div class="divider"></div>
            <div class="grid grid-cols-2">
                <div>
                    <div class="font-bold">Order date</div>
                    <div>{{ orderData.updatedAt }}</div>
                </div>
                <div>
                    <div class="font-bold">Order number</div>
                    <div>{{ orderData.no }}</div>
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
            <div v-for="product in orderData.products" class="grid grid-cols-4">
                <div class="mx-auto"><img class="p-2 w-20" :src="product.imageUrl"></div>
                <div>
                    <div class="font-bold">{{ product.name }}</div>
                    <div>{{ product.description }}</div>
                </div>
                <div>จำนวน {{ product.quantity }} ชิ้น</div>
                <div>{{ product.price}} Bath</div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between">
                <div>ราคาสินค้าทั้งหมด</div>
                <div>{{ orderData.totalPrice }}</div>
            </div>
            <div class="flex justify-end mt-4">
                 <RouterLink :to="{name:'admin-orders-list'}" class="btn btn-neutral">Back</RouterLink>
            </div>

        </div>
    </AdminLayout>
</template>