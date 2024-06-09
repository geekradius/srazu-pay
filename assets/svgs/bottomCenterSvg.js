import React from "react"
import { Path, Rect, Svg } from "react-native-svg"

const BottomCenterSvg = () => {
  return (
    <Svg
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x="37"
        y="0.9375"
        width="51"
        height="51"
        rx="14"
        transform="rotate(45 37 0.9375)"
        fill="#00EACB"
      />
      <Path
        d="M37 42.4375L37 26.9375"
        stroke="#011932"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M43 32.9375L37 26.9375L31 32.9375"
        stroke="#011932"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M43 46.9375L31 46.9375"
        stroke="#011932"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default BottomCenterSvg
