import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TaskButton from '../components/TaskButton';
import TaskInput from '../components/TaskInput';
import { useTaskContext } from '../bloc/taskBloc';

const TaskAddScreen = ({ navigation }) => {
  const [taskName, setTaskName] = useState('');
  const { tasks, setTasks } = useTaskContext(); 

 
  const addNewTask = () => {
    if (taskName.trim()) {
      const newTask = {
        id: tasks.length + 1, 
        name: taskName, 
        completed: false,
      };
  
      console.log('Nova tarefa:', newTask); 
  
      setTasks((prevTasks) => [...prevTasks, newTask]);
  
      setTaskName('');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Tarefa</Text>
      <TaskInput
        style={styles.input}
        placeholder="Digite o nome da tarefa"
        value={taskName}
        onChangeText={setTaskName} 
      />
      <TaskButton
        title="Adicionar Tarefa"
        onPress={addNewTask} 
        disabled={!taskName.trim()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default TaskAddScreen;