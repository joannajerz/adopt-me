const Pet = props => {
    return React.createElement("div",{},[
        React.createElement("h1",{},props.name),
        React.createElement("h2",{},props.animal),
        React.createElement("h2",{},props.breed)
])
}
const App = () => {
    return React.createElement("div", {}, [ React.createElement("h1",{},"Adopt Me!"), 
    React.createElement(Pet, {
        name:"Luna",
        animal: "Dog",
        breed:"Husky",
    }),
    React.createElement(Pet, {
        name:"Mila",
        animal: "Dog",
        breed:"Chow Chow",
    }),
    React.createElement(Pet, {
        name:"Kiti",
        animal: "Cat",
        breed:"Mixed",
    }),
]);
}
ReactDOM.render(
    React.createElement(App), document.getElementById("root")
);