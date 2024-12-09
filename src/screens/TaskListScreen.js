import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TaskCard from '../components/TaskCard';
import RoundTaskButton from '../components/RoundTaskButton';
import { useTaskContext } from '../bloc/taskBloc';

const TaskListScreen = ({ navigation }) => {
  const { tasks, toggleTaskStatus, clearCompleted } = useTaskContext();

  const keyExtractor = (item) => item.id ? item.id.toString() : `${Math.random()}`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas do Dia</Text>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskCard task={item} onToggleStatus={toggleTaskStatus} />
        )}
        keyExtractor={keyExtractor}
        ListEmptyComponent={
            <View style={styles.emptyContainer}> 
                <Text style={styles.emptyText}>Não há nenhuma tarefa</Text>
            </View>
            
        }
      />
      
      <View style={styles.buttonContainer}>
        <RoundTaskButton
          iconName="trash"
          onPress={clearCompleted}
          style={styles.clearButton}
        />
        <RoundTaskButton
          iconName="add"
          onPress={() => navigation.navigate('AddTask')}
          style={styles.addButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emptyContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
  emptyText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    color: '#777',
    height:400,
    paddingTop: 260,
},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },

});

export default TaskListScreen;