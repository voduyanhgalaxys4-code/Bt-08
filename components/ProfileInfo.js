
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function ProfileInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>DA</Text>
      </View>

      <Text style={styles.name}>Võ Duy Anh</Text>
      <Text style={styles.role}>SINH VIÊN · TRAVEL EXPLORER</Text>

      <Text style={styles.bio}>
        Yêu thích khám phá những vùng đất mới,
        lưu giữ khoảnh khắc và trải nghiệm văn hóa
        trên mỗi hành trình.
      </Text>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.number}>06</Text>
          <Text style={styles.label}>Địa điểm</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.statItem}>
          <Text style={styles.number}>2026</Text>
          <Text style={styles.label}>Năm khám phá</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 24,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#203B30',
    shadowOpacity: 0.07,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: '#203B30',
    borderWidth: 3,
    borderColor: '#D6B56D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#F5F0E6',
    fontSize: 28,
    fontWeight: 'bold',
  },
  name: {
    color: '#203B30',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 16,
  },
  role: {
    color: '#A1875C',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    marginTop: 7,
  },
  bio: {
    color: '#849087',
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 18,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ECEDE7',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  statItem: {
    alignItems: 'center',
  },
  number: {
    color: '#203B30',
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    color: '#849087',
    fontSize: 11,
    marginTop: 5,
  },
  divider: {
    width: 1,
    height: 35,
    backgroundColor: '#E8E8DF',
  },
});
