import AsyncStorage from '@react-native-async-storage/async-storage';

const setAsyncData = async (key, payload) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(payload));
  } catch (e) {
    console.log('AsyncStorage set Error --> ', JSON.stringify(e));
  }
};

const getAsyncData = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data);
  } catch (e) {
    console.log('AsyncStorage get Error --> ', JSON.stringify(e));
  }
};

const clearAllAsync = async () => {
  try{
    await AsyncStorage.multiRemove(["auth"]);
  }catch(e){
    console.log('AsyncStorage multiRemove Error --> ', JSON.stringify(e));
  }
}

export {setAsyncData, getAsyncData, clearAllAsync};
