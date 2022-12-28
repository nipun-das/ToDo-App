import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {


  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);


  const taskHandler = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const deleteCompltTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }


  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle1}>Hey !</Text>
        <Text style={styles.sectionTitle2}>Today's tasks</Text>
        <View style={styles.items}>

          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => deleteCompltTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      {/* keyboard and task input   */}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>

        {/* write a task */}
        <TextInput style={styles.input} placeholder={'Write a task...'} value={task} onChangeText={text => setTask(text)} />

        {/* add task plus button */}
        <TouchableOpacity onPress={() => taskHandler()}>
          <View style={styles.addButtonWrap}>
            <Text style={styles.addTask}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',

  },
  taskWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle1: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
  },
  sectionTitle2: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
  },
  items: {
    marginTop: 25,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    height:45,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal:20,
    justifyContent: 'space-around',
    // alignItems: 'center',
  },
  input: {
    padding: 15,
    color: 'black',
    maxWidth: 250,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: 210,
  },
  addButtonWrap: {
    width: 55,
    height: 55,
    backgroundColor: 'white',
    borderRadius: 80,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#8080ff',
    alignItems: 'center',
  },
  addTask: {
    color: 'blue',
    fontSize: 35,
    paddingBottom: 6,
  },
});




