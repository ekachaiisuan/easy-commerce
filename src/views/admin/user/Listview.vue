<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
import { useAdminUserStore } from '@/stores/admin/user';
import { RouterLink } from 'vue-router';
import Table from '@/components/Table.vue';
import Trash from '@/components/icons/Close.vue';
import Edit from '@/components/icons/Edit.vue';

const adminUserStore = useAdminUserStore()

const changeStatus = (index) => {
    let selectedUser = adminUserStore.list[index]
    selectedUser.status = selectedUser.status === 'active' ? 'inactive' : 'active'
    console.log(selectedUser)
    adminUserStore.updateUser(index, selectedUser)
}

</script>
<template>
    <AdminLayout>
        <div class="flex items-center justify-between m-4">
            <div class="text-3xl">
                User
            </div>
        </div>
        <Table :headers="['Name', 'Role', 'Status', 'UpdatedAt']">
            <tr v-for="(user, index) in adminUserStore.list">
                <td>{{ user.fullname }}</td>
                <td>{{ user.role }}</td>
                <td class="badge" :class="user.status==='active' ?'badge-success':'badge-error'">{{ user.status }}</td>
                <td>{{ user.updateAt }}</td>
                <td>
                    <div class="flex gap-2">
                        <RouterLink :to="{name:'admin-user-update',params:{id:index}}" class="btn btn-neutral">Edit</RouterLink>
                        <button class="btn btn-neutral" @click="changeStatus(index)">{{ user.status
                            ==='active'?'Disable':'Enable' }}</button>
                    </div>
                </td>
            </tr>

        </Table>
    </AdminLayout>
</template>