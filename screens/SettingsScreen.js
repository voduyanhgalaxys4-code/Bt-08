
import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [travelTips, setTravelTips] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>PREFERENCES</Text>
        <Text style={styles.title}>Cài đặt</Text>
        <Text style={styles.subtitle}>
          Tùy chỉnh trải nghiệm khám phá của bạn
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Thông báo</Text>

      <View style={styles.card}>
        <View style={styles.setting}>
          <View style={styles.info}>
            <Text style={styles.name}>Thông báo ứng dụng</Text>
            <Text style={styles.description}>
              Nhận thông báo mới từ TravellingApp
            </Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#D9DDD5', true: '#A5B99D' }}
            thumbColor={notifications ? '#203B30' : '#FFFFFF'}
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.setting}>
          <View style={styles.info}>
            <Text style={styles.name}>Gợi ý du lịch</Text>
            <Text style={styles.description}>
              Nhận gợi ý địa điểm khám phá
            </Text>
          </View>
          <Switch
            value={travelTips}
            onValueChange={setTravelTips}
            trackColor={{ false: '#D9DDD5', true: '#A5B99D' }}
            thumbColor={travelTips ? '#203B30' : '#FFFFFF'}
          />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Giao diện</Text>

      <View style={styles.card}>
        <View style={styles.setting}>
          <View style={styles.info}>
            <Text style={styles.name}>Chế độ tối</Text>
            <Text style={styles.description}>
              Bật hoặc tắt chế độ tối
            </Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#D9DDD5', true: '#A5B99D' }}
            thumbColor={darkMode ? '#203B30' : '#FFFFFF'}
          />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Thông tin ứng dụng</Text>

      <View style={styles.card}>
        <TouchableOpacity style={styles.infoRow}>
          <Text style={styles.name}>Tên ứng dụng</Text>
          <Text style={styles.value}>TravellingApp</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.infoRow}>
          <Text style={styles.name}>Phiên bản</Text>
          <Text style={styles.value}>1.0.0</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        TRAVEL MORE · WORRY LESS
      </Text>
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
    paddingBottom: 25,
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    paddingHorizontal: 16,
    marginBottom: 22,
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17,
  },
  info: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    color: '#203B30',
    fontSize: 13,
    fontWeight: '600',
  },
  description: {
    color: '#899188',
    fontSize: 11,
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0E9',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 17,
  },
  value: {
    color: '#A1875C',
    fontSize: 12,
  },
  footer: {
    color: '#A1875C',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 35,
  },
});
