import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Input from "../components/Input";

const InsertarDinero = ({setShowDinero, addData}) => {

  const [descripcion, setDescripcion] = useState("");
  const [importe, setImporte] = useState(0);

  const handleDescripcion = (descripcion) => {
    setDescripcion(descripcion);

  }

  const handleImporte = (importe) => {
      setImporte(importe);
  }

  const validaPresupuesto = () => {
    addData(descripcion, importe);
    setDescripcion("");
    setImporte("");

  }



  return (
    <View>
      <View> 
        <Button onPress={() => setShowDinero(false)} title="atra"/>
      </View>
      <View> 
      <Input placeholder="descripcion" onChangeText={handleDescripcion} value={descripcion} />
      <Input placeholder="importe" onChangeText={handleImporte} value={importe} />
      </View>

      <Button  onPress={validaPresupuesto } title="enviar"/>
      
    </View>
  );
};

export default InsertarDinero;
