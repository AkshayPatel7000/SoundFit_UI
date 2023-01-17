import React, {useEffect, useLayoutEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from './Src/Components/ActionSheet';

import {observer} from 'mobx-react';
import Routes from './Src/Navigation/Routes';
import {authStore} from './Src/Store/AuthStore/AuthStore';

import ActionChild from './Src/Components/ActionChild';
import {getAsyncData} from './Src/Utils/AsyncStorageService';
import {fitStore} from './Src/Store/AuthStore/FitStore';

const App = observer(() => {
  const ref = React.useRef(null);

  const getIsAuth = async () => {
    const authData = await getAsyncData('auth');
    if (authData) {
      fitStore.setAuth(authData);
    }
  };

  useLayoutEffect(() => {
    getIsAuth();
  }, []);

  useEffect(() => {
    onPress();
  }, [authStore.userData.actionSheet]);

  const onPress = React.useCallback(() => {
    const isActive = ref?.current?.isActive();

    if (!isActive) {
      ref?.current?.scrollTo(-270);
    } else {
      ref?.current?.scrollTo(0);
    }
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheet ref={ref}>
        <ActionChild />
      </BottomSheet>
      <Routes />
    </GestureHandlerRootView>
  );
});
export default App;
