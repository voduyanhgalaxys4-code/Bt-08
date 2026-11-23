
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const categories = [
  { id: 'all', name: 'Tất cả', icon: '✦' },
  { id: 'beach', name: 'Biển đảo', icon: '🌊' },
  { id: 'mountain', name: 'Núi rừng', icon: '⛰️' },
  { id: 'culture', name: 'Văn hóa', icon: '🏛️' },
  { id: 'city', name: 'Thành phố', icon: '🌆' },
];

export default function CategoryList({
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((item) => {
        const active = selectedCategory === item.id;

        return (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.category,
              active && styles.activeCategory,
            ]}
            onPress={() => onSelectCategory(item.id)}
          >
            <Text style={styles.icon}>{item.icon}</Text>
            <Text
              style={[
                styles.name,
                active && styles.activeName,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingRight: 15,
    gap: 10,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 11,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E8E8DF',
  },
  activeCategory: {
    backgroundColor: '#203B30',
    borderColor: '#203B30',
  },
  icon: {
    fontSize: 14,
    marginRight: 6,
  },
  name: {
    color: '#657269',
    fontSize: 12,
    fontWeight: '600',
  },
  activeName: {
    color: '#F5F0E6',
  },
});
