import React from "react";
import ReactDOM  from "react-dom";

const Heading=React.createElement("h1",{title:"newId"},"Heading 1");
const Heading2=React.createElement("h2",{title:"newId2"},"Heading 2");

const container=React.createElement("div",{id:"container",props:"Hello"},[Heading,Heading2])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(container)
