import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Inicial } from './pages/inicial'; 
import { Tela } from './pages/telaContainer'

const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator> 
      <Stack.Screen
        name="inicial"
        component={Inicial}
        options={{ headerShown: false }}
      />
   <Stack.Screen
        name="tela"
        component={Tela}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    
  );
}

// function Inicial() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Calculadora"
//         component={Calculadora}
//         options={{
//           tabBarLabel: 'Calculadora',
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="calculator-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Perfil"
//         component={Perfil}
//         options={{
//           tabBarLabel: 'Perfil',
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="person-circle-outline" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
