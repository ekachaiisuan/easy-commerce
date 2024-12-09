<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import { reactive } from 'vue';
const FormData = [
    {
        name:'Email address',
        field: 'email'
    },
    {
        name:'Name',
        field: 'name'
    },
    {
        name:'Address',
        field: 'address'
    },
    {
        name:'Note',
        field: 'note'
    },
]

const userFormData = reactive({
    email:'',
    name:'',
    address:'',
    note:''
})

const keepData = ()=>{
    console.log(userFormData)
}
</script>
<template>
    <UserLayout>
        <div class="flex">
            <section class="flex-auto w-64 bg-base-200">
                <div v-for ="item in FormData" class="form-control w-full p-4">
                    <div class="label">
                        <span class="label-text">{{ item.name }}</span>
                    </div>
                    <input v-model="userFormData[item.field]" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button class="btn" @click="keepData">Button</button>
            </section>
            <section class="flex-auto w-64 bg-slate-200">
                Summary
            </section>
        </div>
    </UserLayout>

</template>