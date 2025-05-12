import { StatusBar, StyleSheet, View } from "react-native";
import Texture from "../components/Texture";
import { Carousel } from "../components/Carousel";
import { Brands } from "../components/Brands";
import { Actions } from "../components/Actions";
import { Header } from "../components/Header";

export default function Index() {
    return (
        <View style={StyleSheet.absoluteFillObject}>
            <StatusBar barStyle="dark-content" />
            <Texture />

            <Header />

            <Carousel />

            <View style={{ flex: 8, position: "relative" }}>
                <Brands />
                <View style={[StyleSheet.absoluteFill, { alignItems: "center", justifyContent: "center" }]}>
                    <Actions />
                </View>
            </View>

        </View>
    );
}


