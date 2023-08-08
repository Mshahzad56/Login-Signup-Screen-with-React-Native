import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Background from "./Background";
import Btn from "./Btn";
import { darkGreen } from "./constants";

const Home = (props) => {
  return (
    <View>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: "black", fontSize: 25 }}>Lets start</Text>
        <Text style={{ color: "black", fontSize: 25 }}>Lets start</Text>
      </View>
      <Background />
    </View>
  );
};

const style = StyleSheet.create({});
export default Home;
