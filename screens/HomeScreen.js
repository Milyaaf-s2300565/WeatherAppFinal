import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getCurrentWeather } from "../services/weatherApi";

export default function HomeScreen() {
  useEffect(() => {
    getCurrentWeather("London")
      .then((data) => console.log("WEATHER:", data.name, data.main.temp))
      .catch((err) => console.log("ERROR:", err.message));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
