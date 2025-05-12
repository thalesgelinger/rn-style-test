import { StyleSheet, View } from "react-native";
import Texture from "../components/Texture";
import { Carousel } from "../components/Carousel";
import { Brands } from "../components/Brands";
import { Actions } from "../components/Actions";
import { Header } from "../components/Header";

export default function Index() {
    return (
        <View style={StyleSheet.absoluteFillObject}>
            <Texture />

            <Header />

            <Carousel />

            <Brands />

            <Actions />
        </View>
    );
}


