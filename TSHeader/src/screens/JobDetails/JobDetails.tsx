import React from 'react';
import {View} from 'react-native';
import Colors from '../../styles/Colors';
import SafeArea from '../../components/SafeArea';
import CustomHeader from '../../components/CustomHeader';

const JobDetails = ({navigation}: {navigation: any}) => {
  const phone = () => {
    navigation.navigate('Contact');
  };
  // const phoneAlert = () => {
  //   Alert.alert('phone Alert');
  // };
  return (
    <View>
      <SafeArea safeAreaBg={Colors.qlOrange} />
      <CustomHeader
        title="Job Details"
        headerBg={Colors.qlOrange}
        iconColor={Colors.newBackground}
        iconSize={32}
        textSize={24}
        back
        rightIcon
        rightIconName="phone-alt"
        rightIconFunction={() => phone()}
        navigation={navigation}
      />
    </View>
  );
};

export default JobDetails;
