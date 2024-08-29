let banner = document.querySelector(".banner");
let toggle = document.querySelector(".toggle");

toggle.onclick = function(){
    toggle.classList.toggle("active");
    banner.classList.toggle("active");
}