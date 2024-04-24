import React from 'react';
import { makeAutoObservable } from 'mobx';

export class Store {
  currentUser: { firstName: string; email: string };
  constructor() {
    makeAutoObservable(this);
  }

  authorizationUser(user) {
    this.currentUser = user;
  }
}

export default new Store();
const StoreContext = React.createContext(new Store());

export const useRootState = () => React.useContext(StoreContext);
