import { Stack } from "expo-router";
import { Image } from "react-native";

export default function RootLayout() {
  return (
    <Stack 
      screenOptions={{
        headerTitle: "LazCalculator",
        headerLeft: () => 
          <Image 
            source={require("../assets/images/Laz.png")} 
            style={{ width: 30, height: 30, marginLeft: 10 }} />
      }}
    />
  );
}
