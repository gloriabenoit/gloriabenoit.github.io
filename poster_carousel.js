document.addEventListener("DOMContentLoaded", () => {

    const entries = document.querySelectorAll(".carousel .entry");
    const highlights = document.querySelectorAll(".highlight div");

    console.log("chargé")
    console.log(document.querySelectorAll("div"));
    entries.forEach(entry => {
    entry.addEventListener("click", () => {

        console.log("clicked");
        const target = entry.dataset.target;

        highlights.forEach(div => {
        div.classList.remove("active");
        });

        document.querySelector(target).classList.add("active");

    });
    });
});