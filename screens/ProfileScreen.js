
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import ProfileInfo from '../components/ProfileInfo';

export default function ProfileScreen({ navigation }) {
  const menuItems = [
    { icon: '✦', title: 'Giới thiệu ứng dụng', screen: 'About' },
    { icon: '⚙', title: 'Cài đặt', screen: 'Settings' },
    { icon: '✉', title: 'Liên hệ', screen: 'Contact' },
  ];

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.eyebrow}>MY JOURNEY</Text>
        <Text style={styles.title}>Hồ sơ cá nhân</Text>
        <Text style={styles.subtitle}>
          Người lưu giữ những hành trình đáng nhớ
        </Text>
      </View>

      <ProfileInfo />

      <Text style={styles.sectionTitle}>
        Tài khoản của tôi
      </Text>

      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={styles.menuIcon}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>

            <Text style={styles.menuTitle}>
              {item.title}
            </Text>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>
          TRAVELLINGAPP
        </Text>
        <Text style={styles.footerText}>
          Collect moments, not things.
        </Text>
        <Text style={styles.version}>
          Phiên bản 1.0.0 · 2026
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3EB',
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 25,
    paddingBottom: 22,
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
    marginTop: 6,
  },
  sectionTitle: {
    color: '#203B30',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 15,
  },
  menu: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0E9',
  },
  menuIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#E9E8DC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#A1875C',
    fontSize: 17,
  },
  menuTitle: {
    flex: 1,
    color: '#203B30',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 13,
  },
  arrow: {
    color: '#A1875C',
    fontSize: 24,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  footerTitle: {
    color: '#203B30',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  footerText: {
    color: '#A1875C',
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 7,
  },
  version: {
    color: '#A0A69E',
    fontSize: 10,
    marginTop: 10,
  },
});
