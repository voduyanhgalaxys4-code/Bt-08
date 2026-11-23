
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1000',
        }}
        style={styles.banner}
      >
        <View style={styles.overlay}>
          <Text style={styles.label}>OUR STORY</Text>
          <Text style={styles.bannerTitle}>
            Đi để cảm nhận, khám phá để trưởng thành
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.title}>
          Về TravellingApp
        </Text>

        <Text style={styles.paragraph}>
          TravellingApp là người bạn đồng hành dành cho
          những ai yêu thích du lịch, khám phá và trải
          nghiệm những vùng đất mới.
        </Text>

        <Text style={styles.paragraph}>
          Ứng dụng giúp bạn tìm kiếm các điểm đến nổi bật,
          khám phá vẻ đẹp Việt Nam và lưu lại những địa
          điểm muốn ghé thăm trong tương lai.
        </Text>

        <View style={styles.quote}>
          <Text style={styles.quoteText}>
            "Mỗi hành trình đều bắt đầu từ một bước chân."
          </Text>
        </View>

        <Text style={styles.sectionTitle}>
          Giá trị chúng tôi hướng đến
        </Text>

        <View style={styles.valueItem}>
          <Text style={styles.valueIcon}>🌍</Text>
          <View style={styles.valueContent}>
            <Text style={styles.valueTitle}>Khám phá</Text>
            <Text style={styles.valueText}>
              Tìm hiểu những vùng đất và văn hóa mới.
            </Text>
          </View>
        </View>

        <View style={styles.valueItem}>
          <Text style={styles.valueIcon}>♡</Text>
          <View style={styles.valueContent}>
            <Text style={styles.valueTitle}>Lưu giữ</Text>
            <Text style={styles.valueText}>
              Ghi lại những địa điểm và trải nghiệm yêu thích.
            </Text>
          </View>
        </View>

        <Text style={styles.footer}>
          TRAVELLINGAPP · MADE WITH PASSION
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3EB',
  },
  banner: {
    height: 240,
    justifyContent: 'flex-end',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15,35,27,0.5)',
    justifyContent: 'flex-end',
    padding: 22,
  },
  label: {
    color: '#D6B56D',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 33,
    marginTop: 10,
  },
  content: {
    padding: 22,
  },
  title: {
    color: '#203B30',
    fontSize: 25,
    fontWeight: 'bold',
  },
  paragraph: {
    color: '#69766D',
    fontSize: 13,
    lineHeight: 23,
    marginTop: 15,
  },
  quote: {
    backgroundColor: '#E9E8DC',
    borderLeftWidth: 4,
    borderLeftColor: '#D6B56D',
    padding: 18,
    marginTop: 24,
    borderRadius: 12,
  },
  quoteText: {
    color: '#203B30',
    fontSize: 14,
    fontStyle: 'italic',
    lineHeight: 22,
  },
  sectionTitle: {
    color: '#203B30',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 15,
  },
  valueItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 15,
    marginBottom: 12,
  },
  valueIcon: {
    fontSize: 25,
    marginRight: 15,
  },
  valueContent: {
    flex: 1,
  },
  valueTitle: {
    color: '#203B30',
    fontSize: 14,
    fontWeight: 'bold',
  },
  valueText: {
    color: '#849087',
    fontSize: 11,
    marginTop: 5,
  },
  footer: {
    color: '#A1875C',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 15,
  },
});
