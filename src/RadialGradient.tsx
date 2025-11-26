import React from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import Svg, {
  Defs,
  RadialGradient as SVGRadialGradient,
  Rect,
  Stop,
} from 'react-native-svg';

export interface RadialGradientProps {
  style?: ViewStyle;
  colors: string[];
  stops?: number[];
  center?: [string, string];
  radius?: [string, string];
}

export const RadialGradient: React.FC<RadialGradientProps> = ({
  style,
  colors,
  stops,
  center = ['50%', '50%'],
  radius = ['50%', '50%'],
}) => {
  const [cx, cy] = center;
  const [rx, ry] = radius;

  const gradientStops =
    stops || colors.map((_, index) => index / (colors.length - 1));

  return (
    <View style={[styles.container, style]}>
      <Svg height="100%" width="100%">
        <Defs>
          <SVGRadialGradient
            id="grad"
            cx={`${cx}`}
            cy={`${cy}`}
            rx={`${rx}`}
            ry={`${ry}`}
            fx={`${cx}`}
            fy={`${cy}`}
            gradientUnits="userSpaceOnUse"
          >
            {colors.map((color, index) => (
              <Stop
                key={index}
                offset={`${(gradientStops[index] ?? 0) * 100}%`}
                stopColor={color}
                stopOpacity="1"
              />
            ))}
          </SVGRadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});
