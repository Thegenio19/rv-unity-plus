// components/ActionGrid.js
//
// This is the trickiest layout in the whole screen, so it's worth
// being able to explain it: `flexDirection: 'row'` + `flexWrap: 'wrap'`
// + `justifyContent: 'space-between'` turns a flat array into a real
// grid without a dedicated Grid component. Each tile is 31% wide, so
// three fit per row with even gaps, and the 4th tile automatically
// wraps to a new row.

import React from 'react';
import { View, StyleSheet } from 'react-native';
import ActionTile from './ActionTile';
import { spacing } from '../theme';

export default function ActionGrid({ actions }) {
  return (
    <View style={styles.grid}>
      {actions.map((a) => (
        <ActionTile key={a.id} label={a.label} icon={a.icon} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: spacing.md,
  },
});
