import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Home from './src/pages/Home';
import Account from './src/pages/Account';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Account") {
                iconName = "account";
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={30}
                  color={color}
                  style={{ height: 30 }}
                />
              );
            }
          })}
        >
          <Tab.Screen name = "Home" component = {Home}></Tab.Screen>
          <Tab.Screen name = "Account" component = {Home}></Tab.Screen>
        </Tab.Navigator>
         
      </NavigationContainer>
    </SafeAreaProvider>
  );
};



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;