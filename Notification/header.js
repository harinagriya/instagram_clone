import * as React from "react";
import { Appbar } from "react-native-paper";
import styles from "../style";
import { Text, View} from "react-native";

export default function Header(props) {
  return (
    <Appbar.Header style={styles.header}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 19, marginLeft: 10 }}>
         Activity
        </Text>
      </View>
    </Appbar.Header>
  );
}
