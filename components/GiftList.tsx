import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { useTheme } from '../context/ThemeContext';

export default function GiftList() {
  const { colors } = useTheme();
  const [gifts, setGifts] = React.useState([
    {
      id: '1',
      name: 'Nintendo Switch',
      price: 299.99,
      recipient: 'John',
      occasion: 'Birthday',
      priceHistory: [299.99, 289.99, 299.99],
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Gift List</Text>
      {gifts.map((gift, index) => (
        <Animated.View
          key={gift.id}
          entering={FadeInRight.delay(index * 100)}
          style={[
            styles.card,
            {
              backgroundColor: colors.background,
              shadowColor: colors.cardShadow,
            },
          ]}>
          <View style={styles.giftInfo}>
            <Text style={[styles.giftName, { color: colors.text }]}>
              {gift.name}
            </Text>
            <Text style={[styles.giftDetails, { color: colors.text }]}>
              For: {gift.recipient} ({gift.occasion})
            </Text>
            <Text style={[styles.price, { color: colors.primary }]}>
              ${gift.price.toFixed(2)}
            </Text>
          </View>
          <Pressable style={styles.priceHistoryButton}>
            <FontAwesome5 name="chart-line" size={20} color={colors.primary} />
          </Pressable>
        </Animated.View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  giftInfo: {
    flex: 1,
  },
  giftName: {
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
    marginBottom: 4,
  },
  giftDetails: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    opacity: 0.8,
  },
  price: {
    fontFamily: 'RobotoMono_400Regular',
    fontSize: 20,
    marginTop: 8,
  },
  priceHistoryButton: {
    justifyContent: 'center',
    padding: 8,
  },
});