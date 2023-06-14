import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./screens/Splash";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Details from "./screens/Details";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    SpaceGroteskBold: require("./assets/fonts/SpaceGrotesk-Bold.ttf"),
    SpaceGroteskSemiBold: require("./assets/fonts/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskMedium: require("./assets/fonts/SpaceGrotesk-Medium.ttf"),
    SpaceGroteskRegular: require("./assets/fonts/SpaceGrotesk-Regular.ttf"),
    SpaceGroteskLight: require("./assets/fonts/SpaceGrotesk-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Details" component={Details}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
