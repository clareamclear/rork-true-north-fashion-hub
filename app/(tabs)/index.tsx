import React from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import CategoryCard from "@/components/CategoryCard";
import Header from "@/components/Header";
import categories from "@/constants/categories";
import type { Category } from "@/constants/categories";
import Colors from "@/constants/colors";

export default function HomeScreen() {
  const router = useRouter();

  const handleCategoryPress = (categoryId: Category["id"]) => {
    router.push({
      pathname: "/occasions",
      params: { category: categoryId }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="True North" 
        subtitle="Discover Canadian-made fashion" 
      />
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard category={item} onPress={handleCategoryPress} />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
    alignItems: "center",
  },
});