import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { RobotoMono_400Regular } from '@expo-google-fonts/roboto-mono';
import { useTheme } from '../../context/ThemeContext';
import GiftList from '../GiftList';
import UpcomingOccasions from '../UpcomingOccasions';
import BudgetOverview from '../BudgetOverview';

export default function DashboardScreen() {
  const { colors } = useTheme();
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Inter_400Regular,
    RobotoMono_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <UpcomingOccasions />
      <BudgetOverview />
      <GiftList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});