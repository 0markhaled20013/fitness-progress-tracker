import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StatCard({ number, label }) {
  return (
    <View style={styles.card}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1a1a2e",
    borderRadius: 12,
    padding: 15,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  number: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    color: "#ccc",
    textAlign: "center",
  },
});
