import { View, Text, StyleSheet } from "react-native";

const NotesScreen = () => {
  return ( <View style={styles.container}>
    <Text>Text</Text>
  </View>  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 20,
    backgroundColor: "#fff"
  }
})
 
export default NotesScreen;