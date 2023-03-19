import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/HomeScreen';
import LoginScreen from './src/pages/LoginScreen';
import RegisterScreen from './src/pages/RegisterScreen';
import SplashScreen from './src/pages/SplashScreen';
import { NAVIGATOR_SCREEN } from './src/utils/enum';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={NAVIGATOR_SCREEN.SPLASH} component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name={NAVIGATOR_SCREEN.HOME} component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name={NAVIGATOR_SCREEN.LOGIN} component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name={NAVIGATOR_SCREEN.REGISTER} component={RegisterScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
