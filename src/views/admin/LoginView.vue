<script>
import { RouterLink } from 'vue-router';

</script>
<template>
    <div class="h-screen flex items-center">
        <div class=" flex-1 card bg-base-100 max-w-sm shadow-xl mx-auto">
            <div class="card-body">
                <div class="flex flex-col items-center">
                    <h2 class="card-title">Log in</h2>
                    <label class="form-control w-full">
                        <div class="label">
                            <span class="label-text">Email</span>
                        </div>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    </label>
                    <label class="form-control w-full">
                        <div class="label">
                            <span class="label-text">password</span>
                        </div>
                        <input type="password" placeholder="Type here" class="input input-bordered w-full" />
                    </label>
                    <div class="form-control w-full">
                        
                        <RouterLink :to="{name:'admin-dashboard'}" class="btn btn-neutral mt-4 w-full">Sign in</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>