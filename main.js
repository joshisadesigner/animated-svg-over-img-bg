// let background = new Image();
//     background.src = 'img/background.jpg';

// window.onload = function() {
//     let canvas = document.getElementById("phoneImage");
//     let context = canvas.getContext("2d");
//     let img = background;
//         context.drawImage(img, 0, 0);
// };

function random(max,min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let polygons = document.getElementsByTagName('polygon');
var colours = ['cls-1', 'cls-2', 'cls-3', 'cls-4', 'cls-5', 'cls-6'];
var i = 0;

setInterval( function() {
  var currentPolygon = polygons[random(polygons.length, 0)];
  currentPolygon.setAttribute("class", colours[random(colours.length, 0)]);
  setTimeout( function() { currentPolygon.removeAttribute("class") }, 2000);
  i++;
}, 500);