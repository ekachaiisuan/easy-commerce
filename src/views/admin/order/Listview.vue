<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
import Table from '@/components/Table.vue';
import { useAdminOrderStore } from '@/stores/admin/order';
import { RouterLink } from 'vue-router';
const adminOrderStore = useAdminOrderStore()
</script>
<template>
    <AdminLayout>
        <div class="flex">
            <div class="text-3xl font-bold">Order</div>

        </div>
        <Table :headers="['Customer Name', 'Price', 'Status', 'Update At', '']">
            <tr v-for="(order,index) in adminOrderStore.list">
                <td>{{ order.customerName }}</td>
                <td>{{ order.totalPrice }}</td>
                <td>{{ order.status }}</td>
                <td>{{ order.updatedAt }}</td>
                <td><RouterLink :to="{name:'admin-orders-detail',params:{id:index}}" class="btn btn-neutral">Detail</RouterLink></td>
            </tr>
        </Table>
    </AdminLayout>
</template>