import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Colors from "../constants/colors";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState(""); //initial state is empty at the beginning; then bind with TextInput
  const goalInputHandler = enteredText => {
    //enteredText: argument
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        autoCorrect={false}
        keyboardType="visible-password"
        placeholder="don't panic"
        placeholderTextColor={Colors.fifth}
        style={styles.input}
        onChangeText={goalInputHandler} // execute for every keystroke
        value={enteredGoal} //save new state
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.4}
        onPress={addGoalHandler}
      >
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    /*shadowColor: Colors.second,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,*/
    backgroundColor: Colors.sixth,
    padding: 20,
    borderRadius: 10
  },
  input: {
    width: "100%",
    borderColor: Colors.fourth,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
    marginBottom: 20,
    color: Colors.third,
    fontFamily: "System",
    fontSize: 15
  },
  button: {
    width: "40%",
    backgroundColor: Colors.fifth,
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 15,
    alignSelf: "center",
    fontFamily: "System",
    fontWeight: "bold",
    color: Colors.first
  }
});

export default GoalInput;
