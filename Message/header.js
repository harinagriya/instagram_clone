import * as React from "react";
import { Appbar } from "react-native-paper";
import styles from "../style";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

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
          onPress={() => props.navigation.navigate("Home")}
        >
          <AntDesign
            name={"arrowleft"}
            style={{ color: "#333333", fontSize: 35, opacity: 0.8 }}
          />
        </TouchableOpacity>
        <Text style={{ marginLeft: 12, marginTop: 5,fontSize:20 }}>
          i_am_er_hari_om...
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            alignSelf: "flex-start",
            alignItems: "center",
            backgroundColor: "transparent",
            marginRight: 20,
          }}
          onPress={() => props.navigation.navigate("Message")}
        >
          <AntDesign name={"bars"} style={{ color: "#333333", fontSize: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            alignItems: "center",
            backgroundColor: "transparent",
            marginRight: 4,
            marginBottom: 3,
          }}
          onPress={() => props.navigation.navigate("Message")}
        >
          <AntDesign name={"form"} style={{ color: "#333333", fontSize: 25 }} />
        </TouchableOpacity>
      </View>
    </Appbar.Header>
  );
}
