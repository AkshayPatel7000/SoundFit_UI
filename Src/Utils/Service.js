import { authStore } from '../Store/AuthStore/AuthStore';
import GoogleFit, {BucketUnit, Scopes} from 'react-native-google-fit';
import moment from 'moment';
var todayDate = `${moment().format('YYYY-MM-DD')}T00:00:17.971Z`;

const options = {
    scopes: [
      Scopes.FITNESS_ACTIVITY_READ,
      Scopes.FITNESS_BODY_READ,
      Scopes.FITNESS_ACTIVITY_READ,
      Scopes.FITNESS_BLOOD_GLUCOSE_READ,
      Scopes.FITNESS_BLOOD_PRESSURE_READ,
      Scopes.FITNESS_BODY_TEMPERATURE_READ,
      Scopes.FITNESS_HEART_RATE_READ,
      Scopes.FITNESS_LOCATION_READ,
      Scopes.FITNESS_NUTRITION_READ,
      Scopes.FITNESS_OXYGEN_SATURATION_READ,
      Scopes.FITNESS_REPRODUCTIVE_HEALTH_READ,
      Scopes.FITNESS_SLEEP_READ,

      Scopes.FITNESS_ACTIVITY_WRITE,
      Scopes.FITNESS_BODY_WRITE,
      Scopes.FITNESS_ACTIVITY_WRITE,
      Scopes.FITNESS_BLOOD_GLUCOSE_WRITE,
      Scopes.FITNESS_BLOOD_PRESSURE_WRITE,
      Scopes.FITNESS_BODY_TEMPERATURE_WRITE,
      Scopes.FITNESS_HEART_RATE_WRITE,
      Scopes.FITNESS_LOCATION_WRITE,
      Scopes.FITNESS_NUTRITION_WRITE,
      Scopes.FITNESS_OXYGEN_SATURATION_WRITE,
      Scopes.FITNESS_REPRODUCTIVE_HEALTH_WRITE,
      Scopes.FITNESS_SLEEP_WRITE,
    ],
  };

export const checkIsAuth = () => {
  // console.log("checkk--->")
  GoogleFit.checkIsAuthorized()
    .then(e => {
    //   console.log('e-->', e);
      if (GoogleFit.isAuthorized) {
        // console.log('GoogleFit.isAuthorized', GoogleFit.isAuthorized);
        return GoogleFit.isAuthorized; // at first do GoogleFit.authorize(options)
      } else {
        // console.log('else');
        GoogleFit.authorize(options)
          .then(authResult => {
            if (authResult.success) {
              return authResult.success;
              console.log('Auth sucess');
            } else {
              console.log('AUTH_DENIED');
            }
          })
          .catch(() => {
            console.log('AUTH_ERROR');
          });
      }
    })
    .then(res => {
    //   console.log('res-->', res);
      if (res === true) {
        // console.log('reload-->');
        GoogleFit.startRecording(res => {
          getDailySteps();
          getHeartRateSamples();
          getDailyCalorieSamples();
          getDailyDistanceSamples();
          getBloodPressureSamples();
          getSleepSamples();
          getWeightSamples();
          getHeightSamples();
          getActivitySamples();
          getDailyNutritionSamples();
          getHydrationSamples();
          getMoveMinutes();
        });
      }
    });
};

export async function getHeartRateSamples() {
    const opt = {
      startDate: todayDate, // required ISO8601Timestamp
      endDate: new Date().toISOString(), // required ISO8601Timestamp
      bucketUnit: BucketUnit.HOUR, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    };
    const res = await GoogleFit.getHeartRateSamples(opt);
    // console.log('getHeartRateSamples', JSON.stringify(res));
    authStore.setheartRate(res[res?.length - 1]);
  }

export async function getDailySteps() {
  const opt = {
    startDate: todayDate, // required ISO8601Timestamp
    endDate: new Date().toISOString(), // required ISO8601Timestamp
    bucketUnit: BucketUnit.HOUR, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    bucketInterval: 1, // optional - default 1.
  };
  const res = await GoogleFit.getDailySteps(opt);
  var newData = res.filter(
    ele => ele.source === 'com.google.android.gms:estimated_steps',
  )[0];
  // console.log(JSON.stringify(newData.steps[0].value));
  authStore.setSteps(newData.steps[0]);
}

export async function getDailyCalorieSamples() {
  const opt = {
    startDate: todayDate, // required ISO8601Timestamp
    endDate: new Date().toISOString(), // required ISO8601Timestamp
    bucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    bucketInterval: 1, // optional - default 1.
  };
  const res = await GoogleFit.getDailyCalorieSamples(opt);
  // var newData = res.filter(
  //   ele => ele.source === 'com.google.android.gms:estimated_steps',
  // )[0];
  // console.log("calories-->",JSON.stringify(res));
  authStore.setCalorie({
    ...res[res?.length - 1],
    calorie: Math.abs((res[res?.length - 1].calorie / 1000).toFixed(2)),
  });
  // console.log("calories--->", res)
}

export async function getDailyDistanceSamples() {
  const opt = {
    startDate: todayDate, // required
    endDate: new Date().toISOString(), // required
    // bucketUnit: BucketUnit.HOUR, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    bucketUnit: BucketUnit.DAY,
    //   bucketInterval: 1, // optional - default 1.
  };

  const res = await GoogleFit.getDailyDistanceSamples(opt);
  // console.log('getDailyDistanceSamples', response);
  const arr = res[res?.length - 1];
  authStore.setDistance({...arr, distance: arr.distance / 1000});
  // console.log("check distance --->", {...arr , distance:arr.distance / 1000})
}

export async function getBloodPressureSamples() {
  const opt = {
    startDate: todayDate, // required
    endDate: new Date().toISOString(), // required
    bucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    bucketInterval: 1, // optional - default 1.
  };
  const res = await GoogleFit.getBloodPressureSamples(opt);
  authStore.setPressure(res);
  // console.log('getBloodPressureSamples', res);
}

export async function getSleepSamples() {
  const opt = {
    startDate: todayDate, // required, timestamp or ISO8601 string
    endDate: new Date().toISOString(), // required, timestamp or ISO8601 string
  };

  const res = await GoogleFit.getSleepSamples(opt);
  authStore.setSleep(res);
  // console.log("sleep",res)
}

export async function getWeightSamples() {
  const opt = {
    unit: 'pound', // required; default 'kg'
    startDate: todayDate, // required
    endDate: new Date().toISOString(), // required
    bucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    bucketInterval: 1, // optional - default 1.
    ascending: false, // optional; default false
  };
  const res = await GoogleFit.getWeightSamples(opt);
  authStore.setWeight(res);
  // console.log("get weight--->>",res);
}

export async function getHeightSamples() {
  const opt = {
    startDate: todayDate, // required
    endDate: new Date().toISOString(), // required
  };

  const res = await GoogleFit.getHeightSamples(opt);
  var arr = {...res[0], value: (res[0].value * 100).toFixed()};
  authStore.setHeight(arr);
  // console.log("height-->",arr)
}

export async function getActivitySamples() {
  let opt = {
    startDate: todayDate, // required
    endDate: new Date().toISOString(), // required
    bucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    bucketInterval: 1, // optional - default 1.
  };
  const res = await GoogleFit.getActivitySamples(opt);
  authStore.setActivity(res);
  // console.log("Activity sample---->>",res);
}

export async function getDailyNutritionSamples() {
  const opt = {
    startDate: todayDate, // required
    endDate: new Date().toISOString(), // required
    bucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    bucketInterval: 1, // optional - default 1.
  };

  const res = await GoogleFit.getDailyNutritionSamples(opt);
  authStore.setNutrition(res);
  // console.log("Nutrition ---->",res);
}

export async function getHydrationSamples() {
  const opt = {
    startDate: todayDate, // required
    endDate: new Date().toISOString(), // required
  };

  const res = await GoogleFit.getHydrationSamples(opt);
  authStore.setHydration(res);
  // console.log("Hydration----->",res);
}

export async function getMoveMinutes() {
  const opt = {
    startDate: todayDate, // required, timestamp or ISO8601 string
    endDate: new Date().toISOString(), // required, timestamp or ISO8601 string
    //bucket unit...
  };
  const res = await GoogleFit.getMoveMinutes(opt);
  authStore.setMoves(res);
//    console.log("get move minutes--->", res)
}
