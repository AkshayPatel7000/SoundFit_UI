import {action, makeObservable, observable} from 'mobx';

class AuthStore {
  userData = {
    actionSheet: false,
  };
  constructor() {
    makeObservable(this, {
      userData: observable,
      setActionSheet: action,
    });
  }
  setActionSheet(value) {
    this.userData.actionSheet = value;
  }
  
}
export const authStore = new AuthStore();
