import React from "react"
import { Path, Svg } from "react-native-svg"

const DashboardSvg = ({ width, height }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M1.08032 7.92857L8.93747 1.5L16.7946 7.92857"
        stroke="#00EACB"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.22314 9.35718V16.5H14.6517V9.35718"
        stroke="#00EACB"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.9375 9.5C9.48978 9.5 9.9375 9.05228 9.9375 8.5C9.9375 7.94772 9.48978 7.5 8.9375 7.5C8.38522 7.5 7.9375 7.94772 7.9375 8.5C7.9375 9.05228 8.38522 9.5 8.9375 9.5Z"
        stroke="#00EACB"
        stroke-width="1.5"
      />
      <Path
        d="M8.9375 11.5C7.98178 11.5 7.17831 12.1372 6.95056 12.9996C6.88367 13.2528 7.08228 13.5 7.35025 13.5H10.5248C10.7927 13.5 10.9913 13.2524 10.9244 12.9996C10.6963 12.1372 9.89322 11.5 8.9375 11.5Z"
        stroke="#00EACB"
        stroke-width="1.5"
      />
    </Svg>
  )
}

export default DashboardSvg
