import React from "react";

export default function Greet(props) {
  //console.log(props);
  return (
    <div>
      <h1>
        Hello React from Greet by {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
}
