import React from "react";

export default function(props) {
  const date = new Date(props.date)
  const formattedDate = date.toLocaleDateString("en-US", {  month: "short", day: "numeric", year: "numeric" })

  return (
    <li className="mv3 lh-copy">
      <time className="b pr2" dateTime={ props.date }>{ formattedDate }</time>
      <span role="img" aria-label={ props.iconName }>{ props.icon }</span>
      { props.children }
    </li>
  )
}
