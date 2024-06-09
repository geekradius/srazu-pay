import React from "react"
import { Circle, Path, Svg } from "react-native-svg"

const CheckSvg = () => {
  return (
    <Svg
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
    >
      <Circle cx="37" cy="37" r="35" stroke="#00EACB" stroke-width="3.75" />
      <Path
        d="M48.25 29.5L32.7812 44.5L25.75 37.6818"
        stroke="#00EACB"
        stroke-width="3.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default CheckSvg
