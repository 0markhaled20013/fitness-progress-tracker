import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { API_BASE_URL } from "../config/api";
import FormInput from "../components/FormInput";
import ActionButton from "../components/ActionButton";

export default function EditProgressScreen({ navigation, route }) {
  const { progress } = route.params;
  const [reps, setReps] = useState("");
  const [calories, setCalories] = useState("");
  const [weight, setWeight] = useState("");
  const [loading, setLoading] = useState(false);

  // Populate form with existing progress data
  useEffect(() => {
    if (progress) {
      setReps(progress.reps.toString());
      setCalories(progress.calories.toString());
      setWeight(progress.weight.toString());
    }
  }, [progress]);

  /** Validate all form inputs before API calls */
  const validateInputs = () => {
    if (!reps || !calories || !weight) {
      Alert.alert("Error", "Please fill in all fields");
      return false;
    }

    const repsNum = parseFloat(reps);
    const caloriesNum = parseFloat(calories);
    const weightNum = parseFloat(weight);

    if ([repsNum, caloriesNum, weightNum].some((n) => isNaN(n) || n < 0)) {
      Alert.alert("Error", "All fields must be valid positive numbers");
      return false;
    }

    return true;
  };

  /** Update progress entry */
  const handleUpdate = async () => {
    if (!validateInputs()) return;
    setLoading(true);

    try {
      await axios.put(`${API_BASE_URL}/progress/${progress._id}`, {
        reps: parseFloat(reps),
        calories: parseFloat(calories),
        weight: parseFloat(weight),
        date: progress.date,
      });

      Alert.alert("Success", "Progress updated successfully!", [
        { text: "OK", onPress: () => navigation.navigate("Dashboard") },
      ]);
    } catch (error) {
      console.error("Error updating progress:", error);
      Alert.alert("Error", "Failed to update progress. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /** Confirm and delete progress entry */
  const handleDelete = () => {
    Alert.alert(
      "Delete Progress",
      "Are you sure you want to delete this progress entry?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            setLoading(true);
            try {
              await axios.delete(`${API_BASE_URL}/progress/${progress._id}`);
              Alert.alert("Deleted", "Progress deleted successfully!", [
                { text: "OK", onPress: () => navigation.navigate("Dashboard") },
              ]);
            } catch (error) {
              console.error("Error deleting progress:", error);
              Alert.alert(
                "Error",
                "Failed to delete progress. Please try again."
              );
            } finally {
              setLoading(false);
            }
          },
        },
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Edit Progress</Text>
          <Text style={styles.headerSubtitle}>Update your fitness record</Text>
          <Text style={styles.entryDate}>
            {new Date(progress.date).toLocaleDateString()} at{" "}
            {new Date(progress.date).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          <FormInput
            label="Reps"
            value={reps}
            onChangeText={setReps}
            keyboardType="numeric"
          />
          <FormInput
            label="Calories Burned"
            value={calories}
            onChangeText={setCalories}
            keyboardType="numeric"
          />
          <FormInput
            label="Weight (kg)"
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
          />

          {/* Buttons */}
          <ActionButton
            title="Update Progress"
            onPress={handleUpdate}
            loading={loading}
            color="#4CAF50"
          />
          <ActionButton
            title="Delete Entry"
            onPress={handleDelete}
            color="#f44336"
            disabled={loading}
          />
          <ActionButton
            title="Cancel"
            onPress={() => navigation.goBack()}
            color="#888"
            disabled={loading}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f0f23" },
  scrollContainer: { flexGrow: 1 },
  header: { padding: 20, paddingTop: 20, backgroundColor: "#1a1a2e" },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  headerSubtitle: { fontSize: 16, color: "#ccc", marginBottom: 10 },
  entryDate: { fontSize: 14, color: "#4CAF50", fontStyle: "italic" },
  formContainer: { padding: 20, flex: 1 },
});
