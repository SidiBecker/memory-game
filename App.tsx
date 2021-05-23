import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/HomeScreen';
import GameScreen from './src/pages/GameScreen';
import { COLORS } from './src/utils/StyleConstants';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.headerBackground },
          headerTitleStyle: { color: '#FFF', alignSelf: 'center' },
          headerTintColor: '#FFF',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Memory Game' }}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{ headerTitleStyle: { alignSelf: 'flex-start' } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
