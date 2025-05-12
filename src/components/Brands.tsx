import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import kohlerLogo from "../../assets/images/Kohler-logo.png"
import jmvLogo from "../../assets/images/JMV-logo.png"
import totoLogo from "../../assets/images/Toto-logo.png"

export const Brands = () => {
    return (
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
    )
}
