// edit for desktop
function toggleMenu1() {
    document.getElementById("div1").classList.toggle("show");
    document.getElementById("btn1").classList.toggle("text-black");
    document.getElementById("icon11").classList.toggle("show");
    document.getElementById("icon1").classList.toggle("arrow-up");
}

function toggleMenu2() {
    document.getElementById("div2").classList.toggle("show");
    document.getElementById("btn2").classList.toggle("text-black");
    document.getElementById("icon22").classList.toggle("show");
    document.getElementById("icon2").classList.toggle("arrow-up");
}
window.onclick = function (e){
    if (!e.target.matches("button")){
        const toggleMenu1 = document.getElementById("div1");
        const toggleMenu2 = document.getElementById("div2");
        if(toggleMenu1.classList.contains("show")){
            toggleMenu1.classList.remove("show");
            document.getElementById("btn1").classList.remove("text-black");
            document.getElementById("icon11").classList.toggle("show");
            document.getElementById("icon1").classList.toggle("arrow-up");

        }
        else if(toggleMenu2.classList.contains("show")){
            toggleMenu2.classList.remove("show");
            document.getElementById("btn2").classList.remove("text-black");
            document.getElementById("icon22").classList.toggle("show");
            document.getElementById("icon2").classList.toggle("arrow-up");
        }
    }
} 



// edit for mobile
function menu_open() {
    document.getElementById("sideMenu").style.display = "block";
    document.getElementById("layout").classList.add("layout");
  }
function menu_close() {
    document.getElementById("sideMenu").style.display = "none";
    document.getElementById("layout").classList.remove("layout");

  }
function open_links(){
    document.getElementById("links").classList.toggle("links");
    document.getElementById("arrow-up").classList.toggle("show");
    document.getElementById("arrow_up").classList.toggle("arrow-up");

}
function open_link(){
    document.getElementById("link").classList.toggle("links");
    document.getElementById("arroow-up").classList.toggle("show");
    document.getElementById("arroow_up").classList.toggle("arrow-up");
}
