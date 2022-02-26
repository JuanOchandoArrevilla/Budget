import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useState } from "react";
import InsertarDinero from "./screen/InsertarDinero";

export default function App() {

  const [showDinero, setShowDinero] = useState(false);
  const [showList, setShowList] = useState(false);

   let dinero =  <Text style={styles.texto}>Balance del presupuesto:</Text>
  if (showDinero) {
    dinero = <InsertarDinero setShowDinero={setShowDinero}/>
  }

  

  let lis = <Text></Text>
  if (showList) {
    lis = <Text>dsdss</Text>
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
