import * as React from "react";
import { Appbar } from "react-native-paper";
import styles from "../style";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Feather, EvilIcons } from "@expo/vector-icons";

export default function Header(props) {
  return (
    <Appbar.Header style={styles.header}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
          onPress={() => props.navigation.navigate("Camera")}
        >
          <EvilIcons name={"camera"} style={{ color: "#111", fontSize: 45 }} />
        </TouchableOpacity>
        <Image
          source={require("../assets/InstaImg.png")}
          style={{ width: 110, height: 35, marginTop: 6 }}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            alignItems: "center",
            backgroundColor: "transparent",
            marginRight: 6,
          }}
          onPress={() => props.navigation.navigate("Message")}
        >
          <Feather
            name={"send"}
            style={{
              color: "#333333",
              fontSize: 30,
              opacity: 0.8,
              transform: [{ rotate: "20deg" }],
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            right: -2,
            top: -1,
            backgroundColor: "red",
            borderRadius: 9,
            width: 18,
            height: 18,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
            {5}
          </Text>
        </View>
      </View>
    </Appbar.Header>
  );
}
