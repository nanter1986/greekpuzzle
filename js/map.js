/**
 * Created by user on 25/4/2017.
 */
var w = window.innerWidth;
var tileW=w/6;
console.log(tileW);


function makeTiles(imageName,col) {
    var tile=document.createElement("img");
    tile.setAttribute("src","../img/"+imageName+".jpg");
    tile.setAttribute("height",tileW);
    tile.setAttribute("width",tileW);
    tile.setAttribute("left",col*tileW);
    document.getElementById("div1").appendChild(tile);

}

function addImages() {
    makeTiles("agora",0);
    makeTiles("crete8",1);
    makeTiles("splantzia",2);
    makeTiles("xeri",3);
}



