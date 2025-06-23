import { Image, View } from 'react-native';
const heroImage = require('../assets/images/bg.webp');

export default function HeroBanner() {
    return (
        <View className="absolute top-0 left-0 z-0 w-full">
            <Image source={heroImage}
                className="w-full h-fit object-cover"
                resizeMode="cover"/>
        </View>
    )
}
