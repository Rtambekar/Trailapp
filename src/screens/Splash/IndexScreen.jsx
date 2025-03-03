import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";

import Colors from '../../constant/Colors';
export default function IndexScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/crab.png")} 
        style={styles.image}
      />

      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Nanda Yatchs</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum qui
          dicta assumenda? Corporis, non dignissimos!
        </Text>

        <TouchableOpacity
          style={styles.buttonOutline}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <Pressable
          style={styles.buttonOutline}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonOutlineText}>Already have an Account?</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  image: {
    width: "50%",
    height: "60%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  bottomContainer: {
    backgroundColor: Colors.PRIMARY,
    padding: 25,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    color: Colors.WHITE,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: Colors.WHITE,
    marginBottom: 20,
  },
  buttonOutline: {
    padding: 15,
    borderRadius: 25,
    marginTop: 10,
    alignSelf: "center",
    width: "80%",
    borderWidth: 2,
    borderColor: Colors.WHITE,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.WHITE,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonOutlineText: {
    fontSize: 16,
    color: Colors.WHITE,
    textAlign: "center",
    fontWeight: "bold",
  },
});
