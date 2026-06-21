
import {View} from 'react-native';
import AboutScreen from './components/review/about';
import DetailScreen from './components/review/detail';
import HomeScreen from './components/review/home';

import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';
import { OPENSAN_REGULAR } from './utils/const';

import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler'
import AppNavigation from './components/navigation/app.navigation';



const App = () =>  {
  SplashScreen.preventAutoHideAsync();

  
  const [loaded, error] = useFonts({
    [OPENSAN_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  
  

  return (
    <NavigationContainer>
      <AppNavigation />
      
    </NavigationContainer>
  )
}
export default App;