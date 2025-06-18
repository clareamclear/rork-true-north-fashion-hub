import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ShoppingBag } from "lucide-react-native";
import Colors from "@/constants/colors";

type EmptyStateProps = {
  message: string;
};

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <ShoppingBag size={48} color={Colors.light.inactive} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  message: {
    fontSize: 16,
    color: Colors.light.inactive,
    textAlign: "center",
    marginTop: 16,
    lineHeight: 22,
  },
});