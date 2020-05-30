// //Tile Array
// var allTiles = document.getElementsByClassName("paintable") // pnt stands for paintable. Trying to reduce the size of the HTML
// var tileCount = allTiles.length

// //Static Colors
// var staticColorOneElements = document.getElementsByClassName("staticColorOne")
// var staticColorTwoElements = document.getElementsByClassName("staticColorTwo")

// // Colors 
// var colorIdArray = []
// var color0 = { face1 : "#ffffff", face2 : "#acacac", face3 : "#595959" }
// var color1 = { face1 : "", face2 : "", face3 : "" }
// var color2 = { face1 : "", face2 : "", face3 : "" }
// var selectedColor = null

// // Preset Colors
// var randomColours = [
//     {
//         face1: "#8e8879",
//         face2: "#7d786a",
//         face3: "#7d786a"
//     },
//     {
//         face1: "#9f0915",
//         face2: "#8e0813",
//         face3: "#7d0711"
//     },
//     {
//         face1: "#0471d0",
//         face2: "#0465ba",
//         face3: "#0359a3"
//     },
//     {
//         face1: "#73319f",
//         face2: "#672c8e",
//         face3: "#5a267d"
//     },
//     {
//         face1: "#f4f400",
//         face2: "#dada00",
//         face3: "#c0c000"
//     },
//     {
//         face1: "#d09937",
//         face2: "#ba8932",
//         face3: "#a3782c"
//     },
//     {
//         face1: "#0ab654",
//         face2: "#09a34b",
//         face3: "#088f42"
//     },
//     {
//         face1: "#088f42",
//         face2: "#088f42",
//         face3: "#00593f"
//     },
//     {
//         face1: "#e7b2a0",
//         face2: "#ce9f8f",
//         face3: "#b58c7e"
//     },
//     {
//         face1: "#b58c7e",
//         face2: "#ce3439",
//         face3: "#b52e32"
//     },
//     {
//         face1: "#00f4f4",
//         face2: "#00dada",
//         face3: "#00c0c0"
//     },
//     {
//         face1: "#f400be",
//         face2: "#da00a9",
//         face3: "#a50080"
//     },
//     {
//         face1: "#e7b65a",
//         face2: "#cea351",
//         face3: "#b58f47"
//     },
//     {
//         face1: "#e79805",
//         face2: "#ce8804",
//         face3: "#b57804"
//     },
//     {
//         face1: "#39e765",
//         face2: "#33ce5b",
//         face3: "#279c45"
//     },
// ]

// // Loader



// var mouseDown = 0;

// document.body.onmousedown = function() { 
//   ++mouseDown;
// }
// document.body.onmouseup = function() {
//   --mouseDown;
// }

// // buttons
// var changeColorOneBtn = document.getElementById("changeColorOne") 
// var changeColorTwoBtn = document.getElementById("changeColorTwo")
// var removeColorBrushBtn = document.getElementById("removeColorBrush")
// var selectColorOneBrushBtn = document.getElementById("selectColorOneBrush" )
// var selectColorTwoBrushBtn = document.getElementById("selectColorTwoBrush")

// function indexTiles() {
//     for (let i = 0; i < tileCount; i++) {
//         allTiles[i].setAttribute('data-tileIndex', "" + i + "")
//         allTiles[i].setAttribute('data-color', "" + i + "")
//     }
// }

// function setSavedArt(colorArray) {
//     for (let i = 0; i < tileCount; i++) {
//         allTiles[i].setAttribute('data-color', "" + i + "")
//     }
// }

// // Event Listeners
// function initializeTileEvents(allTiles) {
//     for (let i = 0; i < tileCount; i++) {
//         allTiles[i].addEventListener("mouseover",( event ) => {
//             if (mouseDown){
//                 renderWithShading(selectedColor, event.target)
//                 // drawColors(selectedColor, event.target )
//             }
//             return
//         });

//         // allTiles[i].addEventListener('touchmove',( event ) => {
//         //     drawColors(selectedColor, event.target ) // alert pageX coordinate of touch point
//         // }, false)

//     }
// }




// function initializeChangeColorOneButton() {
//     changeColorOneBtn.addEventListener("click", ( event ) => {
//         color1 = randomRGB()
//         setStaticColors()
//     })
// }
// function initializeChangeColorTwoButton() {
//     changeColorTwoBtn.addEventListener("click", ( event ) => {
//         color2 = randomRGB()
//         setStaticColors()
//     })
// }

// function initializeSelectColorOneBrushBtn() {
//     selectColorOneBrushBtn.addEventListener("click", ( event ) => {
//         event.target.setAttribute("stroke-width", "2px")
//         event.target.setAttribute("stroke", "rgb(0,0,0)")
//         event.target.setAttribute("opacity", "1")
//         event.target.setAttribute("fill", "rgba(0,0,0,0)")
//         selectedColor = color1
//     })
// }

// function initializeSelectColorOneBrushBtn() {
//     selectColorTwoBrushBtn.addEventListener("click", ( event ) => {
//         event.target.setAttribute("stroke-width", "2px")
//         event.target.setAttribute("stroke", "rgb(0,0,0)")
//         event.target.setAttribute("opacity", "1")
//         event.target.setAttribute("fill", "rgba(0,0,0,0)")
//         selectedColor = color2
//     })
// }

// function setStaticColors(){
//     for (let i = 0; i < staticColorOneElements.length; i++) {
//         renderWithShading(color1, staticColorOneElements[i])
//     }
//     for (let i = 0; i < staticColorTwoElements.length; i++) {
//         renderWithShading(color2, "" )
//     }
// }




// // Color functions
// // function changeColors(svgArray, color) {
// //     var mediumColor = color
// //     var darkColor = shiftColor(mediumColor, "shiftDown")
// //     var lightColor = shiftColor(mediumColor, "shiftUp" )
  
// //     for (let i = 0; i < svgArray.length; i++) {
// //       var color = svgArray[i]
     
// //     }
// //   }

//   function renderWithShading(color, svgElement) {
//     // debugger;
//     switch(svgElement.dataset.face) {
//         case "1": {
//             svgElement.style.fill = color.face1;
//             // svgElement.setAttribute('stroke', color.face1)
//             // svgElement.setAttribute('stroke-width', "0px")
//             break;
//         }
//         case "2": {
//             svgElement.style.fill = color.face2;
//             // svgElement.setAttribute('fill', color.face2)
//             // svgElement.setAttribute('stroke', color.face2)
//             // svgElement.setAttribute('stroke-width', "0px")
//             break;
//         }
//         case "3": {
//             svgElement.style.fill = color.face3;
//             // svgElement.setAttribute('fill', color.face3)
//             // svgElement.setAttribute('stroke', color.face3)
//             // svgElement.setAttribute('stroke-width', "0px")
//             break;
//         }
//         default: {
//             console.log("error")
//             console.log(svgElement)
//         }
//     }
//   }
  
// function randomRGB() {
//     return randomColours[Math.floor(Math.random() * randomColours.length )]
// }



// function redrawTiles(){
//     for (let i = 0; i < tileCount; i++) {
//        renderWithShading(color0 ,allTiles[i])    
//     }
// }




// indexTiles();


// redrawTiles();


// initializeTileEvents(allTiles);
// initializeChangeColorOneButton();
// initializeChangeColorTwoButton();
// initializeSelectColorOneBrushBtn();

var loaderDiv = document.getElementById('fadeIn')

function fadeLoader() {
    loaderDiv.classList.add("ready");
    setTimeout( () => { loaderDiv.remove() }, 3000);
}
fadeLoader();


// function updateColors(rgbValue){
//     darkColor = shiftColor(mediumColor, "shiftDown")
//     lightColor = shiftColor(mediumColor, "shiftUp" )
// }




// var changeColorBtn1 = document.getElementById("changeColorOne")
// var changeColorBtn2 = document.getElementById("changeColorTwo")


// changeColorBtn1.addEventListener("click", function(){
//   var colorOneSVGArray = document.querySelectorAll('.color')
//   changeColors(colorOneSVGArray)
// });

// changeColorBtn2.addEventListener("click", function(){
//   var colorTwoSVGArray = document.querySelectorAll('.color2')
//   changeColors(colorTwoSVGArray)
// });



// function shiftColor(color ,upOrDown){
//   var colorArray = color.substring(4).slice(0, -1).split(",")
//   var newColor = []
//   var range = 80
//   var shiftDown;
//   if (upOrDown !== "shiftUp") shiftDown = true;

//   for (let i = 0; i < colorArray.length; i++) {
//     var color = parseInt(colorArray[i])
//     if (shiftDown){
//       if (color - range < 0 ) {
//         newColor.push(0)
//       } else {
//         newColor.push(color - range)
//       }
//     } else {
//       if (color + range > 255 ) {
//         newColor.push(255)
//       } else {
//         newColor.push(color + range)
//       }
//     }
//   }
//   return `rgb(${newColor[0]},${newColor[1]},${newColor[2]})`
// }

// changeColors(allTiles, "rgb(172,172,172)") //Setting to grey

















