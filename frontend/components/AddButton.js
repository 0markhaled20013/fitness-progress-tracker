import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function AddButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.gradient}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 20,
    borderRadius: 12,
    overflow: "hidden",
  },
  gradient: {
    padding: 15,
    alignItems: "center",
    backgroundColor: "#4CAF50", // Could be replaced with LinearGradient for fancier effect
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
