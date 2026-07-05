// components/EventCard.js
//
// Task 6 — the ONE piece of state in the whole app. `saved` starts
// false; tapping the bookmark flips it with the functional updater
// form (prev => !prev), which is the safe way to toggle booleans in
// React since it doesn't depend on a stale closure value of `saved`.
// The icon name itself is derived from that single boolean — no if/else
// duplication, just `saved ? 'bookmark' : 'bookmark-outline'`.

import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from './Card';
import { colors, spacing } from '../theme';

export default function EventCard({ event }) {
  const [saved, setSaved] = useState(false);

  return (
    <Card>
      <Image source={{ uri: event.image }} style={styles.image} />

      <Pressable
        style={styles.bookmarkButton}
        onPress={() => setSaved((prev) => !prev)}
        hitSlop={10}
      >
        <Ionicons
          name={saved ? 'bookmark' : 'bookmark-outline'}
          size={20}
          color={saved ? colors.accent : colors.white}
        />
      </Pressable>

      <View style={styles.body}>
        <Text style={styles.tag}>FEATURED EVENT</Text>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.detail}>{event.date}</Text>
        <Text style={styles.detail}>{event.venue}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
  bookmarkButton: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderRadius: 999,
    padding: 8,
  },
  body: {
    padding: spacing.md,
  },
  tag: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.accent,
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    marginTop: 4,
  },
  detail: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
});
