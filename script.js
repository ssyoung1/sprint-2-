document.addEventListener("DOMContentLoaded", function () {
    var popup = document.getElementById("cookie-popup");
    var acceptBtn = document.getElementById("acceptCookies");

    if (popup && acceptBtn) {
        if (!localStorage.getItem("cookiesAccepted")) {
            popup.style.display = "block";
        }

        acceptBtn.addEventListener("click", function () {
            localStorage.setItem("cookiesAccepted", "true");
            popup.style.display = "none";
        });
    }
});
