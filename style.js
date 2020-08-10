import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
const styles = StyleSheet.create({
  //for loading
  activityIndicator: {
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: Dimensions.get("window").height / 1.2,
    alignItems: "center",
    justifyContent: "center",
  },
  //for contain all thing in single unit
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    width: Dimensions.get("window").width,
    // marginHorizontal:
    //   Dimensions.get("window").width > 500
    //     ? 400
    //     : 0,
  },
  //for scroll view
  scrollView: {
    //  marginHorizontal: 500,
  },
  //for header
  header: {
    width: Dimensions.get("window").width,
    height: 25,
    backgroundColor: "#FFF",
    bottom: 12.5,
    justifyContent: "space-between",
  },
  //for footer
  footer: {
    backgroundColor: "black",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
  },
  //for topStories
  item: {
    paddingTop: 0,
    padding: 2.5,
    flexDirection: "column",
    // width:58,
    alignItems: "center",
  },
  thumbnailImage: {
    width: 58,
    height: 58,
    backgroundColor: "#fff",
    borderRadius: 29,
    borderColor: "#FD1D1D",
    borderWidth: 2,
  },
  //for body and recent stories
  card: {
    flexDirection: "column",
    paddingTop: 5,
    paddingBottom: 10,
  },
  recentStories: {
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
    borderBottomColor: "rgb(218, 215, 215)",
    borderTopColor: "rgb(218, 215, 215)",
    height: 350,
  },
  recentStoriesData: {
    flexDirection: "column",
    padding: 10,
    paddingRight: 2,
  },
  recentImage: {
    justifyContent: "center",
    width: 130,
    height: 270,
    opacity: 0.9,
  },
  //for backgroung image
  backImage: {
    marginTop: 8,
    width: Dimensions.get("window").width,
    height: 330,
  },
  //for profileData Image Grid
  profileDataImage: {
    width:
      Dimensions.get("window").width > 800
        ? Dimensions.get("window").width / 5 - 3
        : Dimensions.get("window").width / 3 - 3,
    height:
      Dimensions.get("window").width > 800
        ? Dimensions.get("window").width / 5 - 3
        : Dimensions.get("window").width / 3 - 3,
  },
  //for profileDetails
  profileButton: {
    width: Dimensions.get("window").width / 3 - 18,
    height: 27,
    alignItems: "center",
    justifyContent: "center",
  },
  //for notificationImage
  notificationImage:{
    width:45,
    height:45,
  }
});

export default styles;
