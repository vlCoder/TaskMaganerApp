import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadTasks, saveTasks } from '../storage/storage';

const TaskContext = createContext(); // Criando o contexto

export const useTaskContext = () => useContext(TaskContext); // Hook para acessar o contexto

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); // Estado que guarda as tarefas

  // Carregar tarefas ao iniciar o app
  useEffect(() => {
    const fetchTasks = async () => {
      const storedTasks = await loadTasks(); // Carregar as tarefas do AsyncStorage
      setTasks(storedTasks); // Atualiza o estado com as tarefas carregadas
    };
    fetchTasks();
  }, []);

  // Salvar tarefas sempre que o estado de tarefas mudar
  useEffect(() => {
    if (tasks.length > 0) {
      saveTasks(tasks); // Salva as tarefas no AsyncStorage
    }
  }, [tasks]);

  // Função para alternar o status de conclusão de uma tarefa
  const toggleTaskStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Função para limpar tarefas concluídas
  const clearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, toggleTaskStatus, clearCompleted }}>
      {children}
    </TaskContext.Provider>
  );
};