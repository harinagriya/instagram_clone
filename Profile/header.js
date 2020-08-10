import * as React from "react";
import { Appbar } from "react-native-paper";
import styles from "../style";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function Header(props) {
  return (
    <Appbar.Header style={styles.header}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 19, marginLeft: 10 }}>
          i_am_er_hari_om_kumawat
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            alignSelf: "flex-start",
            alignItems: "center",
            backgroundColor: "transparent",
            marginRight: 10,
          }}
          onPress={() => props.navigation.navigate("Message")}
        >
          <Feather
            name={"menu"}
            style={{ color: "#333333", fontSize: 30,opacity:0.8 }}
          />
        </TouchableOpacity>
      </View>
    </Appbar.Header>
  );
}
