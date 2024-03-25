import React from 'react';
import { makeAutoObservable } from 'mobx';

export class Store {
  classesInfo = Array.isArray(JSON.parse(localStorage.getItem('classesInfo'))) ? JSON.parse(localStorage.getItem('classesInfo')) : [];
  classesInfoState: any;
  constructor() {
    makeAutoObservable(this);
  }

  addClassesInfo(value: any[]) {
    this.classesInfoState = value;
  }
}

export default new Store();
const StoreContext = React.createContext(new Store());

export const useRootState = () => React.useContext(StoreContext);
