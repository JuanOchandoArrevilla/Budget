import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Alert 
} from "react-native";
import Input from "../components/Input";
import FontImg from "../constants/FontImg"

const InsertarDinero = ({ setShowDinero, addData, comprobarColor }) => {
  const [descripcion, setDescripcion] = useState("");
  const [importe, setImporte] = useState();

  const handleDescripcion = (descripcion) => {
    setDescripcion(descripcion);
  };

  const handleImporte = (importe) => {
    setImporte(importe);
  };

  const validaPresupuesto = () => {
    console.log(importe);
    if (descripcion === "" || importe === NaN || importe === undefined) {
      Alert.alert("errror",
      "los campos no pueden estar vacidos", [{
        text:"ok",
        style:"destructive"
      }])
    } else {
      addData(descripcion, importe);
      comprobarColor();
      setDescripcion("");
      setImporte("");
    }
    
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowDinero(false)}>
        <Image
          style={styles.img}
          source={require("../assets/flecha-correcta.png")}
        />
      </TouchableOpacity>
      <View style={styles.input}>
        <Input
          placeholder="descripcion"
          onChangeText={handleDescripcion}
          value={descripcion}
        />
        <Input
          placeholder="importe"
          onChangeText={handleImporte}
          value={importe}
        />
      </View>
      <View style={styles.botom}>
        <Button onPress={validaPresupuesto} title="enviar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  input: {
    marginTop: 20,
  },
  img: {
    width: FontImg.width,
    height: FontImg.height
  },
});

export default InsertarDinero;
