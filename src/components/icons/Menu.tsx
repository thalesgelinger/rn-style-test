import * as React from "react";
import Svg, { SvgProps, Rect } from "react-native-svg";

export const Menu = (props: SvgProps) => (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
        <Rect
            x={7.5}
            y={10.5}
            width={3}
            height={3}
            rx={1.5}
            transform="rotate(-90 7.5 10.5)"
            fill="#31312B"
        />
        <Rect
            x={1.5}
            y={10.5}
            width={3}
            height={3}
            rx={1.5}
            transform="rotate(-90 1.5 10.5)"
            fill="#31312B"
        />
        <Rect
            x={13.5}
            y={10.5}
            width={3}
            height={3}
            rx={1.5}
            transform="rotate(-90 13.5 10.5)"
            fill="#31312B"
        />
    </Svg>
);

