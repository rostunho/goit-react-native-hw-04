import {
  Keyboard,
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function ScreenWrapper({ children }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBg}
          source={require("../assets/images/photo-bg.jpg")}
        >
          <KeyboardAvoidingView
            style={styles.avoidingView}
            behavior={Platform.OS === "ios" ? "padding" : "position"}
          >
            {children}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "flex-end",
  },
  avoidingView: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
});
