import React, {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from './Src/Components/ActionSheet';

import {observer} from 'mobx-react';
import Routes from './Src/Navigation/Routes';
import {authStore} from './Src/Store/AuthStore/AuthStore';

import ActionChild from './Src/Components/ActionChild';
const App = observer(() => {
  const ref = React.useRef(null);
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
