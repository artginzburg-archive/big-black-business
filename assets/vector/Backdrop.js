import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useTheme } from "../../hooks";

export default function Backdrop(props) {
  const { palette } = useTheme();

  return (
    <Svg {...props} width='100%' height='100%' viewBox='0 0 1080 627'>
      <G>
        <Path
          fill={palette.primary.main}
          d='M1080,440.73c-57.07,44.65-254.38,187.62-544.1,186.26C251.24,625.66,57.67,485.85,0,440.73V0
		  c360,0,720,0,1080,0V440.73z'
        />
      </G>
    </Svg>
  );
}
