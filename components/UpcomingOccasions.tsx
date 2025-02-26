import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function UpcomingOccasions() {
  const { colors } = useTheme();
  const occasions = [
    { id: '1', name: "Mom's Birthday", date: '2024-05-15' },
    { id: '2', name: 'Christmas', date: '2024-12-25' },
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>
        Upcoming Occasions
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {occasions.map((occasion) => (
          <View
            key={occasion.id}
            style={[
              styles.occasionCard,
              {
                backgroundColor: colors.primary,
              },
            ]}>
            <Text style={styles.occasionName}>{occasion.name}</Text>
            <Text style={styles.occasionDate}>
              {new Date(occasion.date).toLocaleDateString()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    marginBottom: 16,
  },
  occasionCard: {
    padding: 16,
    borderRadius: 12,
    marginRight: 12,
    minWidth: 200,
  },
  occasionName: {
    color: 'white',
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
    marginBottom: 4,
  },
  occasionDate: {
    color: 'white',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    opacity: 0.9,
  },
});