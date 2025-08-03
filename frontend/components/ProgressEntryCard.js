import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ProgressEntryCard({ progress, onPress }) {
  const dateObj = new Date(progress.date);
  const date = dateObj.toLocaleDateString();
  const time = dateObj.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Header: Date & Time */}
      <View style={styles.header}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <Text style={styles.stat}>Reps: {progress.reps}</Text>
        <Text style={styles.stat}>Calories: {progress.calories}</Text>
        <Text style={styles.stat}>Weight: {progress.weight}kg</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1a1a2e",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  date: { fontSize: 16, fontWeight: "bold", color: "#fff" },
  time: { fontSize: 14, color: "#ccc" },
  statsRow: { flexDirection: "row", justifyContent: "space-between" },
  stat: { fontSize: 14, color: "#4CAF50" },
});
