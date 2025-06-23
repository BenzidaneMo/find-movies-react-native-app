import { Image, Text, View } from "react-native";
import HeroBanner from "../components/HeroBanner";

const logo = require('../assets/images/logo.png');

export default function Index() {
  return (
    <View className="relative h-full bg-primary">
      <HeroBanner />
      <View className="m-12 items-center"><Image source={logo} className="w-20 h-20"
                resizeMode="contain"/></View>
      <Text className="text-light-100 font-bold text-2xl">Edit.</Text>
    </View>
  );
}
