import React from "react";
import { StyleSheet,Text,View,TouchableOpacity,} from "react-native";
import Colors from "../constants/Colors";
import Size from "../constants/Size";

const Item = ({itemData,onDelete}) => {

  let fechacompleta =
            itemData.item.fecha.getDate() +
            "/" +
            "0" +
            ( itemData.item.fecha.getMonth() + 1) +
            "/" +
            itemData.item.fecha.getFullYear();

  return (
    <TouchableOpacity onPress={() => onDelete()}>
      <View style={styles.informacion}>
        <Text style={styles.textoCaja}> descripcion: {itemData.item.descripcion}</Text>
        <Text style={styles.textoCaja}> importe: {itemData.item.importe}€</Text>
        <Text style={styles.textoCaja}> fecha: {fechacompleta}</Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
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
})

export default Item;
