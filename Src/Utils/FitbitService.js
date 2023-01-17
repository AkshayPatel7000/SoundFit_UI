import {authorize, refresh} from 'react-native-app-auth';
import {fitStore} from '../Store/AuthStore/FitStore';
import {setAsyncData} from './AsyncStorageService';

const {auth} = fitStore?.userData;

// base config
const config = {
  clientId: '23984P',
  clientSecret: '97878255ad7c28361b5c3c8948fe2800',
  redirectUrl: 'com.soundfit://callback',
  scopes: [
    'activity',
    'cardio_fitness',
    'electrocardiogram',
    'heartrate',
    'location',
    'nutrition',
    'oxygen_saturation',
    'profile',
    'respiratory_rate',
    'settings',
    'sleep',
    'social',
    'temperature',
    'weight',
  ],
  serviceConfiguration: {
    authorizationEndpoint: 'https://www.fitbit.com/oauth2/authorize',
    tokenEndpoint: 'https://api.fitbit.com/oauth2/token',
  },
};

const getAuth = async () => {
  try {
    const result = await authorize(config);
    setAsyncData('auth', result);
    fitStore.setAuth(result);
  } catch (error) {
    console.error('Error on getToken catch --> ', JSON.stringify(error));
  }
};

const getRefreshToken = async () => {
  try {
    console.log(
      'Existing Token --> ',
      JSON.stringify(fitStore?.userData?.auth),
    );
    const result = await refresh(config, {
      refreshToken: fitStore?.userData?.auth?.refreshToken,
    });
    console.log('Refresh Token --> ', JSON.stringify(result));
    setAsyncData('auth', result);
    fitStore.setAuth(result);
  } catch (error) {
    console.error('Error on refreshToken catch --> ', JSON.stringify(error));
  }
};

const getActivityData = () => {
  const d = new Date();
  const endPoint = `/1/user/-/activities/date/${d.getFullYear()}-${
    d.getMonth() + 1
  }-${d.getDate()}.json`;
  fetch(`https://api.fitbit.com${endPoint}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${auth?.accessToken}`,
    },
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(`res: ${JSON.stringify(res)}`);
      fitStore.setSteps({value: res?.summary?.steps});
      fitStore.setCalorie({calorie: res?.summary?.caloriesOut});
      fitStore.setheartRate({value: res?.summary?.restingHeartRate});
    })
    .catch(err => {
      console.error('Error: ', err);
    });
};

const getBreathingData = () => {
  const d = new Date();
  const endPoint = `/1/user/-/activities/heart/date/today/1d.json`;
  fetch(`https://api.fitbit.com${endPoint}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${auth?.accessToken}`,
      accept: 'application/json',
    },
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(`res: ${JSON.stringify(res)}`);
      // fitStore.setSteps({value: res.summary.steps})
    })
    .catch(err => {
      console.error('Error: ', err);
    });
};

const getProfileData = () => {
  const d = new Date();
  const endPoint = `/1/user/-/profile.json`;
  fetch(`https://api.fitbit.com${endPoint}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${auth?.accessToken}`,
      accept: 'application/json',
    },
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(`res: ${JSON.stringify(res)}`);
      // fitStore.setSteps({value: res.summary.steps})
    })
    .catch(err => {
      console.error('Error: ', err);
    });
};

export {
  getAuth,
  getActivityData,
  getBreathingData,
  getRefreshToken,
  getProfileData,
};
