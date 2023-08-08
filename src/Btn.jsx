import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Btn(bgColor, btnLable, Press, textcolor) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alightItems: "center",
        width: 350,
        paddingVertical: 5,
        marginVertical: 10,
      }}
    >
      <Text style={{ color: textcolor, fontSize: 25, fontWeight: "bold" }}>
        {btnLable}
      </Text>
    </TouchableOpacity>
  );
}
