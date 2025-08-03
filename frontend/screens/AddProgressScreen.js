import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import axios from "axios";
import { API_BASE_URL } from "../config/api";
import FormInput from "../components/FormInput";
import ActionButton from "../components/ActionButton";

export default function AddProgressScreen({ navigation }) {
  const [reps, setReps] = useState("");
  const [calories, setCalories] = useState("");
  const [weight, setWeight] = useState("");
  const [loading, setLoading] = useState(false);

  // Validate user inputs
  const validateInputs = () => {
    if (!reps || !calories || !weight) {
      Alert.alert("Error", "Please fill in all fields");
      return false;
    }

    const isValid = [reps, calories, weight].every(
      (val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0
    );
    if (!isValid) {
      Alert.alert("Error", "All values must be valid positive numbers");
      return false;
    }

    return true;
  };

  // Submit data to backend
  const handleSubmit = async () => {
    if (!validateInputs()) return;

    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/progress`, {
        reps: parseFloat(reps),
        calories: parseFloat(calories),
        weight: parseFloat(weight),
        date: new Date().toISOString(),
      });

      Alert.alert("Success", "Progress added successfully!", [
        { text: "OK", onPress: () => navigation.navigate("Dashboard") },
      ]);
    } catch (error) {
      console.error("Error adding progress:", error);
      Alert.alert("Error", "Failed to add progress. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Add New Progress</Text>
          <Text style={styles.headerSubtitle}>
            Record your fitness achievements
          </Text>
        </View>

        {/* Input Fields */}
        <View style={styles.formContainer}>
          <FormInput
            label="Reps"
            value={reps}
            onChangeText={setReps}
            placeholder="Enter number of reps"
          />
          <FormInput
            label="Calories Burned"
            value={calories}
            onChangeText={setCalories}
            placeholder="Enter calories burned"
          />
          <FormInput
            label="Weight (kg)"
            value={weight}
            onChangeText={setWeight}
            placeholder="Enter current weight"
          />

          {/* Submit and Cancel Buttons */}
          <ActionButton
            title="Add Progress"
            onPress={handleSubmit}
            loading={loading}
            color="#4CAF50"
            disabled={loading}
          />
          <ActionButton
            title="Cancel"
            onPress={() => navigation.goBack()}
            disabled={loading}
            color="#888"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f0f23" },
  scrollContainer: { flexGrow: 1 },
  header: { padding: 20, backgroundColor: "#1a1a2e" },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  headerSubtitle: { fontSize: 16, color: "#ccc" },
  formContainer: { padding: 20, flex: 1 },
});
