import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import IconImage from "@/assets/images/icon.png";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* <Image source={require('../assets/images/icon.png')} style={{width: 150, height:150}} ></Image> */}
      <Image source={IconImage} style={styles.image}></Image>

      <Text style={styles.title}>Welcome to Notes app!</Text>
      <Text style={styles.subtitle}>
        Capture your thoughts anytime, anywhere
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/notes")}
      >
        <Text>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9f4",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 60,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
