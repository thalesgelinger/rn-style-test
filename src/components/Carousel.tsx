import { FlatList, View, Image, Dimensions, Text, TouchableOpacity, StyleSheet } from "react-native"
import img1 from "../../assets/images/img-1.jpg"
import img2 from "../../assets/images/img-2.png"
import img3 from "../../assets/images/img-3.png"
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const ITEM_WIDTH = width * 0.92;
const ITEM_HEIGHT = height * 0.60
const ITEM_SPACING = 10;

const DATA = [
    { id: "1", image: img1, title: "Harvest", description: "Bold design meets timeless beauty" },
    { id: "2", image: img2, title: "Stoneworks", description: "Bold design meets timeless beauty" },
    { id: "3", image: img3, title: "Alabaster", description: "Bold design meets timeless beauty" },
];


export const Carousel = () => {
    return (
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
                        minHeight: 432,
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
                            <TouchableOpacity
                                style={{
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

    )
}
