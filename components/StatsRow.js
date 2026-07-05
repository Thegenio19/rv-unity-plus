// components/StatsRow.js
//
// This just maps the `stats` array from mockData into <StatTile />
// instances. Keeping the .map() here (not in App.js) is what makes
// App.js read like a clean list of sections instead of a wall of JSX.

import React from 'react';
import { View, StyleSheet } from 'react-native';
import StatTile from './StatTile';
import { spacing } from '../theme';

export default function StatsRow({ stats }) {
  return (
    <View style={styles.row}>
      {stats.map((s) => (
        <StatTile key={s.id} label={s.label} value={s.value} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: spacing.lg,
    marginHorizontal: -spacing.xs, // cancels out each tile's own margin
  },
});
