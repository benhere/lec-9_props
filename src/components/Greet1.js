import React from "react";

// first way of destructuring inside function parameter

// const Greet1 = ({ name, heroName }) => {
//   return (
//     <div>
//       <h1>
//         Hello Frontend by {name} a.k.a {heroName}
//       </h1>
//     </div>
//   );
// };

// senond way - destructuring inside function body

const Greet1 = (props) => {
  const { name, heroName } = props;

  return (
    <div>
      <h1>
        Hello Frontend by {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

export default Greet1;
