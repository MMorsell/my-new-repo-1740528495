import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { Gift } from '../types';

interface GiftCardProps {
  gift: Gift;
  onPress: (gift: Gift) => void;
}

export const GiftCard = ({ gift, onPress }: GiftCardProps) => {
  return (
    <Animated.View entering={FadeInRight} style={styles.container}>
      <Pressable onPress={() => onPress(gift)}>
        <BlurView intensity={20} style={styles.card}>
          {gift.imageUrl && (
            <Image source={{ uri: gift.imageUrl }} style={styles.image} />
          )}
          <View style={styles.content}>
            <Text style={styles.name}>{gift.name}</Text>
            <Text style={styles.recipient}>For: {gift.recipient}</Text>
            <Text style={styles.price}>${gift.price.toFixed(2)}</Text>
            {gift.purchased && (
              <View style={styles.purchasedBadge}>
                <Text style={styles.purchasedText}>Purchased</Text>
              </View>
            )}
          </View>
        </BlurView>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#2D3436',
  },
  recipient: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#636e72',
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontFamily: 'RobotoMono_500Medium',
    color: '#6B4DE6',
    marginTop: 8,
  },
  purchasedBadge: {
    backgroundColor: '#47E5BC',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  purchasedText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Inter_500Medium',
  },
});