
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { destination } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: destination.image }}
          style={styles.image}
        />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        <View style={styles.imageLabel}>
          <Text style={styles.labelText}>
            TRAVEL DESTINATION
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.location}>
          ✦ {destination.location}
        </Text>

        <Text style={styles.name}>
          {destination.name}
        </Text>

        <View style={styles.ratingBox}>
          <Text style={styles.rating}>
            ★ {destination.rating}
          </Text>
          <Text style={styles.ratingLabel}>
            Điểm đến được yêu thích
          </Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>
          Về địa điểm này
        </Text>

        <Text style={styles.description}>
          {destination.description}
        </Text>

        <View style={styles.note}>
          <Text style={styles.noteTitle}>
            ✨ Gợi ý hành trình
          </Text>
          <Text style={styles.noteText}>
            Hãy dành thời gian khám phá cảnh đẹp,
            thưởng thức đặc sản địa phương và lưu giữ
            những khoảnh khắc đáng nhớ tại đây.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>
            Quay lại khám phá
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3EB',
  },
  imageContainer: {
    height: 320,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E5E9E2',
  },
  backButton: {
    position: 'absolute',
    top: 45,
    left: 20,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    color: '#203B30',
    fontSize: 32,
    lineHeight: 36,
  },
  imageLabel: {
    position: 'absolute',
    bottom: 18,
    left: 20,
    backgroundColor: '#D6B56D',
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 15,
  },
  labelText: {
    color: '#203B30',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  content: {
    padding: 22,
    paddingBottom: 35,
  },
  location: {
    color: '#A1875C',
    fontSize: 12,
    fontWeight: 'bold',
  },
  name: {
    color: '#203B30',
    fontSize: 29,
    fontWeight: 'bold',
    marginTop: 10,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  rating: {
    color: '#B18A43',
    fontSize: 14,
    fontWeight: 'bold',
  },
  ratingLabel: {
    color: '#849087',
    fontSize: 12,
    marginLeft: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#E4E4D9',
    marginVertical: 24,
  },
  sectionTitle: {
    color: '#203B30',
    fontSize: 19,
    fontWeight: 'bold',
  },
  description: {
    color: '#69766D',
    fontSize: 14,
    lineHeight: 24,
    marginTop: 12,
  },
  note: {
    backgroundColor: '#E9E8DC',
    borderRadius: 17,
    padding: 17,
    marginTop: 24,
  },
  noteTitle: {
    color: '#203B30',
    fontSize: 14,
    fontWeight: 'bold',
  },
  noteText: {
    color: '#69766D',
    fontSize: 12,
    lineHeight: 20,
    marginTop: 9,
  },
  button: {
    backgroundColor: '#203B30',
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: '#F5F0E6',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
