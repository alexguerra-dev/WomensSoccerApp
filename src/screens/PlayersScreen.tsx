import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList, Player } from "../types";
import { getPlayersByTeam } from "../data/mockData";

type PlayersScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Players"
>;

type PlayersScreenRouteProp = RouteProp<RootStackParamList, "Players">;

interface Props {
  navigation: PlayersScreenNavigationProp;
  route: PlayersScreenRouteProp;
}

export default function PlayersScreen({ navigation, route }: Props) {
  const { team } = route.params;
  const players = getPlayersByTeam(team.id);

  const renderPlayer = ({ item }: { item: Player }) => (
    <TouchableOpacity
      style={styles.playerCard}
      onPress={() => navigation.navigate("PlayerProfile", { player: item })}
    >
      <View style={styles.numberBadge}>
        <Text style={styles.numberText}>{item.number}</Text>
      </View>
      <View style={styles.playerInfo}>
        <Text style={styles.playerName}>{item.name}</Text>
        <Text style={styles.playerPosition}>{item.position}</Text>
        <Text style={styles.playerDetails}>
          {item.nationality} • {item.age} years old
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#667eea", "#764ba2", "#f093fb"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>{team.name}</Text>
        <Text style={styles.headerSubtitle}>Squad</Text>
      </LinearGradient>
      <FlatList
        data={players}
        renderItem={renderPlayer}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
    fontFamily: "OpenDyslexic-Bold",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#bdc3c7",
    fontFamily: "OpenDyslexic-Regular",
  },
  listContainer: {
    padding: 16,
  },
  playerCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  numberBadge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  numberText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "OpenDyslexic-Bold",
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 4,
    fontFamily: "OpenDyslexic-Bold",
  },
  playerPosition: {
    fontSize: 16,
    color: "#3498db",
    marginBottom: 2,
    fontFamily: "OpenDyslexic-Regular",
  },
  playerDetails: {
    fontSize: 14,
    color: "#7f8c8d",
    fontFamily: "OpenDyslexic-Regular",
  },
});
