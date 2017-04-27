/**
 * Created by user on 25/4/2017.
 */
var w = window.innerWidth;
var tileW=w/4.1;
console.log(tileW);


function makeTiles(imageName,col,where,theLink) {
    var tile=document.createElement("img");
    tile.setAttribute("src","../img/"+imageName+".jpg");
    tile.setAttribute("height",tileW);
    tile.setAttribute("width",tileW);
    tile.setAttribute("left",col*tileW);
    tile.setAttribute("style","border-radius:20px");
    tile.setAttribute("onclick",theLink);
    document.getElementById(where).appendChild(tile);

}

function goToLink(name){
    if(name==="faros"){
        var link="../index.html";
        window.open(link,"_self");
    }else{
        var link="../html/"+name+".html";
        window.open(link,"_self");
    }
}

function addImages() {
    makeTiles("agora",0,"div1","goToLink('agora')");
    makeTiles("faros",1,"div1","goToLink('faros')");
    makeTiles("splantzia",2,"div1","goToLink('splantzia')");
    makeTiles("xeri",3,"div1","goToLink('xeri')");
}



