import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskCard = ({ task, onToggleStatus }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => onToggleStatus(task.id)}>
        <Text style={[styles.text, task.completed && styles.completed]}>{task.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default TaskCard;