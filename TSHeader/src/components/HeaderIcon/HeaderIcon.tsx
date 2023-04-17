import React, {FC} from 'react';
import {View} from 'react-native';
import styles from './HeaderIcon.style';
import FontAwesoome from 'react-native-vector-icons/FontAwesome';

interface IIconProps {
  iconName: string;
}
const HeaderIcon: FC<IIconProps> = ({iconName}) => {
  return (
    <View>
      <FontAwesoome name={iconName} style={styles.iconStyle} />
    </View>
  );
};

export default HeaderIcon;
