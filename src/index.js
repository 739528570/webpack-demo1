import packImg from "./img.js";
import "./index.css";
import "./index.less";
import React from "react"
import ReactDOM from "react-dom"
import App from "@src/app"

const input = document.createElement("input")

document.body.appendChild(packImg())
document.body.appendChild(input)


ReactDOM.render(<App />, document.getElementById("app"))