
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from './screens/AboutScreen';
import SettingsScreen from './screens/SettingsScreen';
import ContactScreen from './screens/ContactScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const destinations = [
  {
    id: '1',
    name: 'Vịnh Hạ Long',
    location: 'Quảng Ninh',
    category: 'beach',
    rating: '4.9',
    description:
      'Di sản thiên nhiên thế giới nổi tiếng với hàng nghìn hòn đảo đá vôi kỳ vĩ, làn nước xanh biếc và cảnh sắc tuyệt đẹp.',
    image:
      'https://images.unsplash.com/photo-1528127269322-539801943592?w=900',
  },
  {
    id: '2',
    name: 'Nha Trang',
    location: 'Khánh Hòa',
    category: 'beach',
    rating: '4.9',
    description:
      'Thành phố biển xinh đẹp với bãi cát trắng, nước biển trong xanh, những hòn đảo thơ mộng và hải sản hấp dẫn.',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900',
  },
  {
    id: '3',
    name: 'Đà Lạt',
    location: 'Lâm Đồng',
    category: 'mountain',
    rating: '4.8',
    description:
      'Thành phố ngàn hoa với khí hậu mát mẻ, rừng thông, hồ nước và những góc phố mang vẻ đẹp lãng mạn.',
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900',
  },
  {
    id: '4',
    name: 'Phố cổ Hội An',
    location: 'Đà Nẵng',
    category: 'culture',
    rating: '4.9',
    description:
      'Phố cổ mang nét kiến trúc truyền thống, những chiếc đèn lồng rực rỡ và không gian văn hóa đặc sắc.',
    image:
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=900',
  },
  {
    id: '5',
    name: 'Sa Pa',
    location: 'Lào Cai',
    category: 'mountain',
    rating: '4.8',
    description:
      'Vùng núi Tây Bắc nổi bật với ruộng bậc thang, núi non hùng vĩ và bản làng mang đậm bản sắc dân tộc.',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900',
  },
  {
    id: '6',
    name: 'Huế',
    location: 'Thừa Thiên Huế',
    category: 'culture',
    rating: '4.7',
    description:
      'Cố đô giàu giá trị lịch sử với Hoàng thành, lăng tẩm, dòng sông Hương và nét văn hóa cung đình đặc trưng.',
    image:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900',
  },
];

function MainTabs({ destinations, favorites, onToggleFavorite }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#203B30',
        tabBarInactiveTintColor: '#9A9F96',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          height: 65,
          paddingBottom: 8,
          paddingTop: 7,
          borderTopColor: '#E8E8DF',
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
        },
        tabBarIcon: ({ color }) => {
          const icons = {
            Home: '⌂',
            Favorites: '♡',
            Profile: '♙',
          };

          return (
            <Text style={{ color, fontSize: 23 }}>
              {icons[route.name]}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ tabBarLabel: 'Khám phá' }}
      >
        {props => (
          <HomeScreen
            {...props}
            destinations={destinations}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Favorites"
        options={{ tabBarLabel: 'Yêu thích' }}
      >
        {props => (
          <FavoritesScreen
            {...props}
            destinations={destinations}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Cá nhân' }}
      />
    </Tab.Navigator>
  );
}

function CustomDrawerContent({ navigation }) {
  const menuItems = [
    { label: 'Khám phá', icon: '⌂', screen: 'MainTabs' },
    { label: 'Giới thiệu', icon: '✦', screen: 'About' },
    { label: 'Cài đặt', icon: '⚙', screen: 'Settings' },
    { label: 'Liên hệ', icon: '✉', screen: 'Contact' },
  ];

  return (
    <View style={styles.drawer}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerLogo}>TRAVEL</Text>
        <Text style={styles.drawerTitle}>TravellingApp</Text>
        <Text style={styles.drawerSubtitle}>
          Collect moments, not things.
        </Text>
      </View>

      {menuItems.map(item => (
        <TouchableOpacity
          key={item.screen}
          style={styles.drawerItem}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Text style={styles.drawerIcon}>{item.icon}</Text>
          <Text style={styles.drawerLabel}>{item.label}</Text>
          <Text style={styles.drawerArrow}>›</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.drawerFooter}>
        <Text style={styles.footerName}>VÕ DUY ANH</Text>
        <Text style={styles.footerText}>Travel Explorer · 2026</Text>
      </View>
    </View>
  );
}

function MainDrawer({ destinations, favorites, onToggleFavorite }) {
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawerContent {...props} />
      )}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: '#F5F3EB',
          width: 290,
        },
      }}
    >
      <Drawer.Screen
        name="MainTabs"
        options={{ title: 'Khám phá' }}
      >
        {props => (
          <MainTabs
            {...props}
            destinations={destinations}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
          />
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'Giới thiệu' }}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Cài đặt' }}
      />

      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: 'Liên hệ' }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [favorites, setFavorites] = useState([]);

  const onToggleFavorite = id => {
    setFavorites(current =>
      current.includes(id)
        ? current.filter(item => item !== id)
        : [...current, id]
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#F5F3EB' },
        }}
      >
        <Stack.Screen name="Main">
          {props => (
            <MainDrawer
              {...props}
              destinations={destinations}
              favorites={favorites}
              onToggleFavorite={onToggleFavorite}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: '#F5F3EB',
    paddingHorizontal: 20,
  },
  drawerHeader: {
    backgroundColor: '#203B30',
    marginHorizontal: -20,
    paddingHorizontal: 25,
    paddingTop: 65,
    paddingBottom: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  drawerLogo: {
    color: '#D6B56D',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  drawerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
  },
  drawerSubtitle: {
    color: '#D6DCCF',
    fontSize: 11,
    marginTop: 7,
    fontStyle: 'italic',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8DF',
  },
  drawerIcon: {
    color: '#A1875C',
    fontSize: 21,
    width: 40,
  },
  drawerLabel: {
    flex: 1,
    color: '#203B30',
    fontSize: 14,
    fontWeight: '600',
  },
  drawerArrow: {
    color: '#A1875C',
    fontSize: 23,
  },
  drawerFooter: {
    marginTop: 'auto',
    paddingVertical: 25,
    borderTopWidth: 1,
    borderTopColor: '#E8E8DF',
  },
  footerName: {
    color: '#203B30',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  footerText: {
    color: '#A1875C',
    fontSize: 10,
    marginTop: 6,
  },
});
