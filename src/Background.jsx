import React from "react";
import { View, ImageBackground } from "react-native";

const Background = ({ Children }) => {
  return (
    <View>
      <ImageBackground
        source={require("./assets/bg.jpg")}
        style={{ height: "100%" }}
      />
      <View style={{ flex: 1 }}>{Children}</View>
    </View>
  );
};

export default Background;
