
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function TravelHeader() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>XIN CHÀO, DUY ANH 👋</Text>
        <Text style={styles.title}>Khám phá thế giới</Text>
        <Text style={styles.subtitle}>
          Hành trình mới đang chờ bạn
        </Text>
      </View>

      <TouchableOpacity style={styles.avatar}>
        <Text style={styles.avatarText}>DA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    color: '#9A8057',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  title: {
    color: '#203B30',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 7,
  },
  subtitle: {
    color: '#849087',
    fontSize: 13,
    marginTop: 5,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#203B30',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#D6B56D',
  },
  avatarText: {
    color: '#F5F0E6',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
