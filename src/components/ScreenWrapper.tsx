import { View, } from 'react-native';
import React, { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ScreenWrapperComponent {
  children: React.ReactNode;
  bg?: string;
}

const ScreenWrapper: FC<ScreenWrapperComponent> = ({ children, bg }) => {
    const {top} = useSafeAreaInsets();
    const paddingTop=top>0?top+5:30;
  return (
    <View style={{flex:1,backgroundColor:bg,paddingTop}}>
      {children}
    </View>
  );
};



export default ScreenWrapper;
