import {
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  View,
} from "react-native";
import React from "react";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { useNavigation } from "@react-navigation/native";
import { assets } from "../constants";
import Monkeys from "../assets/monkeys.svg";

const Splash = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#1E1E1E" }}>
      <FocusedStatusBar />
      <View style={{ justifyContent: "space-between", paddingTop: 45 }}>
        <Text
          style={{
            color: "#fff",
            fontFamily: "SpaceGroteskRegular",
            textAlign: "center",
            fontSize: 44.27,
            lineHeight: 56.49,
            paddingTop: 20,
            paddingHorizontal: 20,
          }}
        >
          Discover{" "}
          <Text style={{ fontFamily: "SpaceGroteskBold" }}>
            Rare Collections
          </Text>{" "}
          of{" "}
          <Text
            style={{
              color: "#CFFF11",
              fontFamily: "SpaceGroteskBold",
            }}
          >
            NFTs
          </Text>
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <View style={{ width: "100%" }}>
            <Monkeys height="90%" width="100%" />
          </View>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Image source={assets.Monkey} resizeMode="contain" />
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default Splash;
