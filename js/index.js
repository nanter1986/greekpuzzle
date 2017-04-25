function setTitle(){
    document.getElementById("topbar").innerHTML="<h1>The Lighthouse</h1>"
}

function clickedButton() {
    var name = document.getElementById("textfield").value;
    document.getElementById("result").className="red";
    document.getElementById("result").innerHTML = "Hello" + " " + name;

}

function goToMap() {
    window.open("html/map.html","_self");
}

