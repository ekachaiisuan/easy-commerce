// stores/counter.js
import { defineStore } from 'pinia';

export const useAdminProductStore = defineStore('admin-product', {
  state: () => ({
    list: [
      // {
      //   name: 'test',
      //   image: 'https://picsum.photos/id/20/200/300',
      //   price: 200,
      //   quantity: 20,
      //   remainQuantity: 11,
      //   status: 'open',
      //   updateAt: new Date().toISOString(),
      // },
    ],
    loaded:false
  }),

  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    loadProducts() {
      const products = localStorage.getItem('admin-products');
      if (products) {
        this.list = JSON.parse(products);
        this.loaded = true
      }
    },
    getProduct(index) {
      if(!this.loaded){ 
        this.loadProducts()
      }
      return this.list[index];
    },
    addProduct(productData) {
      productData.remainQuantity = productData.quantity;
      productData.updateAt = new Date().toISOString();
      this.list.push(productData);
      localStorage.setItem('admin-products',JSON.stringify(this.list))
    },
    updateProduct(index, productData) {
      this.list[index].name = productData.name;
      this.list[index].image = productData.image;
      this.list[index].price = productData.price;
      this.list[index].quantity = productData.quantity;
      this.list[index].remainQuantity = productData.remainQuantity;
      this.list[index].status = productData.status;
      this.list[index].updateAt = new Date().toISOString();
      localStorage.setItem('admin-products',JSON.stringify(this.list))
    },
    removeProduct(index) {
      this.list.splice(index, 1);
      localStorage.setItem('admin-products',JSON.stringify(this.list))
    },
  },
});
