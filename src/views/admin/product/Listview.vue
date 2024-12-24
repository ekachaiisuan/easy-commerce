<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useAdminProductStore } from '@/stores/admin/product';
import Trash from '@/components/icons/Close.vue';
import Edit from '@/components/icons/Edit.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
import Table from '@/components/Table.vue';

const adminProduct = useAdminProductStore()

const dataheader = [
    'name',
    'image',
    'price',
    'quantity',
    'status',
    'updateAt',
    'Action'
]

const removeProduct = (index) => {
    adminProduct.removeProduct(index)
}

onMounted(() => {
    adminProduct.loadProducts()
    console.log('render product list')
})

</script>
<template>
    <AdminLayout>
        <div class="flex items-center justify-between m-4">
            <div class="text-3xl">
                Product
            </div>
            <div>
                <RouterLink :to="{ name: 'admin-product-create' }" class="btn btn-neutral">Add New</RouterLink
                    :to="{name:'admin-create-product'}">
            </div>
        </div>
        <Table :headers="dataheader">
            <tr v-for="(item, index) in adminProduct.list">
                <th>{{ item.name }}</th>
                <td><img :src="item.image" class="w-12"></td>
                <td>{{ item.price }}</td>
                <td>{{ item.remainQuantity }}/{{ item.quantity }}</td>
                <td>
                    <div class="badge" :class="item.status === 'open' ? 'badge-success' : 'badge-error'">{{ item.status }}
                    </div>
                </td>
                <td>{{ item.updateAt }}</td>
                <td>
                    <div class="flex">
                        <RouterLink :to="{ name: 'admin-product-update', params: { id: index } }" class="btn btn-ghost">
                            <Edit class="w-12"></Edit>
                        </RouterLink>
                        <Trash class="btn btn-ghost" @click="removeProduct(index)"></Trash>
                    </div>
                </td>
            </tr>

        </Table>
    </AdminLayout>
</template>