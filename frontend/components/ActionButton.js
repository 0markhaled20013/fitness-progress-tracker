import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

export default function ActionButton({
  title,
  onPress,
  loading = false,
  color = "#4CAF50",
  disabled = false,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && { opacity: 0.7 }]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      <View style={[styles.buttonContainer, { backgroundColor: color }]}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    borderRadius: 12,
    overflow: "hidden",
  },
  buttonContainer: {
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
