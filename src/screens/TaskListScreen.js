import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TaskCard from '../components/TaskCard';
import RoundTaskButton from '../components/RoundTaskButton';
import { useTaskContext } from '../bloc/taskBloc';
import AdBanner from '../components/AdBanner';

const TaskListScreen = ({ navigation }) => {
  const { tasks, toggleTaskStatus, clearCompleted } = useTaskContext();

  const keyExtractor = (item) => item.id ? item.id.toString() : `${Math.random()}`;

  return (
    <>
      <View accessible={true} style={styles.container}>
        <Text style={styles.title}>Tarefas do Dia</Text>

        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              onToggleStatus={toggleTaskStatus}
            />
          )}
          keyExtractor={keyExtractor}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                Não há nenhuma tarefa
              </Text>
            </View>
          }
        />
      </View>
      <View style={styles.buttonContainer}>
          <RoundTaskButton
            accessible={true}
            accessibilityLabel="excluir tarefas completas"
            accessibilityHint="excluir tarefas já concluídas"
            iconName="trash"
            onPress={clearCompleted}
            style={styles.clearButton}
          />
          <RoundTaskButton
           accessible={true}
           accessibilityLabel="adiciona tarefas"
           accessibilityHint="Vai para a tela de adicionar"
            iconName="add"
            onPress={() => navigation.navigate('AddTask')}
            style={styles.addButton}
          />
      </View>
      <View style={styles.adsContainer}>
        <AdBanner />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight:20,
    paddingTop: 20,
    backgroundColor: '#f4f4f4',
    height:400,
    paddingBottom:75,

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
    alignItems: 'center', 
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    height: 100,
    backgroundColor:'#f4f4f4',

  },
  adsContainer:{
    flexDirection: "row", 
    position: "relative", 
    justifyContent: "center",
  }

});

export default TaskListScreen;