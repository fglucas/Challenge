import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={23}
      height={13}
      fill="none"
      style={{
        marginLeft: props.cadastro ? 0 : 5,
        marginRight: props.cadastro ? 5 : 0,
        marginTop: 5,
        transform: [
          { rotate: props.cadastro ? "180deg" : "0deg"}
        ]
      }}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.958 5.85h19.119l-7.321-4.73c-.383-.247-.398-.658-.033-.918.364-.26.971-.27 1.355-.023l8.36 5.402c.362.245.562.572.562.92 0 .346-.2.673-.578.93l-8.345 5.39c-.185.12-.423.179-.66.179-.253 0-.506-.068-.695-.202-.365-.26-.35-.67.033-.919l7.352-4.729H.958C.43 7.15 0 6.86 0 6.5c0-.359.43-.65.958-.65z"
        fill="#40330C"
      />
    </Svg>
  )
}

export default SvgComponent
