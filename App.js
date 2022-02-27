import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import InsertarDinero from "./screen/InsertarDinero";
import ListMovimientos from "./screen/ListMovimientos";
import Size from "./constants/Size";

export default function App() {
  const [showDinero, setShowDinero] = useState(false);
  const [showList, setShowList] = useState(false);
  const [almacenaPresupuesto, setAlmacenaPresupuesto] = useState([]);
  const [balance, setBalance] = useState(0);
  const [changeColor, setChangeColor] = useState(true);

  useEffect(() => {
    let sum = 0;
    almacenaPresupuesto.map((e) => {
      let num = parseInt(e.importe);
      sum += num;
    });
    setBalance(sum);
  }, [almacenaPresupuesto]);

  const addData = (descripcion, importe) => {
    setAlmacenaPresupuesto((current) => [
      ...almacenaPresupuesto,
      {
        key: Math.random().toString(),
        descripcion,
        importe,
        fecha: new Date(),
      },
    ]);
  };

  const comprobarColor = () => {
    if (balance > 0) {
      setChangeColor(false);
    } else {
      setChangeColor(true);
    }
  };

  const deletePresupuesto = (key) => {
    setAlmacenaPresupuesto((curPresupuesto) => {
      return curPresupuesto.filter((alma) => alma.key !== key);
    });
  };

  let dinero = (
    <View style={styles.texto}>
      <Text style={styles.texto}>Balance del presupuesto: </Text>
      <Text
        style={[styles.texto, changeColor ? styles.positivo : styles.negativo]}
      >
        {balance}
      </Text>
    </View>
  );
  if (showDinero) {
    dinero = (
      <InsertarDinero
        setShowDinero={setShowDinero}
        addData={addData}
        comprobarColor={comprobarColor}
      />
    );
  }

  let lis = null;
  if (showList) {
    lis = (
      <ListMovimientos
        almacenaPresupuesto={almacenaPresupuesto}
        setShowList={setShowList}
        deletePresupuesto={deletePresupuesto}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {dinero}
        {lis}
      </View>

      <View style={styles.buttonIntroducir}>
        <Button onPress={() => setShowDinero(true)} title="introducir dinero" />
      </View>

      <View style={styles.buttonIntroducir}>
        <Button
          onPress={() => setShowList(true)}
          title="listado de movimientos"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#9b9b9b",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  buttonIntroducir: {
    margin: 10,
    fontSize: Size.fontSize,
  },
  texto: {
    fontSize: Size.fontSize,
    flexDirection: "row",
  },
  positivo: {
    color: "green",
  },
  negativo: {
    color: "red",
  },
});
