import React from "react"
import { Circle, Rect, Svg } from "react-native-svg"

const MoreSvg = () => {
  return (
    <Svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x="0.5"
        y="0.5"
        width="26"
        height="26"
        rx="13"
        fill="white"
        fill-opacity="0.3"
      />
      <Circle cx="8.5" cy="13.5" r="1.5" fill="#03FFDE" />
      <Circle cx="13.5" cy="13.5" r="1.5" fill="#03FFDE" />
      <Circle cx="18.5" cy="13.5" r="1.5" fill="#03FFDE" />
    </Svg>
  )
}

export default MoreSvg
