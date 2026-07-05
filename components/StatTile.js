// components/StatTile.js
//
// Task 3: one small reusable tile. Takes `label` and `value` as props
// and nothing else — deliberately dumb so it can be reused for ANY stat.

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, radius, shadow } from '../theme';

export default function StatTile({ label, value }) {
  return (
    <View style={styles.tile}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1, // three tiles share the row width equally
    backgroundColor: colors.card,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    marginHorizontal: spacing.xs,
    ...shadow,
  },
  value: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
  },
  label: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
});
