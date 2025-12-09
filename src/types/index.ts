export interface Team {
  id: string;
  name: string;
  country: string;
  league: string;
  founded: number;
  logo?: string;
}

export interface Player {
  id: string;
  name: string;
  teamId: string;
  position: string;
  number: number;
  nationality: string;
  age: number;
  photo?: string;
}

export interface PlayerStats {
  playerId: string;
  appearances: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  minutesPlayed: number;
}

export type RootStackParamList = {
  Teams: undefined;
  Players: { team: Team };
  PlayerProfile: { player: Player };
};
