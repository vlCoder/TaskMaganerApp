// src/components/TextInputMaterial.js
import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const TaskInput = ({ label, value, onChangeText, placeholder, secureTextEntry = false }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#9E9E9E"
        secureTextEntry={secureTextEntry} // Caso queira ocultar o texto, como para senhas
      />
      {value ? (
        <Text style={styles.floatingLabel}>{label}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderColor: '#6200ea', // Cor da borda
    fontSize: 18,
    paddingLeft: 8,
    marginBottom: 10,
    color: '#000', // Cor do texto
  },
  floatingLabel: {
    position: 'absolute',
    top: -10,
    left: 5,
    fontSize: 12,
    color: '#6200ea',
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
});

export default TaskInput;
