import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { NFTData, assets } from "../constants";
import { useState } from "react";
import React from "react";
import Bell from "../assets/bell.svg";
import Settings from "../assets/settings.svg";
import ProfilePic from "../assets/profile.svg";
import EthLogo from "../assets/logoeth.svg";
import Search from "../assets/search.svg";
import Microphone from "../assets/microphone.svg";
import Nftcard from "../components/Nftcard";
import Navigation from "../components/Navigation";

const Home = () => {
  const [data, setData] = useState(NFTData);

  const handleSearch = (value) => {
    if (!value.length) return setData(NFTData);

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setData(filteredData);
    } else {
      setData(NFTData);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1E1E1E" }}>
      <ScrollView>
        <FocusedStatusBar />
        <View style={{ flex: 1 }}>
          <React.Fragment>
            <View
              style={{
                // width: "100%",
                flex: 1,
                paddingHorizontal: 30,
                paddingVertical: 45,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: 140,
                    height: 51,
                    borderRadius: 90,
                    backgroundColor: "#000000",
                    alignItems: "center",
                    paddingHorizontal: 4,
                  }}
                >
                  <View
                    style={{
                      height: 43,
                      width: 43,
                      borderRadius: 179,
                      backgroundColor: "#ffffff",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <EthLogo />
                  </View>
                  <Text
                    style={{
                      color: "#ffffff",
                      fontFamily: "SpaceGroteskBold",
                      fontSize: 15,
                      lineHeight: 19,
                      paddingHorizontal: 13,
                    }}
                  >
                    90.02
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Bell />
                  <Settings />

                  <ProfilePic />
                </View>
              </View>
              <Text
                style={{
                  marginTop: 40,
                  fontFamily: "SpaceGroteskBold",
                  fontSize: 29,
                  lineHeight: 37,
                  color: "#ffffff",
                }}
              >
                Explore the Most Popular NFTs 🔥
              </Text>
              <View
                style={{
                  marginTop: 36,
                  backgroundColor: "#7B7B7B",
                  borderRadius: 90,
                  height: 44,
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingHorizontal: 20,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Search />
                  <TextInput
                    placeholder="Search Nft or artist name.."
                    style={{
                      paddingLeft: 4,
                      color: "#ffffff",
                    }}
                    onChangeText={handleSearch}
                  />
                </View>
                <Microphone />
              </View>

              <Navigation />
            </View>
          </React.Fragment>

          <View
            style={{
              flexDirection: "row",
              flex: 1,
              flexWrap: "wrap",
              paddingHorizontal: 30,
              gap: 20,
              paddingBottom: 45,
            }}
          >
            {data.map((item) => (
              <View key={item.id}>
                <Nftcard item={item} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
