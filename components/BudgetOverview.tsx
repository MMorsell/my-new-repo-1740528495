import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function BudgetOverview() {
  const { colors } = useTheme();
  const budget = {
    total: 1000,
    spent: 299.99,
    remaining: 700.01,
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          shadowColor: colors.cardShadow,
        },
      ]}>
      <Text style={[styles.title, { color: colors.text }]}>Budget Overview</Text>
      <View style={styles.budgetRow}>
        <Text style={[styles.label, { color: colors.text }]}>Total Budget:</Text>
        <Text style={[styles.amount, { color: colors.text }]}>
          ${budget.total.toFixed(2)}
        </Text>
      </View>
      <View style={styles.budgetRow}>
        <Text style={[styles.label, { color: colors.text }]}>Spent:</Text>
        <Text style={[styles.amount, { color: colors.primary }]}>
          ${budget.spent.toFixed(2)}
        </Text>
      </View>
      <View style={styles.budgetRow}>
        <Text style={[styles.label, { color: colors.text }]}>Remaining:</Text>
        <Text style={[styles.amount, { color: colors.secondary }]}>
          ${budget.remaining.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    marginBottom: 16,
  },
  budgetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },
  amount: {
    fontFamily: 'RobotoMono_400Regular',
    fontSize: 16,
  },
});