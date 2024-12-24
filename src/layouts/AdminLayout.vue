<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
const activeMenu = ref('')
const route = useRoute()
const menus = [
    {
        name: 'Dashboard',
        routeName: 'admin-dashboard'
    },
    {
        name: 'User',
        routeName: 'admin-user-list'
    },
    {
        name: 'Order',
        routeName: 'admin-orders-list'
    },
    {
        name: 'Product',
        routeName: 'admin-product-list'
    },
    {
        name: 'Logout',
        routeName: 'admin-login'
    },


]

onMounted(() => {
    activeMenu.value = route.name
})
</script>
<template>
    <div class="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content h-screen relative mx-4">
            <!-- Page content here -->
            <slot></slot>
            <div class="flex flex-col items-center">
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden absolute top-1/2">
                    Open drawer
                </label>
            </div>



        </div>
        <div class="drawer-side">
            <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <!-- Sidebar content here -->
                <li class="text-2xl"><a>Jarabe Office</a></li>
                <li v-for="item in menus">
                    <RouterLink :to="{ name: item.routeName }" :class="item.routeName === activeMenu ? 'active' : ''">{{
                        item.name }}</RouterLink>
                </li>
            </ul>
        </div>
    </div>


</template>