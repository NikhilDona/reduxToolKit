import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function HexIcon(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 132 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_dd_75_3120)">
        <Path
          d="M101.612 100.75c0 3.821-2.177 7.307-5.609 8.985l-16.612 8.119a10.002 10.002 0 01-8.782 0l-16.611-8.119a10 10 0 01-5.61-8.985V78.638a10 10 0 015.529-8.944l16.611-8.306a10 10 0 018.944 0l16.612 8.306a10 10 0 015.528 8.944v22.112z"
          fill="#00AD9A"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M75 96.326a.75.75 0 01-.75-.75v-5.25H69a.75.75 0 010-1.5h5.25v-5.25a.75.75 0 011.5 0v5.25H81a.75.75 0 010 1.5h-5.25v5.25a.75.75 0 01-.75.75z"
          fill="#fff"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default HexIcon;
