import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

const Navigation = () => {
  const navItems = ["Trending", "Popular", "Following"];
  const [selected, setSelected] = useState(0);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 27,
      }}
    >
      {navItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            backgroundColor: selected === index ? "#CFFF11" : "#7B7B7B",
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 90,
          }}
          onPress={() => setSelected(index)}
        >
          <Text
            style={{
              color: selected === index ? "#000000" : "#ffffff",
              fontSize: 12,
              lineHeight: 18,
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Navigation;
