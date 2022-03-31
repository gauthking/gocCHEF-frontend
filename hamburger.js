let hamMenu = document.getElementById("hmenu");
let normalMenu = document.getElementById("nmenu");

function hamburgerr() {
    if (normalMenu.className == 'normalmenu') {
        normalMenu.className = 'hamburgermenu';
    }

    else if(normalMenu.className=='hamburgermenu'){
        normalMenu.className = 'normalmenu';
    }
}    