import React from "react"

type StyleCompItemProps = {
  style: React.CSSProperties,
}
const StyleCompItem = (props: StyleCompItemProps) => {
  return (
    <div style={props.style}>StyleCompItem</div>
  )
}

export default StyleCompItem