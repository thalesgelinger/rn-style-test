import React from 'react'
import { View, Image, Text } from 'react-native'
import georgia from "../../assets/images/georgia.png"
import { Menu } from './icons/Menu'

export const Header = () => {
    return (
        <>
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
        </>

    )
}
