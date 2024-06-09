import React from "react"
import { Circle, Path, Svg } from "react-native-svg"

const SuccessfulSvg = () => {
  return (
    <Svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="32" cy="32" r="30" stroke="#00EACB" stroke-width="3.75" />
      <Path
        d="M43.25 24.5L27.7812 39.5L20.75 32.6818"
        stroke="#00EACB"
        stroke-width="3.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default SuccessfulSvg
