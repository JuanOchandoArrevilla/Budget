import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from "react-native";

const ListMovimientos = ({almacenaPresupuesto = [], setShowList}) => {



  return (
    <View > 
    <Button onPress={() => setShowList(false)} title=">"> </Button>
    <FlatList data={almacenaPresupuesto} renderItem={(itemData) => {

        const {key,descripcion, importe, fecha} = itemData.item;
        
       let fechacompleta =  fecha.getDate() + "/" + "0"+ ( fecha.getMonth() +1) + "/" + fecha.getFullYear()

        return (         
            <View>
                <Text> descripcion: {descripcion}</Text>
                <Text> importe: {importe}</Text>
                <Text> fecha: {fechacompleta}</Text>
            </View>           
            
        )

    } } 
     
    />
    </View>
  )
}

export default ListMovimientos