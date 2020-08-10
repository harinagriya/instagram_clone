import * as React from "react";
import Header from "./header";
import TopStories from "./topStories";
import Body from "./Body";
import styles from "../style";
import Data from "../Constant";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
export default class HomeComponent extends React.Component {
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
  onApiCall = async () => {
    this.setState({ isLoading: true });
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          fullArray: data,
          data: Data.concat(data.slice(0, 25)),
          isLoading: false,
        })
      );
  };
  onRefresh = () => {};
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
          >
            <View>
              <TopStories data={data} />
              <Body data={data} onRefresh={this.onRefresh} />
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  }
}
