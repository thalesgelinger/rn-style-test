
import React from 'react'
import { Dimensions, TouchableOpacity, View } from 'react-native'
import { Home } from "./icons/Home";
import { Magic } from "./icons/Magic";

const { width } = Dimensions.get("window");

export const Actions = () => {
    return (
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
    )
}
