import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import DashboardScreen from './screens/DashboardScreen';
import AddProgressScreen from './screens/AddProgressScreen';
import EditProgressScreen from './screens/EditProgressScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1a1a2e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{ title: 'Fitness Progress' }}
        />
        <Stack.Screen 
          name="AddProgress" 
          component={AddProgressScreen} 
          options={{ title: 'Add Progress' }}
        />
        <Stack.Screen 
          name="EditProgress" 
          component={EditProgressScreen} 
          options={{ title: 'Edit Progress' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
