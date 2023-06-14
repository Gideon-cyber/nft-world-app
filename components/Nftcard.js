import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ape1 from "../assets/Ape1.svg";
import Ape2 from "../assets/Ape2.svg";
import Ape3 from "../assets/Ape3.svg";
import Ape4 from "../assets/Ape4.svg";
import Ape5 from "../assets/Ape5.svg";
import Bid from "../assets/bid.svg";

const Nftcard = ({ item }) => {
  const imagePicker = (imageId) => {
    switch (imageId) {
      case "NFT-01":
        return <Ape1 />;
      case "NFT-02":
        return <Ape2 />;
      case "NFT-03":
        return <Ape3 />;
      case "NFT-04":
        return <Ape4 />;
      case "NFT-05":
        return <Ape5 />;
      default:
        return <Ape1 />;
    }
  };
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", { item })}>
      <Image
        source={item.image}
        style={{
          width: 133,
          height: 178,
          borderRadius: 20,
        }}
      />
      {/* {imagePicker(item.id)} */}

      <View
        style={{
          position: "absolute",
          bottom: 10,
          left: 0,
          right: 0,
          paddingHorizontal: 8,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontFamily: "SpaceGroteskBold",
            fontSize: 14.6,
            lineHeight: 19,
            paddingLeft: 3,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            color: "#FFFFFF",
            fontFamily: "SpaceGroteskBold",
            fontSize: 14.6,
            lineHeight: 19,
            paddingLeft: 3,
          }}
        >
          {item.hash}
        </Text>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: 66.51,
              height: 23.01,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(237, 237, 237, 0.3)",
              borderRadius: 58.4,
              marginTop: 4,
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 7.8,
                lineHeight: 14,
              }}
            >
              Price {item.highestBid}ETH
            </Text>
          </View>

          <View
            style={{
              width: 27.8,
              height: 27.8,
              backgroundColor: "#ffffff",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 17.8,
            }}
          >
            <Bid />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Nftcard;
