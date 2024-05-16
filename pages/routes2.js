// import React from 'react';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Home } from './home'
// import { Perfil } from './perfil'
// import { Calculadora } from './calculadora'
// import { Ionicons } from '@expo/vector-icons/'

// const Tab = createBottomTabNavigator();


// export function Routes2() {
//   return (
//     <Tab.Navigator> 
//        <Tab.Screen
//         name="home"
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



import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons/'
import { Home } from './home'
import { Perfil } from './perfil'
import { Calculadora } from './calculadora';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Routes2() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="calculadora"
          component={Calculadora}
          options={{
            tabBarLabel: 'Calculadora',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calculator-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="perfil"
          component={Perfil}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle-outline" size={size} color={color} />
            ),
          }}
        />


      </Tab.Navigator>
    </NavigationContainer>
  )
}