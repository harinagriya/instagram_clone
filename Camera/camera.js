import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Platform,
  Alert,
  Dimensions,
  CameraRoll,
} from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import Constants from "expo-constants";
export default class CameraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasPermission: null,
      cameraType:
        Platform.OS === "web"
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back,
      flashMode: Camera.Constants.FlashMode.off,
    };
  }
  async componentDidMount() {
    // CameraRoll.getPhotos({
    //   first: 20,
    //   assetType: 'Photos',
    // })
    // .then(r => {
    //   console.log("Photos",r.edges)
    // })
    // .catch((err) => {
    //    //Error Loading Images
    // });
    this.getPermissionAsync();
  }
  getPermissionAsync = async () => {
    // Camera roll Permission
    if (Platform.OS === "ios") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
    // Camera Permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === "granted" });
  };
  handleCameraType = () => {
    const { cameraType } = this.state;
    this.setState({
      cameraType:
        cameraType === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back,
    });
  };
  handleFlashMode = () => {
    const { flashMode } = this.state;
    this.setState({
      flashMode:
        flashMode === Camera.Constants.FlashMode.off
          ? Camera.Constants.FlashMode.on
          : Camera.Constants.FlashMode.off,
    });
  };
  takePicture = async () => {
    console.log("this.camera", this.camera);
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      console.log("photo", photo);
    }
  };
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
  };
  render() {
    const { hasPermission, cameraType, flashMode } = this.state;
    if (hasPermission === null) {
      return <View />;
    } else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1, marginTop: Constants.statusBarHeight }}
            type={cameraType}
            flashMode={flashMode}
            focusDepth={1}
            ref={(ref) => {
              this.camera = ref;
            }}
          >
            <View
              style={{
                marginTop: 15,
                bottom: 0,
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  alignSelf: "flex-end",
                  alignItems: "center",
                  backgroundColor: "transparent",
                }}
                onPress={() => this.pickImage()}
              >
                <MaterialIcons
                  name="settings"
                  style={{ color: "#fff", fontSize: 35 }}
                />
              </TouchableOpacity>
              {Platform.OS === "web" ? null : (
                <TouchableOpacity
                  style={{
                    alignSelf: "flex-end",
                    alignItems: "center",
                    backgroundColor: "transparent",
                  }}
                  onPress={() => this.handleFlashMode()}
                >
                  <MaterialCommunityIcons
                    name={
                      flashMode === Camera.Constants.FlashMode.off
                        ? "flash-off"
                        : "flash"
                    }
                    style={{ color: "#fff", fontSize: 35 }}
                  />
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={{
                  alignSelf: "flex-end",
                  alignItems: "center",
                  backgroundColor: "transparent",
                }}
                onPress={() => this.props.navigation.goBack()}
              >
                <Entypo name="cross" style={{ color: "#fff", fontSize: 35 }} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                position: "absolute",
                width: Dimensions.get("window").width,
                bottom: 0,
                backgroundColor: "rgba(26, 26, 26, 0.2 )",
                height: 65,
              }}
            />

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 20,
                marginBottom: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  alignSelf: "flex-end",
                  alignItems: "center",
                  backgroundColor: "transparent",
                }}
                onPress={() => this.pickImage()}
              >
                <Ionicons
                  name="ios-photos"
                  style={{ color: "#fff", fontSize: 35 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignSelf: "flex-end",
                  alignItems: "center",
                  backgroundColor: "transparent",
                }}
                onPress={() => this.takePicture()}
              >
                <MaterialIcons
                  name="camera"
                  style={{ color: "#fff", fontSize: 55, marginBottom: -5 }}
                />
              </TouchableOpacity>
              {Platform.OS === "web" ? null : (
                <TouchableOpacity
                  style={{
                    alignSelf: "flex-end",
                    alignItems: "center",
                    backgroundColor: "transparent",
                  }}
                  onPress={() => this.handleCameraType()}
                >
                  <MaterialIcons
                    name="party-mode"
                    style={{ color: "#fff", fontSize: 35 }}
                  />
                </TouchableOpacity>
              )}
            </View>
          </Camera>
        </View>
      );
    }
  }
}
