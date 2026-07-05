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
## Demo Video
[Watch here](https://drive.google.com/file/d/1GGBKH_FFG2SxJaNnQRvs3BanUkIxZt3T/view?usp=drivesdk)



## Stretch goals attempted

<!-- TODO: check off anything you added — light/dark toggle, gradient header,
     horizontally scrolling event row, etc. -->
