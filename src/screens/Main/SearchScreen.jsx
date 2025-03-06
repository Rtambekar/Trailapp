import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image
} from "react-native";
import { Modal } from "react-native";
import Colors from "../../constant/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { BackHandler, Alert } from "react-native";
import Location from "../../assets/Icons/Location";
import Calender from "../../assets/Icons/Calender";
import Vacationers from "../../assets/Icons/Vacationers";
import Price from "../../assets/Icons/Price";
import Close from "../../assets/Icons/Close";

const Search = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Search");

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    navigation.navigate(tabName);
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const [searchText, setSearchText] = useState(''); // Corrected state variable name

  const clearSearch = () => {
    setSearchText('');
  }

  const Locations = [
    {
      id: 1,
      name: "Lefkas Marina",
      image: require("../../assets/images/yatch.png"),

    },
    {
      id: 2,
      name: "Barcelona",
      image: require("../../assets/images/yatch2.png"),
    },
    {
      id: 3,
      name: "Bahama Bay, Devenport, Florida",
      image: require("../../assets/images/yatch.png"),
    },
    
  ]
  useEffect(() => {
    const backAction = () => {
      if (isModalVisible) {
        closeModal();
        return true;
      }
      return false;
    };
  
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
  
    return () => backHandler.remove();
  }, [isModalVisible]);
  
  
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
            <TouchableOpacity style={styles.row} onPress={openModal}>
              <Location fill="black" />
              <Text style={styles.text2}>Where to sail?</Text>
            </TouchableOpacity>

            <View style={styles.dateRow}>
              <TouchableOpacity style={styles.dateBox}>
                <Calender />
                <Text style={styles.text2}>In Date</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.dateBox}>
                <Calender />
                <Text style={styles.text2}>Out Date</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.row}>
              <Vacationers />
              <Text style={styles.text2}>Vacationers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row}>
              <Price />
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

      <Modal visible={isModalVisible} transparent animationType="slide"   onRequestClose={closeModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.searchContainer}>
              <TextInput
                placeholder="Where to sail?"
                placeholderTextColor="#babcbe"
                style={styles.searchInput}
                value={searchText}
                onChangeText={setSearchText}
              />
              {searchText.length > 0 && (
                <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
                  <Close />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.resultList}>
              <Text style={{
                fontSize: 12,
                paddingTop: 20, fontWeight: 600
              }}>RECENT SEARCHES</Text>

              {Locations.map((location) => (
                <View key={location.id} style={styles.location_container}>

                  <Text style={styles.location_name}>{location.name}  </Text>
                </View>
              ))}

              <Text style={{
                fontSize: 12,
                paddingTop: 20, fontWeight: 600
              }}>RECOMENDED LOCATION</Text>

              {Locations.map((location) => (
                <View key={location.id} style={styles.location}>
                 <Image source={location.image} style={{height:50,width:50,borderRadius:15, borderWidth: 2}}/>
                  <Text style={styles.location_name}>{location.name}  </Text>
                </View>
              ))}

            </View>

          </View>
        </View>
      </Modal>

      {/* Example Search Results - Replace with actual API data if needed */}


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
  },
  location_container: {
    flexDirection: 'column'
  },
  location_name: {
    fontSize: 20,
    paddingLeft: 18,
    paddingTop: 10
  },
  // Modal style
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  searchContainer: {
    position: "relative",
    width: "100%",
  },
  searchInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#eceff1",
    backgroundColor: "#eceff1",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingRight: 35, // make room for the clear button
    fontSize: 16,
    color: "#000",
  },
  clearButton: {
    position: "absolute",
    right: 11,
    top: 11,
  },
location:{  //style for Recomended locations.
  flexDirection:"row",
  padding:10
  
}














  // modalOverlay: { flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.5)" },
  // modalContent: { backgroundColor: "white", padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  // closeIcon: { alignSelf: "flex-end", padding: 5 },
  // searchInput: { height: 50, borderWidth: 1, borderColor: "#ccc", borderRadius: 10, paddingHorizontal: 15 },
  // resultList: { marginTop: 10 },
  // resultItem: { paddingVertical: 10, fontSize: 16, borderBottomWidth: 1, borderBottomColor: "#eee" },

});