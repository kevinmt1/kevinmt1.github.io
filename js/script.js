var menulist = document.getElementById("menutab");
var menubutton = document.getElementById("menu-btn");
menulist.style.maxHeight = "0px";

function openmenu(){

    if(menulist.style.maxHeight == "0px"){
        menulist.style.maxHeight = "450px";
        menubutton.style.filter = "brightness(75%)";
    }else{
        menulist.style.maxHeight = "0px";
        menubutton.style.filter = "brightness(100%)"
    }
}