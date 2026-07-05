// components/SectionTitle.js
//
// Tiny, but it's a component for a reason: every section header on the
// screen (Quick Actions, Highlights...) uses this instead of a raw
// <Text style={...}>, so if you ever want to change how headers look,
// you change it in one place.

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';

export default function SectionTitle({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
    marginTop: spacing.lg,
    marginBottom: spacing.xs,
  },
});
