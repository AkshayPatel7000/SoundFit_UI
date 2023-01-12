import {action, makeObservable, observable} from 'mobx';

class AuthStore {
  userData = {
    actionSheet: false,
    steps: {},
  };
  constructor() {
    makeObservable(this, {
      userData: observable,
      setActionSheet: action,
      setSteps: action,
    });
  }
  setActionSheet(value) {
    this.userData.actionSheet = value;
  }
  setSteps(value) {
    this.userData.steps = value;
  }
}
export const authStore = new AuthStore();
