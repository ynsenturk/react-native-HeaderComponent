import React from 'react';
import {View} from 'react-native';
import Colors from '../../styles/Colors';
import SafeArea from '../../components/SafeArea';
import CustomHeader from '../../components/CustomHeader';

const MyProfile = ({navigation}: {navigation: any}) => {
  const userPlus = () => {
    navigation.navigate('JobDetails');
  };
  return (
    <View>
      <SafeArea safeAreaBg={Colors.newBackground} />
      <CustomHeader
        title="My Profile"
        headerBg={Colors.newBackground}
        iconColor={Colors.snow}
        iconSize={24}
        textSize={18}
        rightIcon
        rightIconName="user-plus"
        rightIconFunction={() => userPlus()}
        navigation={navigation}
      />
    </View>
  );
};

export default MyProfile;
