
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import FavoriteCard from '../components/FavoriteCard';

export default function FavoritesScreen({
  navigation,
  destinations,
  favorites,
  onToggleFavorite,
}) {
  const favoriteDestinations = destinations.filter(
    item => favorites.includes(item.id)
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>YOUR COLLECTION</Text>
        <Text style={styles.title}>Điểm đến yêu thích</Text>
        <Text style={styles.subtitle}>
          Những nơi bạn muốn đặt chân đến
        </Text>
      </View>

      <View style={styles.countBox}>
        <Text style={styles.count}>
          {favoriteDestinations.length} địa điểm đã lưu
        </Text>
        <Text style={styles.heart}>♥</Text>
      </View>

      <FlatList
        data={favoriteDestinations}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <FavoriteCard
            item={item}
            onPress={() =>
              navigation.navigate('Detail', {
                destination: item,
              })
            }
            onRemove={() => onToggleFavorite(item.id)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>♡</Text>
            <Text style={styles.emptyTitle}>
              Chưa có địa điểm yêu thích
            </Text>
            <Text style={styles.emptyText}>
              Hãy khám phá và lưu lại những nơi
              bạn muốn ghé thăm nhé!
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3EB',
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  header: {
    marginBottom: 22,
  },
  eyebrow: {
    color: '#A1875C',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  title: {
    color: '#203B30',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 9,
  },
  subtitle: {
    color: '#849087',
    fontSize: 12,
    marginTop: 7,
  },
  countBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E9E8DC',
    borderRadius: 14,
    padding: 15,
    marginBottom: 18,
  },
  count: {
    color: '#203B30',
    fontSize: 12,
    fontWeight: 'bold',
  },
  heart: {
    color: '#D66A55',
    fontSize: 20,
  },
  list: {
    paddingBottom: 25,
    flexGrow: 1,
  },
  empty: {
    alignItems: 'center',
    paddingTop: 65,
    paddingHorizontal: 20,
  },
  emptyIcon: {
    color: '#D6B56D',
    fontSize: 65,
  },
  emptyTitle: {
    color: '#203B30',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 15,
  },
  emptyText: {
    color: '#849087',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 9,
  },
});
