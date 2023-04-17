import React, {FC} from 'react';
import {View, SafeAreaView} from 'react-native';
//import styles from './SafeArea.style';
interface ISafeAreaProps {
  safeAreaBg: string;
}

const SafeArea: FC<ISafeAreaProps> = ({safeAreaBg}) => {
  return (
    <View>
      <SafeAreaView style={{backgroundColor: safeAreaBg}} />
    </View>
  );
};

export default SafeArea;
