import { useState } from "react";
import { View, StyleSheet, TextInput, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

    // start adding a goal
    const startAddGoalHandler = () => {
      setModalIsVisible(true);
    };
  
    // ending adding a goal
    const endAddGoalHandler = () => {
      setModalIsVisible(false);
    };
  
  //  pushing a goal into course goal catalog
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    endAddGoalHandler();
  }

  // deleting a goal
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <Button title="Add Goal" color="#5a0ecc" onPress={startAddGoalHandler} />

      {modalIsVisible && (
        <GoalInput visible={modalIsVisible} onCancel = {endAddGoalHandler} onAddGoal={addGoalHandler} />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
