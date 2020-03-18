import React from 'react';
import {render} from 'react-dom';
import  Pet from './Pet';

const App = () => {
  return React.createElement("div", { id:"something_important"}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Husky"
    }),
    React.createElement(Pet, {
      name: "Mila",
      animal: "Dog",
      breed: "Chow Chow"
    }),
    React.createElement(Pet, {
      name: "Kiti",
      animal: "Cat",
      breed: "Mixed"
    })
  ]);
};
render(React.createElement(App), document.getElementById("root"));
