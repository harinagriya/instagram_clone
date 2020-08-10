import * as React from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Avatar, Button } from "react-native-paper";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Data from "../Constant";
import styles from "../style";
export default function ProfileDetails(props) {
  // console.log("hello", props.navigation.navigate());
  return (
    <View style={{ marginTop: 10, flexDirection: "column" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={
            (styles.thumbnailImage,
            {
              alignItems:
                Dimensions.get("window").width > 800 ? "flex-start" : "center",
              marginLeft: Dimensions.get("window").width > 800 ? 13 : 0,
              width: Dimensions.get("window").width / 3,
            })
          }
        >
          <View>
            <Avatar.Image
              size={90}
              source={require("../assets/profilePic.jpg")}
            />
            <View
              style={{
                position: "absolute",
                right: -6,
                bottom: 2,
                backgroundColor: "white",
                borderRadius: 11,
                width: 23,
                height: 23,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  // alignSelf: "flex-start",
                  // alignItems: "center",
                  backgroundColor: "transparent",
                }}
                onPress={() => props.navigation.navigate("Search")}
              >
                <AntDesign
                  name={"pluscircle"}
                  style={{ color: "#1a75ff", fontSize: 20, opacity: 0.8 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: Dimensions.get("window").width / 1.5,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={{ textAlign: "center", fontSize: 18 }}>78</Text>
            <Text>Posts</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ textAlign: "center", fontSize: 18 }}>427</Text>
            <Text>Followers</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ textAlign: "center", fontSize: 18 }}>439</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          // justifyContent: "space-around",
          paddingLeft: 13,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Text>KUM@W@T 《《H@R!》》 N@GR!Y@</Text>
        <Text>#PuR£ !NdOr!</Text>
        <Text>#L@Nd oN E@RtH 17 AuG...</Text>
        <Text>#SoFtWeRe EnG!NeEr</Text>
        <Text>#Ch@Mp oF Cr!ckeT</Text>
        <Text>#Te@M : || महांकाल कि सेना ||</Text>
        <Text>#D@nCe लवर</Text>
        <Text>#MuS!c लवर</Text>
        <Text>vm.tiktok.com/pWkFUm</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 10,
          paddingBottom: 10,
          marginLeft: 13,
          marginRight: 13,
        }}
      >
        <Button
          mode="outlined"
          color="black"
          compact={true}
          uppercase={false}
          style={styles.profileButton}
          labelStyle={{ fontSize: 13 }}
          onPress={() => Alert.alert("Edit Profile")}
        >
          Edit Profile
        </Button>
        <Button
          mode="outlined"
          color="black"
          compact={true}
          uppercase={false}
          style={styles.profileButton}
          labelStyle={{ fontSize: 13 }}
          onPress={() => Alert.alert("Promotions")}
        >
          Promotions
        </Button>
        <Button
          mode="outlined"
          color="black"
          compact={true}
          uppercase={false}
          style={styles.profileButton}
          labelStyle={{ fontSize: 13 }}
          onPress={() => Alert.alert("Insights")}
        >
          Insights
        </Button>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginLeft: 13,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <FlatList
          data={Data}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

function Item(props) {
  const onPress = () => {
    Alert.alert("Hello");
  };
  return (
    <>
      {props.data.id === -0.1 ? (
        <TouchableOpacity
          style={(styles.item, { marginLeft: 13 })}
          onPress={() => props.navigation.navigate("Search")}
        >
          <View
            style={
              (styles.thumbnailImage,
              {
                borderRadius: 29,
                borderWidth: 1,
                borderColor: "#111",
                justifyContent: "center",
                alignItems: "center",
                width: 58,
                height: 58,
              })
            }
          >
            <Entypo
              name={"plus"}
              style={{
                color: "#111",
                fontSize: 30,
                opacity: 0.8,
              }}
            />
          </View>
          <Text style={{ fontSize: 11, marginTop: 5 }}>{"New"}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={(styles.item, { marginLeft: 20 })}
          onPress={onPress}
        >
          <View style={styles.thumbnailImage}>
            <Avatar.Image
              size={50}
              source={{ uri: props.data.thumbnailUrl }}
              style={{ marginTop: 1.7, marginLeft: 2 }}
            />
          </View>
          <Text style={{ fontSize: 11, marginTop: 5 }}>
            {props.data.title.length > 9
              ? props.data.title.slice(0, 9) + "..."
              : props.data.title}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
}
