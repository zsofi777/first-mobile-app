import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";

const GoalItem = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text style={styles.text}>{props.title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: Colors.sixth,
    borderColor: Colors.third,
    borderWidth: 1,
    borderRadius: 10
  },
  text: {
    color: Colors.first,
    fontFamily: "System",
    fontSize: 15
  }
});

export default GoalItem;
