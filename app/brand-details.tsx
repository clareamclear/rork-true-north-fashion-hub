import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking, SafeAreaView } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { MapPin, Globe, ExternalLink } from "lucide-react-native";
import brands from "@/constants/brands";
import Colors from "@/constants/colors";

export default function BrandDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const brand = brands.find(b => b.id === id);

  if (!brand) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Brand not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const handleWebsitePress = () => {
    if (brand.website) {
      Linking.openURL(brand.website);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{
          title: brand.name,
          headerBackTitle: "Brands",
        }}
      />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: brand.imageUrl }} style={styles.image} />
        
        <View style={styles.content}>
          <Text style={styles.name}>{brand.name}</Text>
          
          <View style={styles.locationContainer}>
            <MapPin size={16} color={Colors.light.inactive} />
            <Text style={styles.location}>{brand.location}</Text>
          </View>
          
          <Text style={styles.description}>{brand.description}</Text>
          
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <View style={styles.tagsContainer}>
              {brand.categories.map((category) => (
                <View key={category} style={styles.tag}>
                  <Text style={styles.tagText}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Occasions</Text>
            <View style={styles.tagsContainer}>
              {brand.occasions.map((occasion) => (
                <View key={occasion} style={styles.tag}>
                  <Text style={styles.tagText}>
                    {occasion.charAt(0).toUpperCase() + occasion.slice(1)}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          
          {brand.website && (
            <TouchableOpacity 
              style={styles.websiteButton} 
              onPress={handleWebsitePress}
              activeOpacity={0.8}
            >
              <Globe size={18} color="#fff" />
              <Text style={styles.websiteButtonText}>Visit Website</Text>
              <ExternalLink size={16} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    fontSize: 16,
    color: Colors.light.inactive,
  },
  image: {
    width: "100%",
    height: 250,
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
    color: Colors.light.text,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  location: {
    fontSize: 14,
    color: Colors.light.inactive,
    marginLeft: 6,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.light.text,
    marginBottom: 24,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: Colors.light.text,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: Colors.light.card,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  tagText: {
    fontSize: 14,
    color: Colors.light.text,
  },
  websiteButton: {
    backgroundColor: Colors.light.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 8,
  },
  websiteButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 10,
  },
});