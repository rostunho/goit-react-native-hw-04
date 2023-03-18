import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, TouchableOpacity } from "react-native";
import PostsScreen from "../../screens/main/PostsScreen";
import CreatePostScreen from "../../screens/main/CreatePostScreen";
import ProfileScreen from "../../screens/main/ProfileScreen";

const MainTab = createBottomTabNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <MainTab.Navigator initialRouteName="Home">
      <MainTab.Screen
        options={{ headerShown: false }}
        name="CreatePost"
        component={CreatePostScreen}
      />
      <MainTab.Screen
        options={{
          headerTitleAlign: "center",
          headerStyle: { height: 88 },
          headerTitleStyle: { fontSize: 17 },
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Image
                  source={require("../../assets/images/log-out-icon.png")}
                />
              </TouchableOpacity>
            );
          },
          headerRightContainerStyle: { paddingRight: 16 },
          headerLeftContainerStyle: { paddingLeft: 16 },
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
}
