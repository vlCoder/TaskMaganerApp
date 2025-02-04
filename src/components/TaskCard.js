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
    minHeight: 48,
    padding: 10,
    marginBottom: 10,
    paddingVertical: 8, 
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    minHeight: 48,
    paddingTop:10,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default TaskCard;