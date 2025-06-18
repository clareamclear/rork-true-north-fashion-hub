import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, SafeAreaView, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import OccasionChip from "@/components/OccasionChip";
import BrandCard from "@/components/BrandCard";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import occasions from "@/constants/occasions";
import brands from "@/constants/brands";
import type { Occasion } from "@/constants/occasions";
import type { Brand } from "@/constants/brands";
import Colors from "@/constants/colors";

export default function OccasionsScreen() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const router = useRouter();
  const [selectedOccasions, setSelectedOccasions] = useState<Occasion["id"][]>([]);
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>([]);

  useEffect(() => {
    if (category) {
      filterBrands();
    }
  }, [category, selectedOccasions]);

  const filterBrands = () => {
    let filtered = brands.filter((brand) => 
      brand.categories.includes(category as "men" | "women" | "children")
    );

    if (selectedOccasions.length > 0) {
      filtered = filtered.filter((brand) => 
        brand.occasions.some(occasion => selectedOccasions.includes(occasion))
      );
    }

    setFilteredBrands(filtered);
  };

  const handleOccasionPress = (occasionId: Occasion["id"]) => {
    setSelectedOccasions(prev => {
      if (prev.includes(occasionId)) {
        return prev.filter(id => id !== occasionId);
      } else {
        return [...prev, occasionId];
      }
    });
  };

  const handleBrandPress = (brandId: string) => {
    router.push({
      pathname: "/brand-details",
      params: { id: brandId }
    });
  };

  const getCategoryTitle = () => {
    switch (category) {
      case "men":
        return "Men's Fashion";
      case "women":
        return "Women's Fashion";
      case "children":
        return "Children's Fashion";
      default:
        return "Fashion";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{
          title: getCategoryTitle(),
          headerBackTitle: "Categories",
        }}
      />
      
      <Header 
        title={getCategoryTitle()}
        subtitle="Filter by occasion"
      />
      
      <View style={styles.filtersContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.occasionsContainer}
        >
          {occasions.map((occasion) => (
            <OccasionChip
              key={occasion.id}
              occasion={occasion}
              isSelected={selectedOccasions.includes(occasion.id)}
              onPress={handleOccasionPress}
            />
          ))}
        </ScrollView>
      </View>

      {filteredBrands.length > 0 ? (
        <FlatList
          data={filteredBrands}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <BrandCard brand={item} onPress={handleBrandPress} />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <EmptyState 
          message={
            selectedOccasions.length > 0
              ? "No brands match your selected filters. Try selecting different occasions."
              : "No brands found for this category."
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  filtersContainer: {
    marginBottom: 16,
  },
  occasionsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});