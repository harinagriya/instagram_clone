import * as React from "react";
import { Text, View, FlatList, TouchableOpacity, Alert } from "react-native";
import { Avatar } from "react-native-paper";
import styles from "../style";

const stories = [
  {
    content: ({ action, isPaused }) => {
      const handleClick = (e) => {
        e.preventDefault();
        action(isPaused ? "play" : "pause");
      };
      return (
        <div onClick={handleClick}>
          <h2>Hi</h2>
          <span>{isPaused ? "Paused" : "Playing"}</span>
        </div>
      );
    },
  },
  {
    url: "https://picsum.photos/1080/1920",
    seeMore: ({ close }) => (
      <div style={{ width: "100%", height: "100%" }}>Hello</div>
    ),
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 5h ago",
      profileImage: "https://picsum.photos/1000/1000",
    },
  },
  {
    url:
      "https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 32m ago",
      profileImage: "https://picsum.photos/1080/1920",
    },
  },
  {
    url:
      "https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg",
    header: {
      heading: "mohitk05/react-insta-stories",
      subheading: "Posted 32m ago",
      profileImage:
        "https://avatars0.githubusercontent.com/u/24852829?s=400&v=4",
    },
  },
  {
    url: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
    type: "video",
    duration: 1000,
  },
  {
    url:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    type: "video",
    seeMore: ({ close }) => (
      <div style={{ width: "100%", height: "100%" }}>Hello</div>
    ),
  },
  {
    url:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    type: "video",
  },
  "https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
];

function Item(props) {
  const onPress = () => {
    Alert.alert("Hello");
  };
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      {props.data.id === -0.1 ? (
        <>
          <View style={styles.thumbnailImage}>
            <Avatar.Image
              size={50}
              source={require("../assets/profilePic.jpg")}
              style={{ marginTop: 1.7, marginLeft: 2 }}
            />
          </View>
          <Text style={{ fontSize: 11 }}>{"hari_om"}</Text>
        </>
      ) : (
        <>
          <View style={styles.thumbnailImage}>
            <Avatar.Image
              size={50}
              source={{ uri: props.data.thumbnailUrl }}
              style={{ marginTop: 1.7, marginLeft: 2 }}
            />
          </View>
          <Text style={{ fontSize: 11 }}>
            {props.data.title.length > 9
              ? props.data.title.slice(0, 9) + "..."
              : props.data.title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}

export default class Topstories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      errors: {},
    };
  }
  componentDidMount() {
    this.setState({ data: this.props.data });
  }
  render() {
    const { data } = this.state;
    return (
      <View
        style={{
          borderBottomWidth: 0.2,
          borderBottomColor: "rgb(218, 215, 215)",
          marginTop: 5,
        }}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
