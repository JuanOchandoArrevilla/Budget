import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.texto}>Balance del presupuesto:</Text>
      </View>

      <View style={styles.buttonIntroducir}>
        <Button title="introducir dinero" />
      </View>
  
      <View style={styles.buttonIntroducir}>
        <Button title="listado de movimientos" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9b9b9b",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  buttonIntroducir: {
    margin: 10,
    fontSize:25,
    
  },texto: {
    fontSize:20,
  }
 
});
