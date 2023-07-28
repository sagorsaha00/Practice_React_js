const domContainer = document.querySelector("#root");
// const myElement = React.createElement("div" ,null,"hello world");
// const element = React.createElement("div", null, "hello world")

// ReactDOM.render(myElement , domContainer);

// console.log(domContainer);

const Increment = () =>  {
    const  [counter, setcounter] = React.useState(0);
    return(
            <div>
        <h1 id="display"> {counter}</h1>
        <div>
            <button id="button" onClick = {() => setcounter(counter + 1)}>Increment +
            </button>
        </div>
    </div> 
    )

};

ReactDOM.render(
    <div className="container">
    <Increment/>
    <Increment/>
    </div>,
    domContainer);