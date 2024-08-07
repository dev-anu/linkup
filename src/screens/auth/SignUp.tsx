import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import BackButton from "../../components/BackButton";
import { StatusBar } from "expo-status-bar";
import { theme } from "../../constant/themes";
import { hp, wp } from "../../helper/common";
import Input from "../../components/Input";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import Button from "../../components/Button";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { supabase } from "../../../lib/supabase";

const SignUp = ({ navigation }: any) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!emailRef.current || !passwordRef.current || !nameRef.current) {
      Alert.alert("SignUp", "please fill all the fields");
      return;
    }
    //call the api
    let name = nameRef.current.trim();
    let email = emailRef.current.trim();
    let password = passwordRef.current.trim();
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });
    setLoading(false);
    if (error) {
      Alert.alert("Sign up", error.message);
    }
  };

  return (
    <ScreenWrapper>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton navigation={navigation} />
        {/* Welcome Text */}
        <View>
          <Text style={styles.welcomeText}>Let's</Text>
          <Text style={styles.welcomeText}>Get Started</Text>
        </View>
        <View style={styles.form}>
          <Text style={{ fontSize: hp(2), color: theme.colors.text }}>
            Please fill the details to create an account
          </Text>
          <Input
            icon={<FontAwesome5 name="user" size={24} color="gray" />}
            placeholder="Enter your name"
            onChangeText={(value: any) => (nameRef.current = value)}
          />
          <Input
            icon={<Fontisto name="email" size={24} color="gray" />}
            placeholder="Enter your email"
            onChangeText={(value: any) => (emailRef.current = value)}
          />
          <Input
            icon={<Entypo name="lock" size={24} color="gray" />}
            placeholder="Enter your password"
            onChangeText={(value: any) => (passwordRef.current = value)}
            secureTextEntry
          />
          {/* button */}
          <Button title="SignUp" loading={loading} onPress={onSubmit} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already hava an account?</Text>
          <Pressable onPress={() => navigation.push("Login")}>
            <Text
              style={[
                styles.footerText,
                { color: theme.colors.primaryDark, fontWeight: "600" },
              ]}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: "700",
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgetPassword: {
    textAlign: "right",
    fontWeight: "600",
    color: theme.colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
  },
});
