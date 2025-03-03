import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Pressable,
  ToastAndroid,
  ActivityIndicator, 
} from "react-native";
import Colors from "../../constant/Colors";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        source={require('../../assets/images/yatch.png')}
        style={{
          width: 182,
          height: 182,
          marginBottom: 30,
          alignSelf: 'center',
          borderRadius: 10,
        }}
      />

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>
        Create NEW Account
      </Text>

      <TextInput
        placeholder="Full name"
        style={styles.textInput}
        placeholderTextColor="gray"
        // onChangeText={(text) => setFullName(text)}
        value={fullName}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="gray"
        style={styles.textInput}
        // onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="gray"
        style={styles.textInput}
        // onChangeText={(text) => setPassword(text)}
        secureTextEntry
        value={password}
      />
      <TouchableOpacity
        // onPress={CreateNewAccount}
        style={{
          backgroundColor: Colors.PRIMARY,
          paddingHorizontal: 16,
          borderRadius: 8,
          marginTop: 10,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%',
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: Colors.WHITE,
            fontWeight: 'bold',
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          gap: 5,
        }}
      >
        <Text
          style={{
            fontSize: 16,
          }}
        >
          Already have an Account?
        </Text>
        <Pressable onPress={() => navigation.navigate('SignIn')}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: Colors.PRIMARY,
            }}
          >
            Sign In Here
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 10,
    width: '80%',
    color: 'black', // Added to ensure entered text is visible
  },
});
