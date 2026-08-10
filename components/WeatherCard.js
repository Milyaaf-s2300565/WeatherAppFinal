import { View, Text, Image, StyleSheet } from "react-native";

export default function WeatherCard({ weather, units }) {
  const tempUnit = units === "metric" ? "°C" : "°F";

  return (
    <View style={styles.card}>
      <Text style={styles.city}>
        {weather.name}, {weather.sys.country}
      </Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`,
        }}
        style={styles.icon}
      />
      <Text style={styles.temp}>
        {Math.round(weather.main.temp)}
        {tempUnit}
      </Text>
      <Text style={styles.description}>{weather.weather[0].description}</Text>
      <View style={styles.detailsRow}>
        <Text style={styles.detail}>
          Feels like {Math.round(weather.main.feels_like)}
          {tempUnit}
        </Text>
        <Text style={styles.detail}>Humidity {weather.main.humidity}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    elevation: 4,
  },
  city: { fontSize: 24, fontWeight: "700" },
  icon: { width: 140, height: 140 },
  temp: { fontSize: 56, fontWeight: "200" },
  description: {
    fontSize: 18,
    color: "#555",
    textTransform: "capitalize",
    marginBottom: 16,
  },
  detailsRow: { flexDirection: "row", gap: 20 },
  detail: { fontSize: 14, color: "#777" },
});
