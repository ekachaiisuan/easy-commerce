<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
import { ref,reactive,onMounted } from 'vue';
import { useAdminUserStore } from '@/stores/admin/user';
import { RouterLink,useRoute,useRouter} from 'vue-router';
import { useEventStore } from '@/stores/event';
const adminUser = useAdminUserStore()
const eventStore = useEventStore()
const formData = [
    {
        name: 'Name',
        field: 'fullname',
        type: 'input'
    },
    {
        name: 'Role',
        field: 'role',
        type: 'select',
        datalist:['admin','modula','user']
    },
    {
        name: 'Status',
        field: 'status',
        type: 'select',
        datalist:['active','inactive']
    }
]
const userIndex = ref(-1)
const userData = reactive({
    fullname:'',
    role:'',
    status:''
})
const route = useRoute()
const router = useRouter()
const updateUser =()=>{
    adminUser.updateUser(userIndex.value,userData)
    eventStore.popupMessage('info','update')
    router.push({
        name:'admin-user-list'
    })
}
onMounted(()=>{
    if(route.params.id){
        userIndex.value = parseInt(route.params.id)
        const selectedUser = adminUser.getUser(userIndex.value)
        Object.assign(userData,selectedUser)
    }
})

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
                        <input v-model="userData[item.field]" type="text" class="input input-bordered w-full " />
                    </div>
                    <div v-else>
                        <select v-model="userData[item.field]" class="select select-bordered w-full">
                            <option v-for="list in item.datalist">{{ list }}</option>
                        </select>
                    </div>

                </div>
            </div>
            <div class="flex justify-end mt-4 gap-2">
                <RouterLink :to="{ name: 'admin-user-list' }" class="btn btn-neutral">Back</RouterLink>
                <button class="btn btn-neutral" @click="updateUser">update</button>
            </div>

        </div>
    </AdminLayout>
</template>