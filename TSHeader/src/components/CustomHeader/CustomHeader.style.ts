import {StyleSheet} from 'react-native';
//import Colors from '../../styles/Colors';

export default StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  titleView: {
    flex: 2,
  },
  rightView: {
    justifyContent: 'flex-end',
  },
  headerTitle: {
    fontWeight: '700',
    textAlign: 'center',
  },
});
