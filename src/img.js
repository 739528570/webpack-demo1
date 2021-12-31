import oImgSrc from "./a.jpg"
function packImg () {
    const oEle = document.createElement("div")
    const oImg = document.createElement("img")
    oImg.width = 800
    oImg.height = 600
    // oImg.src = require("./img.jpg").default
    // es5后require导入为对象
    // oImg.src = require("./img.jpg")
    // 需要在webpack.config => file-loader => options => esModule: false 不转换esModule
    oImg.src = oImgSrc
    oEle.appendChild(oImg)

    return oEle
}
export default packImg