import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goaInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goaInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add a goal" onPress={props.onAddGoal} />
      </View>
    );
  }
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#cccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});
