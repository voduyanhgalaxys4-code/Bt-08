
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import TravelHeader from '../components/TravelHeader';
import DestinationCard from '../components/DestinationCard';
import CategoryList from '../components/CategoryList';

export default function HomeScreen({
  navigation,
  destinations,
  favorites,
  onToggleFavorite,
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDestinations =
    selectedCategory === 'all'
      ? destinations
      : destinations.filter(
          item => item.category === selectedCategory
        );

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.content}>
        <TravelHeader />

        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000',
          }}
          style={styles.banner}
          imageStyle={styles.bannerImage}
        >
          <View style={styles.overlay}>
            <Text style={styles.bannerLabel}>
              YOUR NEXT ADVENTURE
            </Text>

            <Text style={styles.bannerTitle}>
              Đi để thấy thế giới rộng lớn hơn
            </Text>

            <Text style={styles.bannerDescription}>
              Mỗi chuyến đi là một câu chuyện đáng nhớ.
            </Text>

            <TouchableOpacity
              style={styles.bannerButton}
              onPress={() =>
                navigation.navigate('Detail', {
                  destination: destinations[0],
                })
              }
            >
              <Text style={styles.bannerButtonText}>
                Khám phá ngay →
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>
              Khám phá theo sở thích
            </Text>
            <Text style={styles.sectionSubtitle}>
              Chọn phong cách hành trình của bạn
            </Text>
          </View>
        </View>

        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>
              Điểm đến nổi bật
            </Text>
            <Text style={styles.sectionSubtitle}>
              Những vùng đất đáng để trải nghiệm
            </Text>
          </View>

          <Text style={styles.count}>
            {filteredDestinations.length} địa điểm
          </Text>
        </View>

        <FlatList
          horizontal
          data={filteredDestinations}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.destinationList}
          renderItem={({ item }) => (
            <DestinationCard
              item={item}
              isFavorite={favorites.includes(item.id)}
              onToggleFavorite={() =>
                onToggleFavorite(item.id)
              }
              onPress={() =>
                navigation.navigate('Detail', {
                  destination: item,
                })
              }
            />
          )}
          ListEmptyComponent={
            <Text style={styles.empty}>
              Chưa có địa điểm trong danh mục này.
            </Text>
          }
        />

        <View style={styles.quote}>
          <Text style={styles.quoteMark}>“</Text>
          <Text style={styles.quoteText}>
            Không phải nơi ta đến, mà là những điều ta
            trải nghiệm trên hành trình.
          </Text>
          <Text style={styles.quoteAuthor}>
            — MY TRAVEL JOURNAL
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3EB',
  },
  content: {
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  banner: {
    height: 220,
    borderRadius: 22,
    overflow: 'hidden',
    marginBottom: 28,
    justifyContent: 'flex-end',
  },
  bannerImage: {
    borderRadius: 22,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15,35,27,0.52)',
    justifyContent: 'flex-end',
    padding: 20,
  },
  bannerLabel: {
    color: '#E4C98D',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 9,
    lineHeight: 32,
  },
  bannerDescription: {
    color: '#F0EEE5',
    fontSize: 12,
    marginTop: 7,
  },
  bannerButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#D6B56D',
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 15,
  },
  bannerButtonText: {
    color: '#203B30',
    fontSize: 12,
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 13,
    marginTop: 5,
  },
  sectionTitle: {
    color: '#203B30',
    fontSize: 19,
    fontWeight: 'bold',
  },
  sectionSubtitle: {
    color: '#899188',
    fontSize: 11,
    marginTop: 5,
  },
  count: {
    color: '#A1875C',
    fontSize: 11,
    fontWeight: 'bold',
  },
  destinationList: {
    paddingVertical: 8,
    paddingRight: 10,
  },
  empty: {
    color: '#849087',
    padding: 20,
  },
  quote: {
    backgroundColor: '#E9E8DC',
    borderRadius: 18,
    padding: 20,
    marginTop: 25,
  },
  quoteMark: {
    color: '#B18A43',
    fontSize: 35,
    fontWeight: 'bold',
    height: 35,
  },
  quoteText: {
    color: '#203B30',
    fontSize: 14,
    lineHeight: 22,
    fontStyle: 'italic',
  },
  quoteAuthor: {
    color: '#A1875C',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 12,
  },
});
