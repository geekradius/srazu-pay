import React from "react"
import { Circle, G, Svg } from "react-native-svg"

const CameraSvg = () => {
  return (
    <Svg
      width="64"
      height="65"
      viewBox="0 0 64 65"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
    >
      <G opacity="0.5">
        <Circle cx="32" cy="32.2002" r="29.5" stroke="white" stroke-width="5" />
        <Circle cx="32" cy="32" r="25" fill="white" />
      </G>
    </Svg>
  )
}

export default CameraSvg
