import * as React from "react";
import styles from "../style";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  Alert,
  Platform,
} from "react-native";
function Item(props) {
  return (
    <View style={{ flexDirection: "column", margin: 1.5 }}>
      <Image
        source={{ uri: props.data.url }}
        style={styles.profileDataImage}
        resizeMode={"cover"}
      />
    </View>
  );
}
function MyPosts(props) {
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={Dimensions.get("window").width > 800 ? 5 : 3}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
export default class ProfileData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      index: 0,
      currentRoute: "first",
      routes: [
        {
          key: "first",
          title: "First",
        },
        {
          key: "second",
          title: "Second",
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
      case "first":
        return <MyPosts data={this.state.data} />;
      case "second":
        return <MyPosts data={this.state.data} />;
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
          case "first":
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
          case "second":
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
