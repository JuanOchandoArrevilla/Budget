import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

import Colors from "../constants/Colors";
import Size from "../constants/Size";
import FontImg from "../constants/FontImg";

const ListMovimientos = ({ almacenaPresupuesto = [], setShowList, deletePresupuesto }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowList(false)}>
        <Image
          style={styles.img}
          source={require("../assets/flecha-correcta.png")}
        />
      </TouchableOpacity>

      <FlatList
        data={almacenaPresupuesto}
        renderItem={(itemData) => {
          const { key, descripcion, importe, fecha } = itemData.item;

          let fechacompleta =
            fecha.getDate() +
            "/" +
            "0" +
            (fecha.getMonth() + 1) +
            "/" +
            fecha.getFullYear();

          return (
            <TouchableOpacity onPress={() => deletePresupuesto(key)}>
              <View style={styles.informacion}>
                <Text style={styles.textoCaja}>
                  descripcion: {descripcion}
                </Text>
                <Text style={styles.textoCaja}> importe: {importe}</Text>
                <Text style={styles.textoCaja}> fecha: {fechacompleta}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  informacion: {
    flex: 1,
    marginTop: 20,
    height: 100,
    width: 350,
    backgroundColor: Colors.card,
    borderWidth: 2,
    borderRadius: 5,
    alignContent: "center",
  },
  textoCaja: {
    fontSize: Size.fontSize,
    fontWeight: "bold",
  },
  img: {
    width: FontImg.width,
    height: FontImg.height,
  },
});

export default ListMovimientos;
