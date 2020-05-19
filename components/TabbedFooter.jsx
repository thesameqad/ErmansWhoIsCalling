import MainScreen from './screens/MainScreen';
import NotificationScreen from './screens/NotificationScreen';
import AccountScreen from './screens/AccountScreen';
import { Icon, Button } from 'native-base';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;            
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Notifications') {
              iconName = 'bell';
            } else if(route.name === 'Account') {
              iconName = 'user';
            }

            // You can return any component that you like here!
            return <Icon type="FontAwesome" name={iconName} style={{fontSize:size, color:color}} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#5fb0f4',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}