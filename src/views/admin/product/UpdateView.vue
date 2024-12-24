<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
import { useRouter, RouterLink, useRoute } from 'vue-router';
import { useAdminProductStore } from '@/stores/admin/product';
import { onMounted, reactive, ref } from 'vue';

const adminProduct = useAdminProductStore()
const router = useRouter()
const route = useRoute()
const productIndex = ref(-1)
const mode = ref('ADD')

const formData = [
    {
        name: 'Name',
        field: 'name'
    },
    {
        name: 'Image',
        field: 'image'
    },
    {
        name: 'Price',
        field: 'price'
    },
    {
        name: 'Quantity',
        field: 'quantity'
    },
    {
        name: 'About',
        field: 'about'
    },

]

const productData = reactive({
    name: '',
    image: '',
    price: 0,
    quantity: 0,
    about: '',
    status: ''
})

const updateProduct = () => {
    if (mode.value === 'EDIT') {
        adminProduct.updateProduct(productIndex.value,productData)
    } else {
        adminProduct.addProduct(productData)
    }
    router.push({
        name: 'admin-product-list'
    })
}

onMounted(() => {
    if (route.params.id) {
        productIndex.value = parseInt(route.params.id)
        mode.value = "EDIT"
        const selectedProduct = adminProduct.getProduct(productIndex.value)
        console.log(selectedProduct)
        Object.assign(productData, selectedProduct)
    }

})
</script>
<template>
    <AdminLayout>
        <div class="shadow-xl p-8 m-4">
            <div class="text-2xl font-bold">{{ mode }}</div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-4">
                <div v-for="item in formData" class="form-control w-full">
                    <div class="label">
                        <span class="label-text">{{ item.name }}</span>
                    </div>
                    <input v-model="productData[item.field]" type="text" class="input input-bordered w-full" />
                </div>
            </div>

            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-4">
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">status</span>
                    </div>
                    <select v-model="productData.status" class="select select-bordered">
                        <option disabled selected>choose</option>
                        <option>close</option>
                        <option>open</option>
                    </select>
                </label>
            </div>
            <div class="flex justify-end mt-4 gap-2">
                <RouterLink :to="{ name: 'admin-product-list' }" class="btn btn-neutral">Back</RouterLink>
                <button class="btn btn-neutral" @click="updateProduct">{{ mode }}</button>
            </div>

        </div>
    </AdminLayout>
</template>