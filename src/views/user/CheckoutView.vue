<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import { useCartStore } from '@/stores/user/cart';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';
const cart = useCartStore()
const router = useRouter()
const FormData = [
    {
        name: 'Email address',
        field: 'email'
    },
    {
        name: 'Name',
        field: 'name'
    },
    {
        name: 'Address',
        field: 'address'
    },
    {
        name: 'Note',
        field: 'note'
    },
]

const userFormData = reactive({
    email: '',
    name: '',
    address: '',
    note: ''
})

const payment = () => {
    cart.checkOut(userFormData)
    router.push({
        name:'success'
    })
}
</script>
<template>
    <UserLayout>
        <div class="flex">
            <section class="flex-auto w-64 bg-base-200">
                <div v-for="item in FormData" class="form-control w-full p-4">
                    <div class="label">
                        <span class="label-text">{{ item.name }}</span>
                    </div>
                    <input v-model="userFormData[item.field]" type="text" placeholder="Type here"
                        class="input input-bordered w-full" />
                </div>
                <button class="btn" @click="payment">Button</button>
            </section>
            <section class="flex-auto w-64 bg-slate-200">
                <div v-for="item in cart.items" class="flex">
                    <div class="flex-1">
                        <img class="w-full p-8" :src="item.imageUrl">
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col justify-between h-full p-8">
                            <div>
                                <div>
                                    {{ item.name }}
                                </div>
                                <div>
                                    จำนวน : {{ item.quantity }}
                                </div>
                            </div>
                            <div>
                                Edit
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divider">
                </div>
                <div class="p-8">
                    <div class="my-4">Order Summary</div>
                    <div class="flex justify-between">
                        <div>ราคาสินค้าทั้งหมด</div>
                        <div>{{ cart.summaryPrice }}</div>
                    </div>
                    <div class="flex justify-between">
                        <div>ค่าส่ง</div>
                        <div>0</div>
                    </div>
                </div>
                <div class="divider">
                </div>
                <div class="p-8">
                    <div class="flex justify-between">
                        <div>ราคารวมทั้งหมด</div>
                        <div>{{ cart.summaryPrice }}</div>
                    </div>
                </div>

            </section>
        </div>
    </UserLayout>

</template>