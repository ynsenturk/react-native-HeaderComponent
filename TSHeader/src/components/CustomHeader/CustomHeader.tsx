import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './CustomHeader.style';
import HeaderTouchableIcon from '../HeaderTouchableIcon';
interface IHeaderProps {
  title: string;
  headerBg: string;
  iconColor: string;
  iconSize: number;
  textSize: number;
  back?: boolean;
  rightIcon?: boolean;
  rightIconFunction?: () => void;
  rightIconName?: string;
  navigation?: any;
}

const CustomHeader: FC<IHeaderProps> = ({
  title,
  headerBg,
  iconColor,
  iconSize,
  textSize,
  back,
  rightIcon,
  rightIconFunction,
  rightIconName,
  navigation,
}) => {
  const backPress = () => {
    navigation.goBack();
  };
  return (
    <View style={[styles.headerContainer, {backgroundColor: headerBg}]}>
      <View style={styles.view}>
        {back ? (
          <HeaderTouchableIcon
            iconName="chevron-left"
            iconColor={iconColor}
            iconSize={iconSize}
            onPress={backPress}
          />
        ) : (
          ''
        )}
      </View>
      <View style={styles.titleView}>
        <Text
          style={[styles.headerTitle, {color: iconColor, fontSize: textSize}]}>
          {title}
        </Text>
      </View>
      <View style={[styles.view, styles.rightView]}>
        {rightIcon ? (
          <HeaderTouchableIcon
            iconName={rightIconName}
            iconColor={iconColor}
            iconSize={iconSize}
            onPress={() =>
              rightIconFunction !== undefined && rightIconFunction()
            }
          />
        ) : (
          ''
        )}
      </View>
    </View>
  );
};

export default CustomHeader;
