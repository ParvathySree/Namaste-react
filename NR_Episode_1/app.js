//For Js


const headingJS =  document.createElement("h1");
headingJS.innerHTML = "Hello World!";
const container = document.getElementById("root-js");
container.appendChild(headingJS);

//For React
const heading = React.createElement("h1",{id:"heading"},"Hello World!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)

//Nested Elements  
const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hello World!"),React.createElement("h2",{},"Hello World!")]));
const rootNested = ReactDOM.createRoot(document.getElementById("root-nested"));
rootNested.render(parent)


