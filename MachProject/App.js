import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.massive}>*****</Text>
      <StatusBar style="auto" />

        <View style={styles.button}>
            <Text> Upload Image </Text>
        </View>

        <View style={styles.button}>
            <Text> Duty Request </Text>
        </View>

        <View style={styles.button}>
            <Text> Team Leaderboard </Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: "flex-start",
  },
    massive: {
      fontSize: 160,
        color: "#FFE133"
    },
    button: {
        backgroundColor: '#FFF',
        padding: 15,
        width: 200,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
