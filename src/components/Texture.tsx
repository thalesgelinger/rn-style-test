import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import bgTexture from "../assets/bg-texture.png"

export default function Texture() {
    const textureSize = 600;
    const { width, height } = Dimensions.get('window');

    const horizontalTiles = Math.ceil(width / textureSize);
    const verticalTiles = Math.ceil(height / textureSize);

    const rows = Array(verticalTiles).fill(0);
    const columns = Array(horizontalTiles).fill(0);

    return (
        <View style={[StyleSheet.absoluteFillObject, {
            overflow: 'hidden'
        }]}>
            {rows.map((_, rowIndex) => (
                <View key={`row-${rowIndex}`} style={{ flexDirection: 'row' }}>
                    {columns.map((_, colIndex) => (
                        <Image
                            key={`tile-${rowIndex}-${colIndex}`}
                            source={bgTexture}
                            style={{
                                width: textureSize,
                                height: textureSize
                            }}
                            resizeMode="cover"
                        />
                    ))}
                </View>
            ))}
        </View>
    );
}
