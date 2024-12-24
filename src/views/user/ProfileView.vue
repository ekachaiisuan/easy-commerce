<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import { reactive, onMounted } from 'vue';


const profileUser = reactive({
    Image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
})

const handleFile = (event) => {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            profileUser.Image = e.target.result

        }
        reader.readAsDataURL(file)
    }
}

const handleProfile = () => {
    localStorage.setItem('profile-data', JSON.stringify(profileUser))
    alert('updated success')
}

onMounted(() => {
    let profileData = localStorage.getItem('profile-data')
    if (profileData) {
        profileData = JSON.parse(profileData)
        // profileUser.name = profileData.name
        // profileUser.email = profileData.email
        // profileUser.Image = profileData.Image
        Object.assign(profileUser,profileData) //ความหมายเดียวกับข้างบนแต่เขียน code บรรทัดเดียว
        
    }
})

</script>
<template>
    <UserLayout>
        <div class="card bg-base-100 w-1/2 shadow-xl mx-auto bg-stone-50 m-4">
            <div class="card-body">
                <h2 class="card-title">Profile</h2>
                <div class="flex flex-col items-center">
                    <div class="avatar">
                        <div class="w-24 rounded-full">
                            <img :src="profileUser.Image" />
                        </div>
                    </div>
                    <input type="file" class="file-input file-input-bordered file-input-xs w-full max-w-xs m-4"
                        @change="handleFile" />
                    <label class="form-control w-full">
                        <div class="label">
                            <span class="label-text">Email</span>
                        </div>
                        <input v-model="profileUser.email" type="text" placeholder="Type here"
                            class="input input-bordered w-full" />
                    </label>
                    <label class="form-control w-full">
                        <div class="label">
                            <span class="label-text">Name</span>
                        </div>
                        <input v-model="profileUser.name" type="text" placeholder="Type here"
                            class="input input-bordered w-full" />
                    </label>
                    <button class="btn btn-primary w-full mt-4" @click="handleProfile">UPDATE PROFILE</button>
                </div>

            </div>
        </div>
    </UserLayout>

</template>