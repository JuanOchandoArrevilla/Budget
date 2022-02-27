import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useState,useEffect } from "react";
import InsertarDinero from "./screen/InsertarDinero";
import ListMovimientos from "./screen/ListMovimientos";

export default function App() {

  const [showDinero, setShowDinero] = useState(false);
  const [showList, setShowList] = useState(false);
  const [almacenaPresupuesto, setAlmacenaPresupuesto] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    let sum = 0;
    almacenaPresupuesto.map((e) => {
       let num = parseInt(e.importe)
        sum += num;
    })
     setBalance(sum)
  }, [almacenaPresupuesto])

 

  const addData = (descripcion, importe) => {
    setAlmacenaPresupuesto((current) => [
      ...almacenaPresupuesto,{key:Math.random().toString(),descripcion,
                                importe, fecha: new Date()}] );                                
}

   let dinero =  <Text style={styles.texto}>Balance del presupuesto:{balance} </Text>
  if (showDinero) {
    dinero = <InsertarDinero setShowDinero={setShowDinero} addData={addData}  />
  }

  
  let lis = null
  if (showList) {
    lis = <ListMovimientos almacenaPresupuesto={almacenaPresupuesto} setShowList={setShowList} />
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
      {dinero}
      {lis}
      </View>

      <View style={styles.buttonIntroducir}>
        <Button onPress={() =>setShowDinero(true) } title="introducir dinero" />
      </View>
  
      <View style={styles.buttonIntroducir}>
        <Button onPress={() => setShowList(true)}title="listado de movimientos" />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9b9b9b",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  buttonIntroducir: {
    margin: 10,
    fontSize:25,
    
  },texto: {
    fontSize:20,
  }
 
});
