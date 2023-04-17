import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import JobDetails from './src/screens/JobDetails';
import MyProfile from './src/screens/MyProfile';
import Contact from './src/screens/Contact';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MyProfile">
        <Drawer.Screen
          name="MyProfile"
          component={MyProfile}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="JobDetails"
          component={JobDetails}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
