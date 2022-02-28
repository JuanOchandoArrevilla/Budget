import React from "react";
import { StyleSheet,View, TouchableOpacity, Image } from "react-native";
import FontImg from "../constants/FontImg"

const Imagen = () => {
  return (
        <Image
          style={styles.img}
          source={require("../assets/flecha-correcta.png")}
        />
  );
};

const styles = StyleSheet.create({
    img: {
        width: FontImg.width,
        height: FontImg.height,
      }
})

export default Imagen;
