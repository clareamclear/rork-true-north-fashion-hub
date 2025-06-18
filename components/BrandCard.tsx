import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MapPin } from "lucide-react-native";
import type { Brand } from "@/constants/brands";
import Colors from "@/constants/colors";

type BrandCardProps = {
  brand: Brand;
  onPress: (brandId: string) => void;
};

export default function BrandCard({ brand, onPress }: BrandCardProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(brand.id)}
      activeOpacity={0.9}
    >
      <Image source={{ uri: brand.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{brand.name}</Text>
        <View style={styles.locationContainer}>
          <MapPin size={14} color={Colors.light.inactive} />
          <Text style={styles.location}>{brand.location}</Text>
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {brand.description}
        </Text>
        <View style={styles.tagsContainer}>
          {brand.occasions.slice(0, 2).map((occasion) => (
            <View key={occasion} style={styles.tag}>
              <Text style={styles.tagText}>
                {occasion.charAt(0).toUpperCase() + occasion.slice(1)}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.light.card,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 100,
    height: "100%",
  },
  content: {
    flex: 1,
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: Colors.light.text,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  location: {
    fontSize: 12,
    color: Colors.light.inactive,
    marginLeft: 4,
  },
  description: {
    fontSize: 13,
    color: Colors.light.text,
    marginBottom: 8,
    lineHeight: 18,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: Colors.light.border,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 6,
  },
  tagText: {
    fontSize: 10,
    color: Colors.light.inactive,
    fontWeight: "500",
  },
});