// todo make nav custom element
// todo hambuger bar

let sidebarId = document.querySelector(".sidebar");
let isSidebarOpen = true;

// stop dragging
document.querySelector(".header-logo").ondragstart = () => { return false; };
document.querySelector(".sidebar-logo").ondragstart = () => { return false; };
document.querySelector(".logo").ondragstart = () => { return false; };

function hamburgerButtonPress() {
    if(isSidebarOpen) {
        sidebarId.style.display = "none";
        isSidebarOpen = false;
    } else {
        sidebarId.style.display = "flex";
        isSidebarOpen = true;
    }
}

hamburgerButtonPress();