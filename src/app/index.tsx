import { Dimensions, FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import img1 from "../../assets/images/img-1.jpg"
import img2 from "../../assets/images/img-2.png"
import img3 from "../../assets/images/img-3.png"
import georgia from "../../assets/images/georgia.png"
import { Home } from "../components/icons/Home";
import { Magic } from "../components/icons/Magic";
import { Menu } from "../components/icons/Menu";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient"
import Texture from "../components/Texture";
import kohlerLogo from "../../assets/images/Kohler-logo.png"
import jmvLogo from "../../assets/images/JMV-logo.png"
import totoLogo from "../../assets/images/Toto-logo.png"

const { width, height } = Dimensions.get("window");

const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = height * 0.65
const ITEM_SPACING = 10;

const DATA = [
    { id: "1", image: img1, title: "Harvest", description: "Bold design meets timeless beauty" },
    { id: "2", image: img2, title: "Stoneworks", description: "Bold design meets timeless beauty" },
    { id: "3", image: img3, title: "Alabaster", description: "Bold design meets timeless beauty" },
];

export default function Index() {
    return (
        <View style={{ ...StyleSheet.absoluteFillObject }}>
            <Texture />
            <View style={{ alignItems: "flex-end", marginRight: 24, marginBottom: 24, marginTop: 48 }}>
                <Menu height={18} width={18} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 36 }}>
                <Image
                    source={georgia}
                    style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        marginLeft: 24,
                        marginRight: 8
                    }}
                />

                <View style={{ marginLeft: 8 }}>
                    <Text style={{ color: "#848280", fontSize: 24 }}>Georgia</Text>
                    <Text style={{ color: "#1D1C19", fontSize: 24 }}>Let’s start designing</Text>
                </View>
            </View>

            <FlatList
                data={DATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                        style={{
                            position: "relative",
                            height: ITEM_HEIGHT,
                            width: ITEM_WIDTH,
                            justifyContent: "flex-end",
                            alignItems: "flex-start",
                            borderRadius: 10,
                        }}
                    >
                        <Image
                            source={item.image}
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                                resizeMode: "cover"
                            }}
                        />
                        <LinearGradient
                            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.3)']}
                            style={[StyleSheet.absoluteFill, { flex: 1 }]}
                        />
                        <View style={{ padding: 24 }}>
                            <Text style={{ color: "#FFFFFF", fontSize: 32, marginBottom: 12 }}>{item.title}</Text>
                            <Text style={{ color: "#FFFFFF", fontSize: 16, marginBottom: 24 }}>{item.description}</Text>
                            <View style={{ flexDirection: "row", gap: 10 }}>
                                <TouchableOpacity style={{
                                    backgroundColor: "#F1F0ED",
                                    paddingHorizontal: 14,
                                    paddingVertical: 13,
                                    borderRadius: 999
                                }}>
                                    <Text style={{ fontSize: 13 }}>Apply to my room</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    paddingHorizontal: 14,
                                    paddingVertical: 13,
                                    borderRadius: 999,
                                    borderWidth: 1,
                                    borderColor: "#FFFFFF",
                                }}>
                                    <Text style={{ fontSize: 13, color: "#FFFFFF" }}>Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                snapToInterval={ITEM_WIDTH + ITEM_SPACING}
                snapToAlignment="start"
                decelerationRate="fast"
            />

            <View
                style={{ flex: 8, alignItems: "center", justifyContent: "center" }}
            >
                <View style={StyleSheet.absoluteFill}>
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <Text style={{ color: "#31312B", textAlign: "center", fontSize: 16, marginTop: 40, marginBottom: 24 }}>
                            <Text style={{ color: "#848280" }}>Featuring the </Text> Industries Top Brands
                        </Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <Image
                                source={kohlerLogo}
                                style={{
                                    tintColor: "black",
                                    resizeMode: "contain"
                                }}
                            />
                            <Image
                                source={jmvLogo}
                                style={{
                                    tintColor: "black",
                                    resizeMode: "contain"
                                }}
                            />
                            <Image
                                source={totoLogo}
                                style={{
                                    tintColor: "black",
                                    resizeMode: "contain"
                                }}
                            />
                        </View>
                    </View>
                </View>

                <LinearGradient
                    colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,1)']}
                    style={[StyleSheet.absoluteFill, { flex: 1 }]}
                />
            </View>

            <View
                style={{
                    backgroundColor: "#1D1C19",
                    height: 52,
                    width: 132,
                    padding: 6,
                    position: "absolute",
                    bottom: 50,
                    borderRadius: 999,
                    left: width / 2 - (132 / 2),
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <TouchableOpacity style={{
                    backgroundColor: "#31312B",
                    height: "100%",
                    flex: 1,
                    borderRadius: 999,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Home height={18} width={18} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: "#1D1C19",
                    height: "100%",
                    flex: 1,
                    borderRadius: 999,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Magic height={28} width={28} color="#777775" />
                </TouchableOpacity>
            </View>

        </View>
    );
}


