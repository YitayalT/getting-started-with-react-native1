import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style = {styles.image} source={require('../assets/images/goal.jpg')} />
        <TextInput
          style={styles.textInput}
          placeholder="Input your goals here ... "
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style = {styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color='#5e0acc' />
          </View>
          <View style = {styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color='red' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "85%",
    marginRight: 8,
    padding: 8,
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
    marginTop: 10
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    borderRadius:50,
    borderWidth:2,
    borderColor: 'green'
  }
});
