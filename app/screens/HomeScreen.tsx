import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GiftCard } from '../components/GiftCard';
import { Gift } from '../types';
import { 
  useFonts,
  Poppins_600SemiBold,
  Inter_400Regular,
  Inter_500Medium,
  RobotoMono_500Medium
} from '@expo-google-fonts/dev';

export const HomeScreen = () => {
  const [gifts] = useState<Gift[]>([
    {
      id: '1',
      name: 'Nintendo Switch',
      recipient: 'John Doe',
      occasion: 'Birthday',
      price: 299.99,
      priceHistory: [
        { date: '2024-03-01', price: 299.99 },
        { date: '2024-02-15', price: 319.99 },
      ],
      category: 'Electronics',
      purchased: false,
    },
    // Add more sample gifts here
  ]);

  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    RobotoMono_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleGiftPress = (gift: Gift) => {
    // Navigate to gift details
    console.log('Gift pressed:', gift);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Gift List</Text>
      <FlatList
        data={gifts}
        renderItem={({ item }) => (
          <GiftCard gift={item} onPress={handleGiftPress} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins_600SemiBold',
    color: '#2D3436',
    padding: 16,
    paddingTop: 60,
  },
});