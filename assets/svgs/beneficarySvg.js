import React from "react"
import { Path, Rect, Svg } from "react-native-svg"
const BeneficarySvg = () => {
  return (
    <Svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x="4"
        y="4"
        width="48"
        height="48"
        rx="24"
        fill="white"
        fill-opacity="0.1"
      />
      <Rect
        x="4"
        y="4"
        width="48"
        height="48"
        rx="24"
        stroke="#FBF0F2"
        stroke-opacity="0.1"
        stroke-width="8"
      />
      <Path
        d="M37 37L32.65 32.65M35 27C35 31.4183 31.4183 35 27 35C22.5817 35 19 31.4183 19 27C19 22.5817 22.5817 19 27 19C31.4183 19 35 22.5817 35 27Z"
        stroke="#00EACB"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default BeneficarySvg
