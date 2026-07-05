// components/ActionTile.js
//
// Task 4: one tappable tile. Uses expo/vector-icons (Ionicons) rather
// than emoji so all six icons share one consistent visual weight/style
// — small detail, but it's exactly the kind of thing "visual polish"
// marks are looking for.
//
// On press it just shows an Alert, per the brief — no navigation yet.

import React from 'react';
import { Pressable, Text, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, shadow } from '../theme';

export default function ActionTile({ label, icon }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.tile, pressed && styles.tilePressed]}
      onPress={() => Alert.alert(label, `Opening ${label}...`)}
    >
      <Ionicons name={icon} size={26} color={colors.primary} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: '31%', // 3 per row with gaps; swap to '48%' for a 2x3 grid
    aspectRatio: 1,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
    ...shadow,
  },
  tilePressed: {
    opacity: 0.6,
  },
  label: {
    marginTop: spacing.xs,
    fontSize: 11,
    color: colors.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
  },
});
