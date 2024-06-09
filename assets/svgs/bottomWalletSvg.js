import React from "react"
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg"

const BottomWalletSvg = () => {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-Path="url(#clip0_1498_5279)">
        <Path
          d="M13.9553 7.99969V4.25H2.16963C1.44645 4.25 0.860107 3.69031 0.860107 3V12.375C0.860107 13.4106 1.73945 14.25 2.82439 14.25H13.9553V10.5"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M11.3363 2.6875V1.75H2.16963C1.44645 1.75 0.860107 2.30969 0.860107 3C0.860107 3.69031 1.44645 4.25 2.16963 4.25"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.265 10.5H12.3186C11.5954 10.5 11.009 9.94031 11.009 9.25C11.009 8.55969 11.5954 8 12.3186 8H15.265V10.5Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1498_5279">
          <Rect
            width="15.7143"
            height="15"
            fill="white"
            transform="translate(0.205322 0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default BottomWalletSvg
