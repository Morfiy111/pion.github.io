function tree(target) {
    var ul = target.parentNode.getElementsByTagName("ul").item(0);
    ul.style.display = (ul.style.display == "none")? "block": "none";
}