const domContainer = document.querySelector("#root");
const myElement = React.createElement("div" ,null,"hello world");
// const element = React.createElement("div", null, "hello world")

ReactDOM.render(myElement , domContainer);
// console.log(domContainer);
