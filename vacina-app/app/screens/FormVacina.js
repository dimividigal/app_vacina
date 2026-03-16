import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FormVacina({ route, navigation }) {

  const vacinaEdit = route.params?.vacina;

  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [dose, setDose] = useState("");
  const [lote, setLote] = useState("");

  useEffect(() => {
    if (vacinaEdit) {
      setNome(vacinaEdit.nome);
      setData(vacinaEdit.data);
      setDose(vacinaEdit.dose);
      setLote(vacinaEdit.lote);
    }
  }, []);

  async function salvar() {

    if (!nome || !data || !dose || !lote) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    const dados = await AsyncStorage.getItem("vacinas");
    let vacinas = dados ? JSON.parse(dados) : [];

    if (vacinaEdit) {
      vacinas = vacinas.map(v =>
        v.id === vacinaEdit.id
          ? { ...v, nome, data, dose, lote }
          : v
      );
    } else {
      vacinas.push({
        id: Date.now().toString(),
        nome,
        data,
        dose,
        lote
      });
    }

    await AsyncStorage.setItem("vacinas", JSON.stringify(vacinas));

    navigation.goBack();
  }

  return (
    <View style={{ padding: 20 }}>

      <TextInput
        placeholder="Nome da vacina"
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <TextInput
        placeholder="Data da aplicação"
        value={data}
        onChangeText={setData}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <TextInput
        placeholder="Dose"
        value={dose}
        onChangeText={setDose}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <TextInput
        placeholder="Lote"
        value={lote}
        onChangeText={setLote}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Button title="Salvar Vacina" onPress={salvar} />

    </View>
  );
}