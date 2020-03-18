const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
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
ReactDOM.render(React.createElement(App), document.getElementById("root"));
