import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { getPlayerStats, teams } from "../data/mockData";

type PlayerProfileScreenRouteProp = RouteProp<
  RootStackParamList,
  "PlayerProfile"
>;

interface Props {
  route: PlayerProfileScreenRouteProp;
}

export default function PlayerProfileScreen({ route }: Props) {
  const { player } = route.params;
  const stats = getPlayerStats(player.id);
  const team = teams.find((t) => t.id === player.teamId);

  const StatItem = ({
    label,
    value,
  }: {
    label: string;
    value: string | number;
  }) => (
    <View style={styles.statItem}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#667eea", "#764ba2", "#f093fb"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.playerNumberLarge}>
          <Text style={styles.playerNumberText}>{player.number}</Text>
        </View>
        <Text style={styles.playerName}>{player.name}</Text>
        <Text style={styles.playerPosition}>{player.position}</Text>
      </LinearGradient>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nationality:</Text>
          <Text style={styles.infoValue}>{player.nationality}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Age:</Text>
          <Text style={styles.infoValue}>{player.age} years</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Team:</Text>
          <Text style={styles.infoValue}>{team?.name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Jersey Number:</Text>
          <Text style={styles.infoValue}>{player.number}</Text>
        </View>
      </View>

      {stats && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Career Statistics</Text>
          <View style={styles.statsGrid}>
            <StatItem label="Appearances" value={stats.appearances} />
            <StatItem label="Goals" value={stats.goals} />
            <StatItem label="Assists" value={stats.assists} />
            <StatItem
              label="Minutes"
              value={stats.minutesPlayed.toLocaleString()}
            />
            <StatItem label="Yellow Cards" value={stats.yellowCards} />
            <StatItem label="Red Cards" value={stats.redCards} />
          </View>

          <View style={styles.averagesSection}>
            <Text style={styles.subsectionTitle}>Per Game Averages</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Goals per game:</Text>
              <Text style={styles.infoValue}>
                {(stats.goals / stats.appearances).toFixed(2)}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Assists per game:</Text>
              <Text style={styles.infoValue}>
                {(stats.assists / stats.appearances).toFixed(2)}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Minutes per game:</Text>
              <Text style={styles.infoValue}>
                {Math.round(stats.minutesPlayed / stats.appearances)}
              </Text>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: "center",
  },
  playerNumberLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  playerNumberText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "OpenDyslexic-Bold",
  },
  playerName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
    fontFamily: "OpenDyslexic-Bold",
  },
  playerPosition: {
    fontSize: 18,
    color: "#bdc3c7",
    fontFamily: "OpenDyslexic-Regular",
  },
  section: {
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 16,
    fontFamily: "OpenDyslexic-Bold",
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginTop: 20,
    marginBottom: 12,
    fontFamily: "OpenDyslexic-Bold",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ecf0f1",
  },
  infoLabel: {
    fontSize: 16,
    color: "#7f8c8d",
    fontFamily: "OpenDyslexic-Regular",
  },
  infoValue: {
    fontSize: 16,
    color: "#2c3e50",
    fontWeight: "600",
    fontFamily: "OpenDyslexic-Bold",
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  statItem: {
    width: "30%",
    backgroundColor: "#ecf0f1",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 12,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3498db",
    marginBottom: 4,
    fontFamily: "OpenDyslexic-Bold",
  },
  statLabel: {
    fontSize: 12,
    color: "#7f8c8d",
    textAlign: "center",
    fontFamily: "OpenDyslexic-Regular",
  },
  averagesSection: {
    marginTop: 10,
  },
});
