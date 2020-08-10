import * as React from "react";
import Header from "./header";
import ProfileData from "./profileData";
import ProfileDetails from "./profileDetails";
import styles from "../style";
import Data from "../Constant";
import {
  ActivityIndicator,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
export default class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fullArray: [],
      isLoading: false,
      errors: {},
    };
  }
  componentDidMount() {
    this.onApiCall();
  }
  onApiCall = () => {
    this.setState({ isLoading: true });
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          fullArray: data,
          data: Data.concat(data.slice(0, 80)),
          isLoading: false,
        })
      );
  };
  render() {
    const { data, isLoading } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Header {...this.props} />
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.activityIndicator}
          />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollView}
            style={{ backgroundColor: "white" }}
          >
            <View>
              <ProfileDetails {...this.props} />
              <ProfileData data={data} />
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  }
}
