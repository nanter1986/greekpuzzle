/**
 * Created by user on 25/4/2017.
 */
var w = window.innerWidth;
var tileW=w/4.1;
console.log(tileW);


function makeTiles(imageName,col,where) {
    var tile=document.createElement("img");
    tile.setAttribute("src","../img/"+imageName+".jpg");
    tile.setAttribute("height",tileW);
    tile.setAttribute("width",tileW);
    tile.setAttribute("left",col*tileW);
    document.getElementById(where).appendChild(tile);

}

function addImages() {
    makeTiles("agora",0,"div1");
    makeTiles("crete8",1,"div1");
    makeTiles("splantzia",2,"div1");
    makeTiles("xeri",3,"div1");
    makeTiles("agora",0,"div2");
    makeTiles("crete8",1,"div2");
    makeTiles("splantzia",2,"div2");
    makeTiles("xeri",3,"div2");
    makeTiles("agora",0,"div3");
    makeTiles("crete8",1,"div3");
    makeTiles("splantzia",2,"div3");
    makeTiles("xeri",3,"div3");
}



