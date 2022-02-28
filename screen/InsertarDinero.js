import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Alert 
} from "react-native";
import Input from "../components/Input";
import FontImg from "../constants/FontImg"
import Imagen from "../components/Imagen";


const InsertarDinero = ({ setShowDinero, addData}) => {
  const [descripcion, setDescripcion] = useState("");
  const [importe, setImporte] = useState("");

  const handleDescripcion = (descripcion) => {
    setDescripcion(descripcion);
  };

  const handleImporte = (importe) => {
    setImporte(importe.replace(/[^-?0-9+]/g,''));

  };

  const validaPresupuesto = () => {
    if (descripcion === "" || importe === NaN || importe === undefined) {
      Alert.alert("error",
      "los campos no pueden estar vácidos", [{
        text:"ok",
        style:"destructive"
      }])
    } else if (importe.includes("--")) {
      Alert.alert("error",
      "el campo importe no puede tener muchas negativos", [{
        text:"ok",
        style:"destructive"
      }])
    } else {
      addData(descripcion, importe);
      setDescripcion("");
      setImporte("");
    }
    
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowDinero(false)}>
      < Imagen />
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
          keyboardType="number-pad"
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
