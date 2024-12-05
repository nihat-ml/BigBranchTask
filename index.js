document.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        header.style.display = "none";
    } else {
        header.style.display = "block";
    }
});