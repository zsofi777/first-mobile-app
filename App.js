import React, { useState } from "react";
import { StyleSheet, View, FlatList, ImageBackground, Image } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import Colors from "./constants/colors";
import Wallpaper1 from "./assets/555.jpg";
import Wallpaper2 from "./assets/121.jpg";

export default function App() {
  //if user enter, update (setEnteredGoal), save (enteredGoal)in state (useState)
  //then pass back to TextInput (= 2 way binding/controlled component)
  const [lifeGoals, setLifeGoals] = useState([]);
  const addGoalHandler = goalTitle => {
    setLifeGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
      //array of objects with key/value pairs -> for FlatList needs keys/ids
      //to generate keys (from is pl.): keyExtractor = {(item, index) => item.id}
    ]);
  };

  const removeGoalHandler = goalId => {
    setLifeGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  return (
    <ImageBackground
      style={styles.imgBackground}
      source={Wallpaper1}
    >
      <Image
      style={styles.img}
      source={Wallpaper2}
      />
      <View style={styles.screen}>
        <GoalInput onAddGoal={addGoalHandler} />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={lifeGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  imgBackground: {
    width: "100%",
    height: "100%"
  },
  img: {
    width: "80%",
    height: "80%",
    position: 'absolute',
    bottom:0,
    left: -50,
    top: 90,
    opacity:0.7,
  }
});
