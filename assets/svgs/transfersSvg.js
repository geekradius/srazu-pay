import React from "react"
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg"

const TransfersSvg = ({ width, height }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-Path="url(#clip0_1498_5262)">
        <Path
          d="M4.4999 1.90625L1.55347 4.71875L4.4999 7.53125"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M13.3392 4.71875H1.55347"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M11.375 8.46875L14.3214 11.2812L11.375 14.0938"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M2.53564 11.2812H14.3214"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1498_5262">
          <Rect
            width="15.7143"
            height="15"
            fill="white"
            transform="translate(0.0803223 0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default TransfersSvg
