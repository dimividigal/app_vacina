import React from "react";
import { View, Text, Button } from "react-native";

export default function VacinaItem({ vacina, navigation }) {

  return (
    <View
      style={{
        padding: 15,
        borderBottomWidth: 1,
        borderColor: "#ccc"
      }}
    >
      <Text>Vacina: {vacina.nome_da_vacina}</Text>
      <Text>Data: {vacina.data_da_aplicacao}</Text>
      <Text>Dose: {vacina.dose}</Text>
      <Text>Lote: {vacina.lote}</Text>

      <Button
        title="Editar"
        onPress={() =>
          navigation.navigate("Cadastrar Vacina", { vacina })
        }
      />
    </View>
  );
}