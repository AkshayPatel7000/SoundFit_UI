import {action, makeObservable, observable} from 'mobx';

class FitStore {
  userData = {
    actionSheet: false,
    auth: {},
    heartRate: {},
    steps:{},
    calorie:{},
    distance:{},
    pressure:{},
    sleep:{},
    weight:{},
    height:{},
    activity:{},
    nutrition:{},
    hydration:{},
    moves:{}
  };
  loading = false;

  constructor() {
    makeObservable(this, {
      userData: observable,
      loading: observable,
      setLoading: action,
      setActionSheet: action,
      setAuth:action,
      setheartRate: action,
      setSteps:action,
      setCalorie:action,
      setDistance:action,
      setPressure:action,
      setSleep:action,
      setWeight:action,
      setHeight:action,
      setActivity:action,
      setNutrition:action,
      setHydration:action,
      setMoves:action,
    });
  }
  setLoading(value){
    this.loading = value;
  }
  setActionSheet(value) {
    this.userData.actionSheet = value;
  }
  setAuth(value) {
    console.log("Set Auth --> ", value);
    this.userData.auth = value;
  }
  setheartRate(value) {
    this.userData.heartRate = value;
  }
  setSteps(value){
    this.userData.steps = value;
  }
  setCalorie(value){
    this.userData.calorie = value;
  }
  setDistance(value){
    this.userData.distance = value;
  }
  setPressure(value){
    this.userData.pressure = value;
  }
  setSleep(value){
    this.userData.sleep = value;
  }
  setWeight(value){
    this.userData.weight = value;
  }
  setHeight(value){
    this.userData.height = value;
  }
  setActivity(value){
    this.userData.activity = value;
  }
  setNutrition(value){
    this.userData.nutrition = value;
  }
  setHydration(value){
    this.userData.hydration = value;
  }
  setMoves(value){
    this.userData.moves = value;
  }
}
export const fitStore = new FitStore();
