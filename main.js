function clearBanner() {
    var banner = document.getElementById("banner")
    banner.style.display = "none"
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("hideBanner", "true");
    }
}

window.onload = function() {
    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.getItem("hideBanner")) {
            clearBanner()
        }
    }
}
