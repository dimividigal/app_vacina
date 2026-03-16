import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "VACINAS";

export async function salvarVacinas(vacinas) {
  await AsyncStorage.setItem(KEY, JSON.stringify(vacinas));
}

export async function carregarVacinas() {
  const dados = await AsyncStorage.getItem(KEY);
  return dados ? JSON.parse(dados) : [];
}