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
import { RootStackParamList, Team } from "../types";
import { teams } from "../data/mockData";

type TeamsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Teams"
>;

interface Props {
  navigation: TeamsScreenNavigationProp;
}

export default function TeamsScreen({ navigation }: Props) {
  const renderTeam = ({ item }: { item: Team }) => (
    <TouchableOpacity
      style={styles.teamCard}
      onPress={() => navigation.navigate("Players", { team: item })}
    >
      <View style={styles.teamInfo}>
        <Text style={styles.teamName}>{item.name}</Text>
        <Text style={styles.teamDetails}>
          {item.country} • {item.league}
        </Text>
        <Text style={styles.teamFounded}>Founded: {item.founded}</Text>
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
        <Text style={styles.headerTitle}>Women's Soccer Teams</Text>
      </LinearGradient>
      <FlatList
        data={teams}
        renderItem={renderTeam}
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "OpenDyslexic-Bold",
  },
  listContainer: {
    padding: 16,
  },
  teamCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  teamInfo: {
    flex: 1,
  },
  teamName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 6,
    fontFamily: "OpenDyslexic-Bold",
  },
  teamDetails: {
    fontSize: 16,
    color: "#7f8c8d",
    marginBottom: 4,
    fontFamily: "OpenDyslexic-Regular",
  },
  teamFounded: {
    fontSize: 14,
    color: "#95a5a6",
    fontFamily: "OpenDyslexic-Regular",
  },
});
