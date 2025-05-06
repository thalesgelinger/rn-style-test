import { Dimensions, FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import img1 from "../assets/img-1.jpg"
import img2 from "../assets/img-2.png"
import img3 from "../assets/img-3.png"
import georgia from "../assets/georgia.png"
import { Home } from "../components/icons/Home";
import { Magic } from "../components/icons/Magic";
import { Menu } from "../components/icons/Menu";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient"
import Texture from "../components/Texture";

const { width, height } = Dimensions.get("window");

const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = height * 0.55
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
            <View style={{ alignItems: "flex-end", marginRight: 24, marginBottom: 24, marginTop: 40 }}>
                <Menu height={18} width={18} />
            </View>
            <View style={{ flexDirection: "row", }}>

                <View style={{
                    position: 'relative',
                    width: 64,
                    height: 64,
                    marginBottom: 24,
                    marginLeft: 12,
                    borderRadius: 16,
                    overflow: 'hidden',
                    backgroundColor: 'transparent'
                }}>
                    <BlurView
                        intensity={10}
                        tint="light"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: 16
                        }}
                    />


                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 8
                    }}>
                        <Image
                            source={georgia}
                            style={{
                                width: 48,
                                height: 48,
                                borderRadius: 12
                            }}
                        />
                    </View>
                </View>

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
                        {Array.from({ length: 20 }).map((_, i) =>
                            <View key={i} style={{ width: "100%", flexDirection: "row", justifyContent: "space-around" }}>
                                <Text> BRANDS </Text>
                                <Text> BRANDS </Text>
                                <Text> BRANDS </Text>
                                <Text> BRANDS </Text>
                            </View>
                        )}
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
                    position: "absolute",
                    bottom: 30,
                    borderRadius: 999,
                    left: width / 2 - (132 / 2),
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <TouchableOpacity style={{
                    backgroundColor: "#31312B",
                    height: 40,
                    width: 50,
                    borderRadius: 999,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Home height={18} width={18} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: "#1D1C19",
                    height: 40,
                    width: 50,
                    borderRadius: 999,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Magic height={28} width={28} />
                </TouchableOpacity>
            </View>

        </View>
    );
}


