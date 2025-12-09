# Women's Soccer App

A cross-platform React Native app (iOS & Android) showcasing women's soccer teams, players, and their career statistics.

## Features

- **Teams List**: Browse women's soccer teams from top leagues around the world
- **Player Roster**: View team squads with player details
- **Player Profiles**: Detailed player statistics including goals, assists, appearances, and more

## Tech Stack

- React Native (Expo)
- TypeScript
- React Navigation
- React Native Screens & Safe Area Context

## Installation

1. Install dependencies:

```bash
cd WomensSoccerApp
npm install
```

## Running the App

### iOS (requires Mac with Xcode)

```bash
npm run ios
```

### Android (requires Android Studio)

```bash
npm run android
```

### Web

```bash
npm run web
```

### Using Expo Go App

1. Install Expo Go on your iOS or Android device
2. Run the development server:

```bash
npx expo start
```

3. Scan the QR code with:
   - iOS: Camera app
   - Android: Expo Go app

## Project Structure

```
WomensSoccerApp/
├── src/
│   ├── data/
│   │   └── mockData.ts          # Sample teams, players, and statistics
│   ├── screens/
│   │   ├── TeamsScreen.tsx      # List of teams
│   │   ├── PlayersScreen.tsx    # Team roster
│   │   └── PlayerProfileScreen.tsx  # Player details and stats
│   └── types/
│       └── index.ts             # TypeScript type definitions
├── App.tsx                      # Main app with navigation setup
└── package.json
```

## Sample Data

The app includes data for 5 women's soccer teams:

- Barcelona Femení (Spain)
- Lyon Féminin (France)
- Chelsea FC Women (England)
- Portland Thorns FC (USA)
- Bayern Munich Women (Germany)

With 15 players across these teams, including their career statistics.

## Customization

To add your own teams and players:

1. Edit `src/data/mockData.ts`
2. Add new team objects to the `teams` array
3. Add new player objects to the `players` array
4. Add corresponding statistics to the `playerStats` array

## Future Enhancements

- Connect to a real API for live data
- Add player photos and team logos
- Include match schedules and results
- Add search and filter functionality
- Player comparison features
- Dark mode support
