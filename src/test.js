const banana = "green"

const fruitColors = { banana }
const nextColor = {
  none: "green",
    green: "yellow",
  yellow: "black",
  black: "gross black"
}

let ageBanana = (color) => color in nextColor ? nextColor[color] : nextColor.none

ageBanana(fruitColors.banana);
console.log(fruitColors.banana);
console.log( fruitColors.banana in nextColor);
console.log(fruitColors.banana);
