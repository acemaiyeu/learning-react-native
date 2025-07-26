
import { useState } from 'react';
import { StyleSheet, Text,  View, TextInput, Button, FlatList, TouchableOpacity, Pressable } from 'react-native';

interface ITodo {
  id: number,
  name: string
}
export default function App() {
  const [todo, setTodo] = useState("");
  const [ListTodo, setListTodo] = useState<ITodo[]>([]);
  function randomInteger(min: number, max: number){
    return Math.floor(Math.random() * (max-min+1)) + min;
  }
  const handleAddTodo = () => {
    if( !todo) {
      alert("empty value")
      return;
    }
    setListTodo([...ListTodo, {id: randomInteger(2,2000000), name: todo}])
    setTodo("")
  }
  const deleteTodo = (id: number) =>{
    const newTodo = ListTodo.filter(item => item.id != id)
    setListTodo(newTodo)
  }
  return (
    <View style={styles.container}>
    <Text style={styles.header}>Todo APP</Text>
    {/* <form action=""></form> */}

    <View style={styles.body}>
      <TextInput value={todo} onChangeText={(value) => setTodo(value)} style={styles.todo_input} />

      <Button onPress={() => handleAddTodo()}  title='Add Todo'/>
    </View>
    {/* list  */}
    <View style={styles.body}>
        <FlatList data={ListTodo} renderItem={({item}) => {
          return (
            <Pressable style={(({pressed}) => ({opacity: pressed ? 0.5 : 2}))} onPress={() => deleteTodo(item.id)}>
              <Text style={styles.todoItem}>{item.name}</Text>
            </Pressable>
          )
        }} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 40
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50
    // marginTop: 50,
    // paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  
  },
  todo_input: {
    borderBottomWidth: 1,
    borderBlockColor: "green",
    padding: 5,
    margin: 15
  },
  body: {
    paddingHorizontal: 10,
    marginBottom: 20
  },
  todoItem: {
    fontSize: 20,
    marginBottom: 25,
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 10
  }
});
