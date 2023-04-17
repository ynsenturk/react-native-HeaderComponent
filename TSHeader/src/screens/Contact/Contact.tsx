import React from 'react';
import {View} from 'react-native';
import Colors from '../../styles/Colors';
import SafeArea from '../../components/SafeArea';
import CustomHeader from '../../components/CustomHeader';

const Contact = () => {
  return (
    <View>
      <SafeArea safeAreaBg={Colors.newBackground} />
      <CustomHeader
        title="Contact"
        headerBg={Colors.newBackground}
        iconColor={Colors.snow}
        iconSize={24}
        textSize={18}
      />
    </View>
  );
};

export default Contact;
