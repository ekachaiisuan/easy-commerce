import Product from '@/components/Product.vue';
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    list: [],
    loaded: false,
  }),

  actions: {
    loadProducts() {
      const products = localStorage.getItem('admin-products');
      if (products) {
        this.list = JSON.parse(products);
        this.loaded = true;
      }
    },
    filterProducts(searchText) {
      return this.list.filter((product) => product.name.includes(searchText));
    },
  },
});
