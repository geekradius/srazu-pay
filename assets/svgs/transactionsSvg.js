import React from "react"
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg"

const TransactionsSvg = () => {
  return (
    <Svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x="0.5"
        y="0.5"
        width="34"
        height="34"
        rx="17"
        fill="#D9D9D9"
        fill-opacity="0.3"
      />
      <G clip-path="url(#clip0_949_13960)">
        <Path
          d="M13.5 16.5V20H15V16.5H13.5ZM16.5 16.5V20H18V16.5H16.5ZM12.5 22.5H22V21H12.5V22.5ZM19.5 16.5V20H21V16.5H19.5ZM17.25 12L12.5 14.5V15.5H22V14.5L17.25 12Z"
          fill="#00EACB"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_949_13960">
          <Rect
            width="12"
            height="12"
            fill="white"
            transform="translate(11.5 11.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default TransactionsSvg
