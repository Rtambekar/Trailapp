import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Colors from "../../constant/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Search"); // this screen starts with "Search" active

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    navigation.navigate(tabName); // navigate to that tab's screen
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View>
        {/* Header Tabs */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => handleTabPress("Search")}
            style={styles.headerTab}
          >
            <Text style={styles.headerText}>Search</Text>
            {activeTab === "Search" && <View style={styles.activeLine} />}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleTabPress("Explore")}
            style={styles.headerTab}
          >
            <Text style={styles.headerText}>Explore</Text>
            {activeTab === "Explore" && <View style={styles.activeLine} />}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleTabPress("Savings")}
            style={styles.headerTab}
          >
            <Text style={styles.headerText}>Savings</Text>
            {activeTab === "Savings" && <View style={styles.activeLine} />}
          </TouchableOpacity>
        </View>

        {/* ScrollView */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.tabs}>
            {["Yachts", "Experiences", "Destinations"].map((item) => (
              <Pressable
                key={item}
                style={({ pressed }) => [
                  styles.box,
                  { backgroundColor: pressed ? Colors.WHITE : Colors.DARK_BLUE },
                ]}
              >
                {({ pressed }) => (
                  <Text
                    style={[
                      styles.text,
                      { color: pressed ? Colors.BLACK : Colors.WHITE },
                    ]}
                  >
                    {item}
                  </Text>
                )}
              </Pressable>
            ))}
          </View>
        </ScrollView>

        <View style={styles.maincontainer}>
          <View style={styles.whiteBox}>
            <TouchableOpacity style={styles.row}>
              <Ionicons name="location-outline" size={20} color="black" />
              <Text style={styles.text2}>Where to sail?</Text>
            </TouchableOpacity>

            <View style={styles.dateRow}>
              <TouchableOpacity style={styles.dateBox}>
                <Ionicons name="calendar-outline" size={20} color="black" />
                <Text style={styles.text2}>In Date</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.dateBox}>
                <Ionicons name="calendar-outline" size={20} color="black" />
                <Text style={styles.text2}>Out Date</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.row}>
              <Ionicons name="people-outline" size={20} color="black" />
              <Text style={styles.text2}>Vacationers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row}>
              <Ionicons name="pricetag-outline" size={20} color="black" />
              <Text style={styles.text2}>Price Range</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.text3}>Show all Results</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{}}>
              <Text style={{ color: 'white', fontSize: 20, padding: 30, alignSelf: 'center' }}>Need help?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 30,
    backgroundColor: Colors.PRIMARY,
  },
  headerTab: {
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    color: Colors.WHITE,
  },
  activeLine: {
    height: 3,
    backgroundColor: Colors.WHITE,
    width: "130%",
    marginTop: 8,
  },
  tabs: {
    flexDirection: "row",
    marginVertical: 4,
    marginLeft: 15,
  },
  box: {
    borderColor: Colors.DARK_BLUE,
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 23,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  maincontainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 50,
  },
  whiteBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    height: 280,
    width: '90%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#eee'
  },
  dateRow: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
  },
  dateBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderRightWidth: 1,
    borderRightColor: '#eee',
  },
  text2: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '480'
  },
  button: {
    alignItems: 'center',
    width: '100%',
    marginTop: 70,
    backgroundColor: 'orange',
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  text3: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});