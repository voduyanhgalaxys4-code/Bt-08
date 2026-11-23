
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function DestinationCard({
  item,
  onPress,
  isFavorite,
  onToggleFavorite,
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

      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={onToggleFavorite}
      >
        <Text style={styles.heart}>
          {isFavorite ? '♥' : '♡'}
        </Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.location}>✦ {item.location}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.rating}>★ {item.rating}</Text>
          <Text style={styles.explore}>Khám phá →</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 250,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginRight: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#203B30',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  image: {
    width: '100%',
    height: 155,
    backgroundColor: '#E5E9E2',
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heart: {
    color: '#D66A55',
    fontSize: 22,
  },
  content: {
    padding: 15,
  },
  location: {
    color: '#A1875C',
    fontSize: 11,
    fontWeight: 'bold',
  },
  name: {
    color: '#203B30',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 7,
  },
  description: {
    color: '#849087',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 6,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
  },
  rating: {
    color: '#B18A43',
    fontWeight: 'bold',
    fontSize: 12,
  },
  explore: {
    color: '#203B30',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
