import React, {useEffect, useState} from 'react';
import GoogleFit, {BucketUnit, Scopes} from 'react-native-google-fit';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import CardSection from '../Components/CardSection';
import Challenges from '../Components/Challenges';
import HomeHeader from '../Components/HomeHeader';
import Progress from '../Components/Progress';
import moment from 'moment';


import Container from '../Components/Container/Container';
import { observer } from 'mobx-react';
const {height, width} = Dimensions.get('window');

const Home = (props) => {
  const [loading, setloading] = useState(true);
  var todayDate = `${moment().format('YYYY-MM-DD')}T00:00:17.971Z`;
  const [heartRate, setHeartRate] = useState(0);
  const [steps, setSteps] = useState(0);
  const [calorie, setCalorie] = useState(0);
  const [distance , setDistance] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [sleep, setSleep] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0)
  const [activity, setActivity] = useState(0)
  const [nutrition , setNutrition] = useState(0);
  const [hydration, setHydration] = useState(0);
  const [moves, setMoves] = useState(0)

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

  useEffect(() => {
    // setloading(true);
    setTimeout(() => {
      setloading(false);
    checkIsAuth()
    }, 3000);
    // return () => clearTimeout(interval);
  }, [props]);

  const checkIsAuth =()=>{
    // console.log("checkk--->")
    GoogleFit.checkIsAuthorized()
      .then(() => {
        if (GoogleFit.isAuthorized) {
            // console.log('GoogleFit.isAuthorized', GoogleFit.isAuthorized);
          return GoogleFit.isAuthorized; // at first do GoogleFit.authorize(options)
        } else {
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
        // console.log("res-->",res) 
        if (res === true) {
          GoogleFit.startRecording((res)=>{
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
            // getMovingSteps();
          })
        }
      });
    }

    async function getDailySteps() {
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
      setSteps(newData.steps[0]);
    }

    async function getHeartRateSamples() {
      const opt = {
        startDate: todayDate, // required ISO8601Timestamp
        endDate: new Date().toISOString(), // required ISO8601Timestamp
        bucketUnit: BucketUnit.HOUR, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
      };
      const res = await GoogleFit.getHeartRateSamples(opt);
      // console.log('getHeartRateSamples', JSON.stringify(res));
      setHeartRate(res[res?.length - 1]);
    }

    async function getDailyCalorieSamples() {
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
      setCalorie({
        ...res[res?.length - 1],
        calorie: Math.abs((res[res?.length - 1].calorie / 1000).toFixed(2)),
      });
      // console.log("calories--->", res)
    }

    async function getDailyDistanceSamples() {
      const opt = {
        startDate: todayDate, // required
        endDate: new Date().toISOString(), // required
        // bucketUnit: BucketUnit.HOUR, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
        bucketUnit: BucketUnit.DAY
        //   bucketInterval: 1, // optional - default 1.
      };
  
      const res = await GoogleFit.getDailyDistanceSamples(opt);
      // console.log('getDailyDistanceSamples', response);
      const arr= res[res?.length - 1] 
      setDistance({...arr , distance:arr.distance / 1000})
      // console.log("check distance --->", {...arr , distance:arr.distance / 1000})
      // or with async/await syntax
    }

    async function getMovingSteps(){
       GoogleFit.startRecording((res)=>{
        console.log("res-->", res)
       })
    }

    async function getBloodPressureSamples() {
      const opt = {
        startDate: todayDate, // required
        endDate: new Date().toISOString(), // required
        bucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
        bucketInterval: 1, // optional - default 1.
      };
      const res = await GoogleFit.getBloodPressureSamples(opt);
      setPressure(res)
      // console.log('getBloodPressureSamples', res);
    }

    async function getSleepSamples(){ 
    const opt = {
      startDate: todayDate, // required, timestamp or ISO8601 string
      endDate: new Date().toISOString(), // required, timestamp or ISO8601 string
    };
    
   const res = await GoogleFit.getSleepSamples(opt)
   setSleep(res)
      // console.log("sleep",res)
    ;
    }

    async function getWeightSamples(){
    const opt = {
      unit: "pound", // required; default 'kg'
      startDate: todayDate, // required
      endDate: new Date().toISOString(), // required
      bucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
      bucketInterval: 1, // optional - default 1. 
      ascending: false // optional; default false
    };
      const res = await GoogleFit.getWeightSamples(opt)
      setWeight(res)
      // console.log("get weight--->>",res);
    }

    async function getHeightSamples(){
      const opt = {
        startDate: todayDate, // required
        endDate: new Date().toISOString(), // required
      };
      
      const res = await GoogleFit.getHeightSamples(opt)
      var arr = {...res[0] , value:(res[0].value * 100).toFixed()}
      setHeight(arr)
        // console.log("height-->",arr)
    }

    async function getActivitySamples(){
      let opt = {
        startDate: todayDate, // required
        endDate: new Date().toISOString(), // required
        bucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
        bucketInterval: 1, // optional - default 1. 
      };    
        const res = await GoogleFit.getActivitySamples(opt)
        setActivity(res)
        // console.log("Activity sample---->>",res);
    }

    async function getDailyNutritionSamples(){
      const opt = {
        startDate: todayDate, // required
        endDate: new Date().toISOString(), // required
        bucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
        bucketInterval: 1, // optional - default 1. 
      };
    
      const res = await GoogleFit.getDailyNutritionSamples(opt)
      setNutrition(res)
        // console.log("Nutrition ---->",res);
    }

    async function getHydrationSamples(){
      const opt = {
        startDate: todayDate, // required
        endDate : new Date().toISOString() // required
      };
    
    const res = await GoogleFit.getHydrationSamples(opt)
    setHydration(res)
      // console.log("Hydration----->",res);
    }

    async function getMoveMinutes(){
      const opt = {
        startDate: todayDate, // required, timestamp or ISO8601 string
        endDate: new Date().toISOString(), // required, timestamp or ISO8601 string
        //bucket unit...
      };
     const res = await GoogleFit.getMoveMinutes(opt)
     setMoves(res)
    //  console.log("get move minutes--->", res)
    } 



  return (
    <Container style={styles.main}>
      <HomeHeader />
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size={50} color={'#fe375d'} />
        </View>
      ) : (
        <ScrollView
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <Challenges />
          <Progress res={steps} Kcal={calorie} way={distance} />
          <CardSection res={steps} Kcal={calorie} way={distance} heart={heartRate} sleeping={sleep} movement={moves[0]} height={height}/>
        </ScrollView>
      )}
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    // flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  loader: {
    height: '100%',
    justifyContent: 'center',
  },
});
