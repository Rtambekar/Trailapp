import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    Pressable,
    Alert,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from "../../constant/Colors";
import { useNavigation } from "@react-navigation/native";
import { login } from "../../services/AuthServices";

export default function SignInScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
      console.log("handleSignIn called");  // Check if function is called at all

      if (!email || !password) {
          Alert.alert("Validation Error", "Please fill all fields.");
          return;
      }

      setLoading(true);
      console.log("Calling login function...");

      const result = await login(email, password);
      console.log("Login result:", result);

      setLoading(false);

      if (result.success) {
        await AsyncStorage.setItem('userToken', result.accessToken);  // This now works
        Alert.alert("Login Successful", "Welcome back!");
        navigation.navigate('Explore');  // This is now your target screen
    }
     else {
        Alert.alert("Login Failed", result.error || "Invalid credentials");
    }
  };

  
  

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/komondoo.png")}
                style={styles.logo}
            />

            <Text style={styles.welcomeText}>Welcome back</Text>

            <TextInput
                placeholder="Email"
                style={styles.textInput}
                placeholderTextColor="gray"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                placeholder="Password"
                style={styles.textInput}
                placeholderTextColor="gray"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            
            <Pressable
                onPress={handleSignIn}
                style={styles.signInButton}
                disabled={loading}
            >
                <Text style={styles.signInText}>
                    {loading ? "Signing In..." : "Sign In"}
                </Text>
            </Pressable>

            <View style={styles.footer}>
                <Text style={{ fontSize: 16 }}>Don't have an Account?</Text>
                <Pressable onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.createAccountText}>Create Account</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 182,
        height: 182,
        borderRadius: 10,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    textInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 10,
        width: "80%",
        color: "black",
    },
    signInButton: {
        backgroundColor: Colors.PRIMARY,
        paddingHorizontal: 16,
        borderRadius: 8,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        marginTop: 10,
    },
    signInText: {
        fontSize: 16,
        color: Colors.WHITE,
        fontWeight: "bold",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        gap: 5,
    },
    createAccountText: {
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.PRIMARY,
    },
});
