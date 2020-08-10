import * as React from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  Alert,
  ImageBackground,
} from "react-native";
import { Avatar } from "react-native-paper";
import styles from "../style";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/Feather";

function RecentStories(props) {
  return (
    <View style={styles.recentStoriesData}>
      <ImageBackground
        source={{ uri: props.data.url }}
        style={styles.recentImage}
      >
        <View
          style={{ alignItems: "center", justifyContent: "center", top: 90 }}
        >
          <View style={(styles.thumbnailImage, { alignItems: "center" })}>
            <Avatar.Image
              size={50}
              source={require("../assets/profilePic.jpg")}
            />
          </View>
          <Text style={{ color: "#fff" }}>{props.data.title.slice(0, 13)}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

function BodyImage(props) {
  return (
    <View>
      <ImageBackground
        source={{ uri: (props.data).toString() }}
        blurRadius={10}
        style={styles.backImage}
        resizeMode={"stretch"}
      >
        <Image
          source={{ uri: (props.data).toString() }}
          style={{
            width: Dimensions.get("window").width,
            height: 330,
          }}
          resizeMode={"contain"}
        />
      </ImageBackground>
    </View>
  );
}

function Item(props) {
  return (
    <View key={props.data.id} style={styles.card}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", marginLeft: 8 }}>
          <Avatar.Image size={35} source={{ uri: props.data.thumbnailUrl }} />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ marginLeft: 10, fontWeight: "500" }}>
              {props.data.title.slice(0, 20) + "..."}
            </Text>
            <Text style={{ marginLeft: 10, fontSize: 10 }}>
              Indore mere sapno ka sahar
            </Text>
          </View>
        </View>
        <Icon.Button
          name="ellipsis-v"
          onPress={() => console.log("hlo")}
          color="#111"
          backgroundColor="transparent"
          size={20}
          borderRadius={20}
          iconStyle={{ marginRight: 5 }}
        />
      </View>
      <View>
        <FlatList
          data={
            Array.isArray(props.data.url) ? props.data.url : [props.data.url]
          }
          renderItem={({ item }) => <BodyImage data={item} />}
          keyExtractor={(item) => item.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        {/* <ImageBackground
          source={{ uri: props.data.url }}
          blurRadius={10}
          style={styles.backImage}
          resizeMode={"stretch"}
        >
          <Image
            source={{ uri: props.data.url }}
            style={{
              width: Dimensions.get("window").width,
              height: 330,
            }}
            resizeMode={"contain"}
          />
        </ImageBackground> */}
      </View>
      <View style={{ marginTop: 0 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", marginLeft: 8 }}>
            <Icon.Button
              name={props.isLike.includes(props.data.id) ? "heart" : "heart-o"}
              onPress={() => props.onLike(props.data.id)}
              color={
                props.isLike.includes(props.data.id) ? "#ff1a1a" : "#000000"
              }
              backgroundColor="transparent"
              size={30}
              borderRadius={30}
              iconStyle={{ marginRight: 0 }}
            />
            <Icon.Button
              name="comment-o"
              onPress={() => console.log("hlo")}
              color="#111"
              backgroundColor="transparent"
              size={30}
              borderRadius={30}
              iconStyle={{
                marginRight: 0,
                // transform: [
                //   { rotate: "290deg" },
                //   { rotateX: "20deg" },
                //   { rotateY: "10deg" },
                // ],
              }}
            />
            <Icons.Button
              name="send"
              onPress={() => console.log("hlo")}
              color="#111"
              backgroundColor="transparent"
              size={30}
              borderRadius={30}
              iconStyle={{
                marginRight: 0,
                transform: [{ rotate: "20deg" }],
                opacity: 0.7,
              }}
            />
          </View>
          <Icon.Button
            name={
              props.isSaved.includes(props.data.id) ? "bookmark" : "bookmark-o"
            }
            onPress={() => props.onSaved(props.data.id)}
            color="#111"
            backgroundColor="transparent"
            size={30}
            borderRadius={30}
            iconStyle={{ marginRight: 5 }}
          />
        </View>
      </View>
      {props.data.id % 5 === 0 ? (
        <View style={styles.recentStories}>
          <Text style={{ margin: 10, fontSize: 15 }}>Recent Stories </Text>
          <FlatList
            data={props.recentStories}
            renderItem={({ item }) => <RecentStories data={item} />}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ) : null}
    </View>
  );
}
export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      errors: {},
      isSaved: [],
      isLike: [],
    };
  }
  componentDidMount() {
    this.setState({ data: this.props.data });
  }
  onRefresh = () => {
    this.setState({ refreshing: true });
    Alert.alert("hello");
    this.setState({ refreshing: false });
  };
  onSaved = (id) => {
    const { isSaved } = this.state;
    if (isSaved.includes(id)) {
      let index = isSaved.indexOf(id);
      isSaved.splice(index, 1);
      this.setState({ isSaved: isSaved });
    } else {
      this.setState({ isSaved: [...isSaved, id] });
    }
  };
  onLike = (id) => {
    const { isLike } = this.state;
    if (isLike.includes(id)) {
      let index = isLike.indexOf(id);
      isLike.splice(index, 1);
      this.setState({ isLike: isLike });
    } else {
      this.setState({ isLike: [...isLike, id] });
    }
  };
  render() {
    const { data, refreshing, isSaved, isLike } = this.state;
    return (
      <View style={{ paddingTop: 10 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item
              data={item}
              recentStories={data}
              topStories={data}
              isSaved={isSaved}
              isLike={isLike}
              onSaved={this.onSaved}
              onLike={this.onLike}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
