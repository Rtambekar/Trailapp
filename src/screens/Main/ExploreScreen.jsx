import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { useState } from "react";
import Colors from "../../constant/Colors";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Location from "../../assets/Icons/Location";
import Boat from "../../assets/Icons/Boat";
import Check from "../../assets/Icons/Check";


export default function ExploreScreen() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Search"); // this screen starts with "Search" active

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    navigation.navigate(tabName); // navigate to that tab's screen
  };

  const checkedBoats = [
    {
      id: 1,
      image: require("../../assets/images/yatch.png"), // Use require here
      name: "Astrea 42 (2019)",
      rating: "4.90",
      location: "Lefkas Marina",
      cabins: "4 cabins, 10 berths, 6 baths",
      price: "1037€/day",
    },
    {
      id: 2,
      image: require("../../assets/images/yatch2.png"), // Use require here
      name: "Justin Yachts Fast Wave",
      rating: "4.76",
      location: "Zadar",
      cabins: "4 cabins, 10 berths, 6 baths",
      price: "970€/day",
    },
    {
      id: 3,
      image: require("../../assets/images/yatch.png"), // Use require here
      name: "Mattia 39 (1990)",
      rating: "4.81",
      location: "Monopoli",
      cabins: "2 cabins, 4 berths",
      price: "1090€/day",
    },
  ];

  const images = [
    { src: require("../../assets/images/yatch.png"), title: "Komodo" },
    { src: require("../../assets/images/crab.png"), title: "Costa Rica" },
    { src: require("../../assets/images/yatch.png"), title: "Maldives" },
    { src: require("../../assets/images/yatch.png"), title: "Komodo" },
    { src: require("../../assets/images/crab.png"), title: "Costa Rica" },
    { src: require("../../assets/images/yatch.png"), title: "Maldives" },
  ];

  return (
    <SafeAreaView  >
      <View>
        <ScrollView>
          {/* header */}
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

          {/* Search bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Location fill='#0075ff' />
              <TextInput
                placeholder="Where to Sell?"
                placeholderTextColor={Colors.BLACK}
                style={styles.searchInput}
              />
            </View>
          </View>

          {/* Memorable  */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Memorable Emotions</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          {/* Top Scroll Cardss of the design */}

          {/* Scrollable cards */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.card}>
                <Image
                  source={require("../../assets/images/yatch.png")}
                  style={styles.cardImage}
                />
                <Text style={styles.cardTitle}>
                  Gastronomic Adventures in the Caribbeans
                </Text>
                <Text style={styles.cardSubtitle}>
                  7 days, 4 lands, fresh seafood and more...
                </Text>
                <TouchableOpacity style={styles.exploreButton}>
                  <Text style={styles.exploreText}>Explore</Text>
                  <Boat />
                  <Text style={styles.exploreText}>12</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.card}>
                <Image
                  source={require("../../assets/images/yatch2.png")}
                  style={styles.cardImage}
                />
                <Text style={styles.cardTitle}>
                  Gastronomic Adventures in the Caribbeans
                </Text>
                <Text style={styles.cardSubtitle}>
                  7 days, 4 lands, fresh seafood and more...
                </Text>
                <TouchableOpacity style={styles.exploreButton}>
                  <Text style={styles.exploreText}>Explore</Text>
                  <Boat />
                  <Text style={styles.exploreText}>12</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.card}>
                <Image
                  source={require("../../assets/images/yatch.png")}
                  style={styles.cardImage}
                />
                <Text style={styles.cardTitle}>
                  Gastronomic Adventures in the Caribbeans
                </Text>
                <Text style={styles.cardSubtitle}>
                  7 days, 4 lands, fresh seafood and more...
                </Text>
                <TouchableOpacity style={styles.exploreButton}>
                  <Text style={styles.exploreText}>Explore</Text>
                  <Boat />
                  <Text style={styles.exploreText}>12</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.card}>
                <Image
                  source={require("../../assets/images/komondoo.png")}
                  style={styles.cardImage}
                />
                <Text style={styles.cardTitle}>
                  Gastronomic Adventures in the Caribbeans
                </Text>
                <Text style={styles.cardSubtitle}>
                  7 days, 4 lands, fresh seafood and more...
                </Text>
                <TouchableOpacity style={styles.exploreButton}>
                  <Text style={styles.exploreText}>Explore</Text>
                  <Boat />
                  <Text style={styles.exploreText}>12</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          {/* Small Scroll cardd of explore */}
          <View>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>EXplore Another World</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={{ paddingHorizontal: 10 }}
            >
              {images.map((item, index) => (
                <View
                  key={index}
                  style={{ marginRight: 10, alignItems: "center" }}
                >
                  <Image
                    style={{
                      width: 290,
                      height: 220,
                      borderRadius: 25,
                      borderWidth: 1,
                      borderColor: "#d3d3d3", // Light Gray color
                      marginBottom: 5, // Reduced margin to keep title closer
                    }}
                    source={item.src}
                  />
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}
                  >
                    {item.title}
                  </Text>
                </View>
              ))}
            </ScrollView>

            {/* <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Komondo</Text>
          </View> */}
            {/* <View style={styles.sectionHeader}>
            <Text
              style={{
                margin: 20,
                marginLeft: 10,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi
              quisquam praesentium, ducimus in recusandae!
            </Text>
          </View> */}
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
              marginTop: 40,
            }}
          >
            {/* Two text fields */}
            <View
              style={{
                width: "80%",
              }}
            >
              <Text style={styles.sectionTitle}>
                Wating for the World opening?
              </Text>
            </View>
            <View style={styles.sectionHeader}>
              <Text
                style={{
                  margin: 20,
                  marginLeft: 10,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi
                quisquam praesentium, ducimus in recusandae!
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: Colors.WHITE,
                borderColor: "Black",
                borderWidth: 1,
                paddingHorizontal: 16,
                borderRadius: 8,
                marginTop: 10,
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                width: "80%",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.BLACK,
                  fontWeight: "bold",
                }}
              >
                Choose Destination
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: Colors.WHITE,
                borderColor: "Black",
                borderWidth: 1,
                paddingHorizontal: 16,
                borderRadius: 8,
                marginTop: 10,
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                width: "80%",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.BLACK,
                  fontWeight: "bold",
                }}
              >
                Tell me about the new countries
              </Text>
            </TouchableOpacity>
          </View>

          {/* ChALlenges And INSights */}
          <View>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}> Challenges and Insights</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <Image
              style={styles.card}
              source={require("../../assets/images/yatch2.png")}
            ></Image>
            <Image
              style={styles.card}
              source={require("../../assets/images/yatch.png")}
            ></Image>
          </View>

          {/* Black CHeck */}

          <View style={styles.badgeContainer}>
            <Check />
            <Text style={styles.badgeText}>
              Checked by our viewers for your satisfaction
            </Text>
          </View>

          {/* CHEcked Boats */}

          <View>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Checked Boats</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>

            {checkedBoats.map((boat) => (
              <View key={boat.id} style={styles.boatCard}>
                <Image source={boat.image} style={styles.boatImage} />
                <View style={styles.boatDetails}>
                  <Text style={styles.boatTitle}>{boat.name}</Text>
                  <Text style={styles.boatRating}>
                    ⭐ {boat.rating} · {boat.location}
                  </Text>
                  <Text style={styles.boatCabins}>{boat.cabins}</Text>
                  <Text style={styles.boatPrice}>{boat.price}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* SUpport Content */}
          <View style={styles.container}>
            <Text style={styles.heading}>Support</Text>
            <Text style={styles.subText}>For Renters</Text>

            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Payments</Text>
              <Text style={styles.subText}>How to pay rent</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Cancellation Options</Text>
              <Text style={styles.subText}>Learn what’s covered</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Help Centre</Text>
              <Text style={styles.subText}>Get in touch</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

// 126

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 30,
    backgroundColor: Colors.PRIMARY,
  },
  headerText: {
    fontSize: 18,
    color: Colors.WHITE,
  },
  searchContainer: {
    backgroundColor: Colors.PRIMARY,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: Colors.WHITE,
    borderRadius: 50,
    margin: 15,
    marginLeft: 40,
    marginRight: 40,
    padding: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {

    marginLeft: 10,
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    color: Colors.PRIMARY,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  cardImage: {
    width: "100%",
    height: 400,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "gray",
    marginHorizontal: 10,
    fontFamily: "outfit-regular",
  },
  exploreButton: {
    flexDirection: "row",
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  exploreText: {
    color: Colors.WHITE,
    fontSize: 16,
    marginHorizontal: 5,
  },

  boatCard: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  boatImage: {
    width: 80,
    height: 80,
  },
  boatDetails: {
    marginLeft: 10,
    flex: 1,
    paddingHorizontal: 10,
  },
  boatTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  boatRating: {
    fontSize: 14,
    color: "gray",
  },
  boatCabins: {
    fontSize: 14,
    color: "gray",
  },
  boatPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },

  container: {
    padding: 50,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "600",
  },
  subText: {
    fontSize: 14,
    color: "gray",
    marginTop: 4,
  },
  fixedBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },

  bottomImage: {
    width: 1000,
    height: 80,
    resizeMode: "contain",
  },

  badgeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    padding: 20,
    margin: 30,
    borderRadius: 15,
  },
  badgeText: {
    color: "white",
    fontSize: 14,
    marginLeft: 8,
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
});
