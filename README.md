# RV Unity+ — Home & Profile Screen

Assignment 1/2 for RV Unity+ Frontend Practice Track: a static, mock-data-driven
Home & Profile screen built with Expo + React Native.

## What this is

A single-screen UI showing a student profile header, stat tiles, a quick-actions
grid, and two highlight cards (a featured event with a bookmark toggle, and an
announcement). No navigation, no data fetching, no backend — everything is mock
data defined in `data/mockData.js`.

## Screenshots

<!-- TODO: add 1-2 screenshots from your phone/emulator here before submitting -->
<!-- ![home screen](./assets/screenshot-1.png) -->

## How to run

```bash
npm install
npx expo start
```

Then scan the QR code with Expo Go (Android/iOS) or press `i` / `a` for a
simulator/emulator.

## Project structure

```
rv-unity-plus/
├── App.js                       # composes the screen from components + mock data
├── theme.js                     # shared colors, spacing, radius, shadow tokens
├── data/
│   └── mockData.js              # single source of truth for all content
├── components/
│   ├── ProfileHeader.js         # avatar, name, branch/sem, USN, member badge
│   ├── StatTile.js              # one reusable stat tile
│   ├── StatsRow.js              # lays out 3 StatTiles with Flexbox
│   ├── ActionTile.js            # one reusable quick-action tile
│   ├── ActionGrid.js            # wraps ActionTiles into a grid
│   ├── Card.js                  # shared card shell (shadow, radius, padding)
│   ├── EventCard.js             # featured event card + bookmark useState toggle
│   ├── AnnouncementCard.js      # announcement card
│   └── SectionTitle.js          # small header component
└── assets/
```

## Design decisions worth mentioning

- **Theme tokens instead of inline colors/spacing.** `theme.js` centralizes
  the palette (deep indigo `#4B2E83` + gold `#F4B93E` accent), spacing scale,
  corner radius, and shadow so every component looks consistent without
  copy-pasted style values.
- **`Card.js` as a shared base.** Both highlight cards wrap this instead of
  duplicating shadow/radius/padding — the actual "reusable card style" the
  brief asks for.
- **Grid via Flexbox, not a library.** `ActionGrid` uses
  `flexWrap: 'wrap'` + `justifyContent: 'space-between'` with tiles sized at
  `31%` width so 3 fit per row and wrapping happens automatically.
- **Bookmark toggle** uses the functional updater form of `useState`
  (`setSaved(prev => !prev)`) so it never reads a stale value of `saved`.

## One thing I learned

<!-- TODO: fill this in yourself after you've actually built/run it —
     e.g. something about Flexbox, StyleSheet, or useState that clicked
     while working on this. This is meant to be genuine. -->

## Stretch goals attempted

<!-- TODO: check off anything you added — light/dark toggle, gradient header,
     horizontally scrolling event row, etc. -->
