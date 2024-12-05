import Product from '@/components/Product.vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
    state: () => ({
        list: [{
          name: 'honda2',
          imageUrl: 'https://picsum.photos/id/76/200/300',
          quantity: 10,
          about: 'testt',
          status: 'open',
          price: 100,
        },
        {
            name: 'toyota2',
            imageUrl: 'https://picsum.photos/id/77/200/300',
            quantity: 10,
            about: 'testt',
            status: 'open',
            price: 100,
          },
          {
            name: 'nissan',
            imageUrl: 'https://picsum.photos/id/78/200/300',
            quantity: 10,
            about: 'testt',
            status: 'open',
            price: 100,
          },
    ],
        loaded: false
      }),
    actions:{
      filterProducts (searchText){
        return this.list.filter(product=>product.name.includes(searchText))
      }
    }

})
