import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Occasion } from "@/constants/occasions";
import Colors from "@/constants/colors";
import { MapPin, ShoppingBag, Shirt, TShirt, Umbrella, Scissors, Coffee, Briefcase } from "lucide-react-native";

type OccasionChipProps = {
  occasion: Occasion;
  isSelected: boolean;
  onPress: (occasionId: Occasion["id"]) => void;
};

export default function OccasionChip({ occasion, isSelected, onPress }: OccasionChipProps) {
  const getIcon = () => {
    switch (occasion.icon) {
      case "shirt":
        return <Shirt size={18} color={isSelected ? "#fff" : Colors.light.text} />;
      case "t-shirt":
        return <TShirt size={18} color={isSelected ? "#fff" : Colors.light.text} />;
      case "umbrella":
        return <Umbrella size={18} color={isSelected ? "#fff" : Colors.light.text} />;
      case "scissors":
        return <Scissors size={18} color={isSelected ? "#fff" : Colors.light.text} />;
      case "coffee":
        return <Coffee size={18} color={isSelected ? "#fff" : Colors.light.text} />;
      case "briefcase":
        return <Briefcase size={18} color={isSelected ? "#fff" : Colors.light.text} />;
      default:
        return <ShoppingBag size={18} color={isSelected ? "#fff" : Colors.light.text} />;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSelected ? styles.selectedContainer : null,
      ]}
      onPress={() => onPress(occasion.id)}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>{getIcon()}</View>
      <Text style={[styles.title, isSelected ? styles.selectedTitle : null]}>
        {occasion.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: Colors.light.card,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  selectedContainer: {
    backgroundColor: Colors.light.primary,
    borderColor: Colors.light.primary,
  },
  iconContainer: {
    marginRight: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.light.text,
  },
  selectedTitle: {
    color: "#fff",
  },
});