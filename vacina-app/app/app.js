import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListaVacinas from "./screens/ListaVacinas";
import FormVacina from "./screens/FormVacina";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="Vacinas" component={ListaVacinas} />
        <Stack.Screen name="Cadastrar Vacina" component={FormVacina} />
      </Stack.Navigator>
    
  );
}