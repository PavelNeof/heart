import React from 'react';
import { makeAutoObservable } from 'mobx';

export class Store {
  currentUser: { firstName: string; email: string; password: string } | null;
  mockProducts: { img: string; productId: string; price: string; name: string; count: number | string; inStock: boolean; id: string }[] = [
    {
      id: '1',
      productId: 'lala1',
      img: 'asd',
      name:
        'Lala Lala LalaLala LalaLalaLalaLala asd asd asd asd asd  LalaLalaLala ' +
        'Lala Lala Lala Lala Lala LalaLala LalaLala Lala Lala LalaLala LalaLala Lala Lala LalaLala LalaLala ' +
        'LalaLala Lala Lala Lala Lala 123',
      price: '500',
      inStock: true,
      count: '1',
    },
    { id: '2', productId: 'blabla1', img: 'asd', name: 'Blabla', price: '40', inStock: false, count: '1' },
  ];
  characteristicsForOrder: {
    sale: string;
    delivery: string;
    quantityProducts: number;
    totalPrice: number;
    fullPrice: number;
  } | null;

  constructor() {
    makeAutoObservable(this);
  }

  authorizationUser(user) {
    this.currentUser = user;
  }

  addMockCountProducts(product) {
    const findProduct = this.mockProducts.find(item => item.id === product.id);
    if (findProduct) {
      const newProducts = this.mockProducts.map(item =>
        item.id === product.id
          ? {
              ...item,
              count: +item.count + 1,
            }
          : item,
      );
      this.mockProducts = newProducts;
      return;
    }
    this.mockProducts = { ...this.mockProducts, product };
  }

  deleteMockCountProducts(id) {
    const findProduct = this.mockProducts.find(item => item.id === id);
    if (findProduct && +findProduct.count > 1) {
      const newProducts = this.mockProducts.map(item =>
        item.id === id
          ? {
              ...item,
              count: +item.count - 1,
            }
          : item,
      );
      this.mockProducts = newProducts;
      return;
    }
    const filteredProducts = this.mockProducts.filter(prod => prod.id !== id);
    this.mockProducts = filteredProducts;
  }

  deleteMockProduct(id) {
    const filteredProducts = this.mockProducts.filter(prod => prod.id !== id);
    this.mockProducts = filteredProducts;
  }
  updateCharacteristicsForOrder(item) {
    this.characteristicsForOrder = item;
  }
}

export default new Store();
const StoreContext = React.createContext(new Store());

export const useRootState = () => React.useContext(StoreContext);
