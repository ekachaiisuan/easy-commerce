<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';

import { useAdminUserStore } from '@/stores/admin/user';
import { RouterLink } from 'vue-router';
const AdminUser = useAdminUserStore()
const formData = [
    {
        name: 'Name',
        field: 'name',
        type: 'input'
    },
    {
        name: 'Role',
        field: 'role',
        type: 'select',
        datalist:['Admin','Modula','User']
    },
    {
        name: 'Status',
        field: 'status',
        type: 'select',
        datalist:['Active','Inactive']
    }
]
</script>
<template>
    <AdminLayout>
        <div class="shadow-xl p-8 m-4">
            <div class="text-2xl font-bold">Update User</div>
            <div class="flex flex-col">
                <div v-for="item in formData" class="form-control w-full ">
                    <div class="label">
                        <span class="label-text">{{ item.name }}</span>
                    </div>
                    <div v-if="item.type === 'input'">
                        <input type="text" class="input input-bordered w-full " />
                    </div>
                    <div v-else>
                        <select class="select select-bordered w-full">
                            <option v-for="list in item.datalist">{{ list }}</option>
                        </select>
                    </div>

                </div>
            </div>
            <div class="flex justify-end mt-4 gap-2">
                <RouterLink :to="{ name: 'admin-user-list' }" class="btn btn-neutral">Back</RouterLink>
                <button class="btn btn-neutral" @click="updateProduct">update</button>
            </div>

        </div>
    </AdminLayout>
</template>