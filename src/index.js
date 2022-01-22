import { sum } from "./a.js";
import packImg from "./img.js";
import "./index.css";
import "./index.less";
import React from "react"
import ReactDOM from "react-dom"
import App from "./app.jsx"

const input = document.createElement("input")

document.body.appendChild(packImg())
document.body.appendChild(input)

console.log(sum(111, 444))

ReactDOM.render(<App />, document.getElementById("app"))