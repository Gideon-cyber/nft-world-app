import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ape1 from "../assets/Ape1.webp";
import Ape1L from "../assets/Ape1L.png";
import Ape2L from "../assets/Ape2L.png";
import Ape3L from "../assets/Ape3L.png";
import Ape4L from "../assets/Ape4L.png";
import Ape5L from "../assets/Ape5L.png";
import BackBtn from "../assets/backbtn.svg";
import ProfilePic from "../assets/ProfilePic.svg";
import { getRGBColor } from "../utils";
import Bid from "../assets/bid-big.svg";
import EthLogo from "../assets/logoeth.svg";
import Dp from "../assets/dp.jpg";
import Owner from "../assets/owner1.svg";
import Verified from "../assets/verified.svg";

const Details = ({ route, navigation }) => {
  const { item } = route.params;

  const imagePicker = (imageId) => {
    switch (imageId) {
      case "NFT-01":
        return Ape1L;
      case "NFT-02":
        return Ape2L;
      case "NFT-03":
        return Ape3L;
      case "NFT-04":
        return Ape4L;
      case "NFT-05":
        return Ape5L;
      default:
        return Ape1L;
    }
  };

  const colorPicker = (imageId) => {
    switch (imageId) {
      case "NFT-01":
        return "#401C03";
      case "NFT-02":
        return "#273360";
      case "NFT-03":
        return "EB3A96";
      case "NFT-04":
        return "#AC9E1E";
      case "NFT-05":
        return "#76CDD7";
      default:
        return "#401C03";
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image
        source={imagePicker(item.id)}
        style={{
          flex: 1,
          resizeMode: "cover", // or 'stretch' if you want the image to stretch to fill the entire background
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        alt="background"
      />

      <View
        style={{
          flex: 1,
          paddingTop: 20,
          paddingHorizontal: 35,
          paddingBottom: 26,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 35,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: "#F2F2F2",
              height: 86,
              width: 64,
              borderRadius: 90,
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 10,
            }}
          >
            <BackBtn />
          </TouchableOpacity>

          <View>
            <ProfilePic />
          </View>
        </View>

        <View
          style={{
            paddingLeft: 3,
            marginBottom: 50,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "SpaceGroteskSemiBold",
              fontSize: 38,
              lineHeight: 49,
              textAlign: "right",
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "SpaceGroteskSemiBold",
              fontSize: 38,
              lineHeight: 49,
              textAlign: "right",
            }}
          >
            {item.hash}
          </Text>
        </View>

        <View
          style={{
            gap: 17,
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: `${getRGBColor(colorPicker(item.id), 1)}`,
              height: 68,
              width: 46,
              borderRadius: 90,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "SpaceGroteskSemiBold",
                fontSize: 23,
                lineHeight: 29,
              }}
            >
              {item?.time?.days}
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "SpaceGroteskMedium",
                fontSize: 10,
                lineHeight: 13,
              }}
            >
              days
            </Text>
          </View>
          <View
            style={{
              backgroundColor: `${getRGBColor(colorPicker(item.id), 1)}`,
              height: 68,
              width: 46,
              borderRadius: 90,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "SpaceGroteskSemiBold",
                fontSize: 23,
                lineHeight: 29,
              }}
            >
              {item.time.hours}
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "SpaceGroteskMedium",
                fontSize: 10,
                lineHeight: 13,
              }}
            >
              hours
            </Text>
          </View>

          {/*Mins*/}
          <View
            style={{
              alignItems: "flex-start",
              width: "100%",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "50%",
              }}
            >
              <View
                style={{
                  backgroundColor: `${getRGBColor(colorPicker(item.id), 1)}`,
                  height: 192,
                  width: 123,
                  borderRadius: 200,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    height: 67,
                    width: 67,
                    borderRadius: 200,
                    backgroundColor: `${getRGBColor("#F8FEB4", 0.5)}`,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <EthLogo />
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "SpaceGroteskSemiBold",
                      fontSize: 53,
                      lineHeight: 69,
                    }}
                  >
                    {item.highestBid}
                  </Text>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "SpaceGroteskSemiBold",
                      fontSize: 11,
                      lineHeight: 14,
                    }}
                  >
                    Highest Bid
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                alignItems: "flex-end",
                justifyContent: "flex-end",
                width: "50%",
                gap: 20,
              }}
            >
              <View
                style={{
                  backgroundColor: `${getRGBColor(colorPicker(item.id), 1)}`,
                  height: 68,
                  width: 46,
                  borderRadius: 90,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "SpaceGroteskSemiBold",
                    fontSize: 23,
                    lineHeight: 29,
                  }}
                >
                  {item.time.mins}
                </Text>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "SpaceGroteskMedium",
                    fontSize: 10,
                    lineHeight: 13,
                  }}
                >
                  mins
                </Text>
              </View>

              <View
                style={{
                  paddingVertical: 20,
                  paddingHorizontal: 15,
                  backgroundColor: `${getRGBColor(colorPicker(item.id), 1)}`,
                  gap: 3,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 101,
                  height: 96,
                  width: 150,
                  shadowColor: "#fff",
                  shadowOffset: 10,
                  shadowOpacity: 0.5,
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "SpaceGroteskSemiBold",
                      fontSize: 9,
                      lineHeight: 12,
                    }}
                  >
                    Owner
                  </Text>
                </View>
                <View
                  style={{
                    borderRadius: 101,
                    height: 34,
                    width: 34,
                    // overflow: "hidden",
                  }}
                >
                  <Owner />
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "SpaceGroteskSemiBold",
                      fontSize: 11,
                      lineHeight: 14,
                    }}
                  >
                    {item.owner.name}
                  </Text>
                  <Verified />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 30,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: `${getRGBColor("#64725D", 0.7)}`,
              height: 61.9,
              width: "100%",
              marginBottom: 20,
              borderRadius: 100,
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 5,
                right: 5,
                width: 50,
                height: 50,
                borderRadius: 200,
                backgroundColor: "#FFFFFF",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Bid />
            </View>
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "SpaceGroteskBold",
                fontSize: 18,
                lineHeight: 23,
              }}
            >
              Place Bid
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Details;
