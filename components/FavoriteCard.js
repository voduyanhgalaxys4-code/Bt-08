
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function FavoriteCard({
  item,
  onPress,
  onRemove,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.location}>
          ✦ {item.location}
        </Text>

        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        <Text style={styles.rating}>
          ★ {item.rating}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.removeButton}
        onPress={onRemove}
      >
        <Text style={styles.removeText}>♥</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 10,
    marginBottom: 14,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#203B30',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  image: {
    width: 100,
    height: 105,
    borderRadius: 13,
    backgroundColor: '#E5E9E2',
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
  },
  location: {
    color: '#A1875C',
    fontSize: 10,
    fontWeight: 'bold',
  },
  name: {
    color: '#203B30',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 6,
  },
  description: {
    color: '#849087',
    fontSize: 11,
    lineHeight: 16,
    marginTop: 5,
  },
  rating: {
    color: '#B18A43',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 7,
  },
  removeButton: {
    padding: 8,
  },
  removeText: {
    color: '#D66A55',
    fontSize: 21,
  },
});
