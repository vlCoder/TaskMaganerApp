import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadTasks = async () => {
  try {
    const tasks = await AsyncStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  } catch (error) {
    console.error('Erro ao carregar tarefas:', error);
    return [];
  }
};

export const saveTasks = async (tasks) => {
  try {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks)); // Salva como um array de objetos
  } catch (error) {
    console.error('Erro ao salvar tarefas:', error);
  }
};