// Black Theme
var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "../Images/other/sun.png";
    } else {
        icon.src = "../Images/other/moon.png";
    }
};

