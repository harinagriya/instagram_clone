import * as React from "react";
import { Avatar } from "react-native-paper";
import styles from "../style";
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
          justifyContent:"center"
        }}
      >
        <Text>
          {props.data.title +" like your photo"}
        </Text>
      </View>
      <Image
        source={{ uri: props.data.url }}
        style={styles.notificationImage}
        resizeMode={"cover"}
      />
    </View>
  );
}
export default class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    this.setState({ data: this.props.data });
  }
  render() {
    const { data } = this.state;
    return (
      <>
        <View style={{marginTop:15}}>
          <FlatList
            data={data}
            renderItem={({ item }) => <Item data={item} />}
            keyExtractor={(item) => item.id.toString()}
            horizontal={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </>
    );
  }
}
