import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default Input;
