import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ListaVacinas({ navigation }) {

  const [vacinas, setVacinas] = useState([]);

  async function carregarVacinas() {
    const dados = await AsyncStorage.getItem("vacinas");
    if (dados) {
      setVacinas(JSON.parse(dados));
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", carregarVacinas);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, padding: 20 }}>

      <Button
        title="Adicionar Vacina"
        onPress={() => navigation.navigate("Cadastrar Vacina")}
      />

      <FlatList
        data={vacinas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 15,
              borderBottomWidth: 1,
              borderColor: "#ccc"
            }}
          >
            <Text>Vacina: {item.nome}</Text>
            <Text>Data: {item.data}</Text>
            <Text>Dose: {item.dose}</Text>
            <Text>Lote: {item.lote}</Text>

            <Button
              title="Editar"
              onPress={() =>
                navigation.navigate("Cadastrar Vacina", { vacina: item })
              }
            />
          </View>
        )}
      />
    </View>
  );
}