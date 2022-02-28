import { StyleSheet, View, Button } from "react-native";
import { useState, useEffect } from "react";
import InsertarDinero from "./screen/InsertarDinero";
import ListMovimientos from "./screen/ListMovimientos";
import Size from "./constants/Size";
import Title from "./components/Title";

export default function App() {

  const [showDinero, setShowDinero] = useState(false);
  const [showList, setShowList] = useState(false);
  const [almacenaPresupuesto, setAlmacenaPresupuesto] = useState([]);
  const [balance, setBalance] = useState(0);
  const [changeColor, setChangeColor] = useState(true);

  useEffect(() => {
    let total_balance = 0;
    almacenaPresupuesto.map((e) => {
      let num = parseInt(e.importe);
      total_balance += num;
    });

    setBalance(total_balance);

    if (total_balance >= 0) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }

  },[almacenaPresupuesto]);

  const addData = (descripcion, importe) => {
    setAlmacenaPresupuesto((currentValue) => [
      ...almacenaPresupuesto,
      {
        key: Math.random().toString(),
        descripcion,
        importe,
        fecha: new Date(),
      },
    ]);
  };

  const deletePresupuesto = (key) => {

    setAlmacenaPresupuesto((currentAlmacenaPresupuesto) => {
      return currentAlmacenaPresupuesto.filter((presupuesto) => presupuesto.key !== key);
    });
  };

  
  let dinero = <Title balance={balance} changeColor={changeColor} />;

  if (showDinero) {
    dinero = <InsertarDinero setShowDinero={setShowDinero} addData={addData} />;
  }

  let lista = null;
  if (showList) {
    lista = (
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
        {lista}
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
  
});
