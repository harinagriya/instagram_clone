import * as React from "react";
import { Avatar } from "react-native-paper";
import styles from "../style";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  EvilIcons,
} from "@expo/vector-icons";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Alert,
  Platform,
} from "react-native";
function Item(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        justifyContent: "space-between",
      }}
    >
      <Avatar.Image size={45} source={{ uri: props.data.thumbnailUrl }} />
      <View
        style={{
          width: Dimensions.get("window").width - 150,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Text>{props.data.title}</Text>
        <Text>5 new messages 5h</Text>
      </View>
      <TouchableOpacity
        style={{
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
        onPress={() => props.navigation.navigate("Camera")}
      >
        <EvilIcons name={"camera"} style={{ color: "#111", fontSize: 45 }} />
      </TouchableOpacity>
    </View>
  );
}
function Messages(props) {
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={props.data}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
export default class MessagesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      index: 0,
      currentRoute: "primary",
      routes: [
        {
          key: "primary",
          title: "PRIMARY",
        },
        {
          key: "general",
          title: "GENERAL",
        },
      ],
    };
  }
  componentDidMount() {
    this.setState({ data: this.props.data });
  }
  handleIndexChange = (index) => {
    const currentRoute = this.state.routes[index].key;
    this.setState({
      index,
      currentRoute,
    });
  };
  renderScene = ({ route }) => {
    switch (route.key) {
      case "primary":
        return <Messages data={this.state.data} />;
      case "general":
        return <Messages data={this.state.data} />;
      default:
        return null;
    }
  };
  renderTabBar = (props) => (
    <TabBar
      {...props}
      getLabelText={() => null}
      renderIcon={({ route, focused }) => {
        switch (route.key) {
          case "primary":
            return (
              <MaterialIcons
                name={"grid-on"}
                style={{
                  color:
                    this.state.currentRoute === route.key
                      ? "#0d0d0d"
                      : "#666666",
                  fontSize: 30,
                }}
              />
            );
          case "general":
            return Platform.OS === "web" ? (
              <MaterialIcons
                name={"account-box"}
                style={{
                  color:
                    this.state.currentRoute === route.key
                      ? "#0d0d0d"
                      : "#666666",
                  fontSize: 34,
                }}
              />
            ) : (
              <MaterialCommunityIcons
                name={"account-box-outline"}
                style={{
                  color:
                    this.state.currentRoute === route.key
                      ? "#0d0d0d"
                      : "#666666",
                  fontSize: 34,
                }}
              />
            );
          default:
            return null;
        }
      }}
      indicatorStyle={{ backgroundColor: "black", height: 1.5 }}
      style={{ backgroundColor: "white" }}
    />
  );
  render() {
    const { data, index, routes } = this.state;
    return (
      <>
        <TabView
          navigationState={{ index, routes }}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={(index) => this.handleIndexChange(index)}
          initialLayout={{ width: Dimensions.get("window").width }}
          swipeEnabled={true}
          lazy={true}
          swipeVelocityImpact={0.9}
        />
      </>
    );
  }
}
