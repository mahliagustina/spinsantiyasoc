window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
})

const _toggle = document.getElementById("_toggle");
const _items = document.getElementById("_items");

_toggle.onclick = () => {
    _items.classList.toggle("open");
}
