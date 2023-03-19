import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, TouchableOpacity, StyleSheet } from "react-native";
import PostsScreen from "../main/PostsScreen";
import CreatePostScreen from "../main/CreatePostScreen";
import ProfileScreen from "../main/ProfileScreen";
import {
  LogOutIcon,
  PostsIcon,
  CreatePostIcon,
  ProfileIcon,
} from "../../assets/custom-icons";

const MainTab = createBottomTabNavigator();

export default function DefaultScreen({ navigation }) {
  return (
    <>
      <MainTab.Navigator
        initialRouteName="Posts"
        screenOptions={{
          ...options.screen,
          headerRight: () => {
            return (
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => navigation.navigate("Login")}
              >
                <LogOutIcon />
              </TouchableOpacity>
            );
          },
        }}
      >
        <MainTab.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return <PostsIcon focused={focused} />;
            },
          }}
        />

        <MainTab.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={{
            style: { marginHorizontal: 31 },
            tabBarIcon: () => {
              return <CreatePostIcon />;
            },
          }}
        />

        <MainTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return <ProfileIcon focused={focused} />;
            },
          }}
        />
      </MainTab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 83,
    paddingBottom: 25,
  },
});

const options = {
  screen: {
    tabBarStyle: styles.tabBar,
    tabBarShowLabel: false,
    headerTitleAlign: "center",
    headerStyle: { height: 88 },
    headerTitleStyle: { fontSize: 17 },
    headerRightContainerStyle: { paddingRight: 16 },
    headerLeftContainerStyle: { paddingLeft: 16 },
  },
};
