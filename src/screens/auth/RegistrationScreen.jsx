import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Keyboard } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import Avatar from "../../components/Avatar";
import Input from "../../components/Input";
import AuthButtons from "../../components/AuthButtons";

export default function RegistrationScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardShowing = () => {
      setIsKeyboardVisible(true);
    };
    const keyboardHiding = () => {
      setIsKeyboardVisible(false);
    };

    const show = Keyboard.addListener("keyboardDidShow", keyboardShowing);
    const hide = Keyboard.addListener("keyboardDidHide", keyboardHiding);

    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  const handleSubmit = () => {
    console.log("Login :", login);
    console.log("Email :", email);
    console.log("Password :", password);
    setLogin("");
    setEmail("");
    setPassword("");
    navigation.navigate("Home");
  };

  return (
    <ScreenWrapper>
      <View
        style={{
          ...styles.container,
          paddingBottom: isKeyboardVisible ? 16 : 45,
        }}
      >
        <Avatar />
        <Text style={styles.title}>Registration</Text>
        <View style={styles.form}>
          <Input
            placeholder="Login"
            value={login}
            onChangeText={(value) => {
              setLogin(value);
            }}
          />
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(value) => {
              setEmail(value);
            }}
          />
          <Input
            placeholder="Password"
            secured
            value={password}
            onChangeText={(value) => {
              setPassword(value);
            }}
          />

          {!isKeyboardVisible && (
            <AuthButtons
              text="Register"
              secondaryText="Already have an account? Log In ?"
              onSubmit={handleSubmit}
              onRedirect={() => navigation.navigate("Login")}
            />
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35.16,
    marginBottom: 32,
  },
  form: {
    width: "100%",
  },
});
