// components/AnnouncementCard.js
//
// No image needed here, so it reuses <Card> without the image slot —
// proof the Card component is generic, not built around one use case.

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from './Card';
import { colors, spacing } from '../theme';

export default function AnnouncementCard({ announcement }) {
  return (
    <Card style={styles.wrapper}>
      <View style={styles.iconCircle}>
        <Ionicons name="megaphone" size={18} color={colors.white} />
      </View>
      <View style={styles.textBlock}>
        <Text style={styles.title}>{announcement.title}</Text>
        <Text style={styles.body}>{announcement.body}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: spacing.md,
  },
  iconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  textBlock: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  body: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
    lineHeight: 17,
  },
});
