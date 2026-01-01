import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    // handle sign-in logic here
    if (!form.email || !form.password)
      return Alert.alert(
        "Error",
        "Please Enter valid email address and password"
      );
    setIsSubmitting(true);

    try {
      // call Apwrite sign In
      Alert.alert("Success", "You have signed in successfully!");
      router.replace("/");
    } catch (error: any) {
      Alert.alert(
        "Error",
        error.message || "Failed to sign in. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter Your Email"
        label="Email"
        value={form.email}
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, email: text }));
        }}
        keyboardType="email-address"
      />

      <CustomInput
        placeholder="Enter Your Password"
        label="Password"
        value={form.password}
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, password: text }));
        }}
        secureTextEntry={true}
      />
      <CustomButton title="Sign-in" isLoading={isSubmitting} onPress={submit} />

      <View className="flex justify-center mt-5 flex-row gap-2 items-center">
        <Text className="base-regular text-gray-100">
          Dont have an account?
        </Text>
        <Link href="/sign-up" className="base-gold text-primary">
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
