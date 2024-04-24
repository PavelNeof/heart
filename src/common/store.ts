import React from 'react';
import { makeAutoObservable } from 'mobx';
import { ClassesInfoStateType, InfoType } from '../common/types';

export class Store {
  // classesInfo = Array.isArray(JSON.parse(localStorage.getItem('classesInfo'))) ? JSON.parse(localStorage.getItem('classesInfo')) : [];
  dataInfo: InfoType | null;
  classesInfoState: ClassesInfoStateType;
  constructor() {
    makeAutoObservable(this);
  }

  addData(value: InfoType | null) {
    this.dataInfo = value;
  }

  addClassesInfo(value: ClassesInfoStateType) {
    console.log('value addClassesInfo', value);
    this.classesInfoState = value;
  }
}

export default new Store();
const StoreContext = React.createContext(new Store());

export const useRootState = () => React.useContext(StoreContext);
