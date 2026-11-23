
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from 'react-native';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin.');
      return;
    }

    Alert.alert(
      'Gửi thành công',
      'Cảm ơn bạn đã gửi lời nhắn đến TravellingApp!'
    );

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>GET IN TOUCH</Text>
        <Text style={styles.title}>Liên hệ với chúng tôi</Text>
        <Text style={styles.subtitle}>
          Chúng tôi luôn chào đón những chia sẻ từ bạn.
        </Text>
      </View>

      <View style={styles.contactCard}>
        <Text style={styles.cardTitle}>Thông tin liên hệ</Text>

        <View style={styles.contactItem}>
          <Text style={styles.icon}>✉</Text>
          <View>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>
              travellingapp@example.com
            </Text>
          </View>
        </View>

        <View style={styles.contactItem}>
          <Text style={styles.icon}>♧</Text>
          <View>
            <Text style={styles.label}>Người thực hiện</Text>
            <Text style={styles.value}>Võ Duy Anh · Sinh viên</Text>
          </View>
        </View>
      </View>

      <View style={styles.form}>
        <Text style={styles.formTitle}>Gửi lời nhắn</Text>

        <Text style={styles.inputLabel}>Họ và tên</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập họ tên của bạn"
          placeholderTextColor="#A0A69E"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập địa chỉ email"
          placeholderTextColor="#A0A69E"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.inputLabel}>Nội dung</Text>
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Chia sẻ cảm nhận của bạn..."
          placeholderTextColor="#A0A69E"
          multiline
          textAlignVertical="top"
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSend}
        >
          <Text style={styles.buttonText}>
            Gửi lời nhắn →
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        THANK YOU FOR BEING PART OF OUR JOURNEY
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
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 9,
  },
  subtitle: {
    color: '#849087',
    fontSize: 12,
    marginTop: 7,
  },
  contactCard: {
    backgroundColor: '#203B30',
    borderRadius: 19,
    padding: 20,
  },
  cardTitle: {
    color: '#F5F0E6',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },
  icon: {
    color: '#D6B56D',
    fontSize: 23,
    width: 40,
  },
  label: {
    color: '#C4CFC5',
    fontSize: 10,
  },
  value: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
  },
  form: {
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    padding: 20,
    marginTop: 22,
  },
  formTitle: {
    color: '#203B30',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputLabel: {
    color: '#203B30',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F5F3EB',
    borderRadius: 11,
    paddingHorizontal: 13,
    paddingVertical: 12,
    fontSize: 12,
    color: '#203B30',
    marginBottom: 17,
  },
  messageInput: {
    height: 110,
  },
  button: {
    backgroundColor: '#203B30',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#F5F0E6',
    fontSize: 13,
    fontWeight: 'bold',
  },
  footer: {
    color: '#A1875C',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    marginVertical: 25,
  },
});
