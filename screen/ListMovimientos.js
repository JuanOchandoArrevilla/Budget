import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Item from "../components/Item";
import Imagen from "../components/Imagen";

const ListMovimientos = ({ almacenaPresupuesto = [], setShowList, deletePresupuesto }) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => setShowList(false)}>
        <Imagen />
      </TouchableOpacity>

      <FlatList
        data={almacenaPresupuesto}
        renderItem={(itemData) => {
          return (
            <Item itemData={itemData} onDelete={() => deletePresupuesto(itemData.item.key)}/>
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
 
  
});

export default ListMovimientos;
