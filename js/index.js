let readMoreButton = document.querySelector(".readmore");
let broodTekst = document.querySelector(".broodtekst")
readMoreButton.addEventListener("click", toggleLeesMeer);
function toggleLeesMeer(evt) {
    broodTekst.classList.toggle("verborgen");
    if (readMoreButton.innerHTML === "Lees Meer") {
        readMoreButton.innerHTML = "Lees Minder";
    } else {
        readMoreButton.innerHTML = "Lees Meer";
    }
}