import { View, Text, StyleSheet, Button } from "react-native";

export default function CreatePostScreen({}) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>CREATE POST SCREEN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
