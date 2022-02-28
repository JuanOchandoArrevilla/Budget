import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Size from "../constants/Size";

const Title = ({balance, changeColor}) => {
  return (
    <View style={styles.texto}>
      <Text style={styles.texto}>Balance del presupuesto: </Text>
      <Text style={[styles.texto, changeColor ? styles.positivo : styles.negativo]}> {balance}€ </Text>
    </View>
  );
};


const styles = StyleSheet.create({
    texto: {
        fontSize: Size.fontSize,
        flexDirection: "row",
      },
      positivo: {
        color: "green",
      },
      negativo: {
        color: "red",
      }
})
export default Title;
