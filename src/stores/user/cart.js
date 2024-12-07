// stores/counter.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  getters:{
    summaryQuantity (state){
      return state.items.reduce((acc,item)=>{
        return acc + item.quantity
      },0)
    },
    summaryPrice (state){
      return state.items.reduce((acc,item)=>{
        return acc + (item.price * item.quantity)
      },0)
    }
  },
  actions: {
    loadCart(){
      const previousCart = localStorage.getItem('cart-data')
      if (previousCart){
        this.items = JSON.parse(previousCart)
      }
    },
    addToCart(productData) {
      productData.quantity = 1
      this.items.push(productData);
      localStorage.setItem('cart-data',JSON.stringify(this.items))
    },
    updateQuantity(index, quantity) {
      this.items[index].quantity = quantity;
      localStorage.setItem('cart-data',JSON.stringify(this.items))
    },
    removeItemInCart(index) {
      this.items.splice(index, 1);
      localStorage.setItem('cart-data',JSON.stringify(this.items))
    },
  },
});
