import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TaskListScreen from '../screens/TaskListScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList"
        screenOptions={{
            headerStyle: { backgroundColor: '#6a1b9a' }, 
            headerTintColor: '#fff', 
            headerTitleAlign: 'center', 
            headerTitleStyle: { fontWeight: 'bold' },
            headerLeftContainerStyle: {
              width: 52, 
              height: 52, 
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 15
            },
          }}
        >
        <Stack.Screen name="TaskList" options={{ headerTitle: 'Lista de Tarefas' }} component={TaskListScreen} />
        <Stack.Screen name="AddTask" options={{ headerTitle: 'Adicionar de Tarefas' }} component={AddTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;