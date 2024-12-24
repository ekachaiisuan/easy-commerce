// stores/counter.js
import { defineStore } from 'pinia'

export const useAdminUserStore = defineStore('adminUser', {
  state: () => ({
    list:[
        {
            fullname:'Mike',
            role:'admin',
            status:'active',
            updateAt: (new Date).toISOString()
        }
    ]
  }),

  actions: {
    getUser(index){
        return this.list[index]
    },
    updateUser (index,userData){
        Object.assign(this.list[index],userData)
        this.list[index].updateAt = (new Date).toISOString()
    }
    
  },
})