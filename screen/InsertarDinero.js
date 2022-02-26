import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Input from "../components/Input";

const InsertarDinero = ({setShowDinero}) => {

  const [data, setData] = useState({
    key:  Math.random().toString(),
    descripcion: "",
    importe: "",
    fecha: new Date(),
  });

  const handleDescripcion = (descripcion) => {
     setData({...data,descripcion});

  }

  const handleImporte = (importe) => {
        setData({...data,importe})
  }

  console.log(data);


  return (
    <View>
      <View> 
        <Button onPress={() => setShowDinero(false)} title="atra"/>
      </View>
      <View> 
      <Input placeholder="descripcion" onChangeText={(descripcion) => handleDescripcion(descripcion)} value={data.descripcion} />
      <Input placeholder="importe" onChangeText={(importe) => handleImporte(importe)} value={data.importe} />
      <Input placeholder="fecha"  value={data.fecha} />
      </View>

      <Button  onPress={() => alert(data.key)} title="enviar"/>
      
    </View>
  );
};

export default InsertarDinero;
