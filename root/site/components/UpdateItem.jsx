import React from "react";

export default function(props) {
  return (
    <li className="mv3 lh-copy f7">
      <time className="b pr2 f7" dateTime={ props.date }>{ props.date }</time>
      <span role="img" aria-label={ props.iconName }>{ props.icon }</span>
      <div className="f7">
        { props.children }
      </div>
    </li>
  )
}
