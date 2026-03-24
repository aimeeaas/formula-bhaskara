import { NavigationContainer } from '@react-navigation/native';
import CalculoScreen from './screens/calculo/CalculoScreen';
import BaskaraScreen from './screens/calculo/BaskaraScreen';
import HomeScreen from './screens/home/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#69328d'
        },
        headerTintColor: 'rgba(241, 225, 250, 1)',
        headerTitleStyle: {
          fontWeight: 'bold'
        },

        tabBarStyle: {
          backgroundColor: '#f5f5f5',
          height: 60
        },
        tabBarActiveTintColor: '#69328d',
        tabBarInactiveTintColor: '#a17ebf'
      }}>
        <Drawer.Screen name="Atividade" component={HomeScreen} />
        <Drawer.Screen name="Cálculos" component={CalculoScreen} />
        <Drawer.Screen name="Baskara" component={BaskaraScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
