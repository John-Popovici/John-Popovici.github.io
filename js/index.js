// John Popovici

document.addEventListener("click", function (event) {
    // Remove highlights if clicking
    if (!event.target.classList.contains("a")) {
        document.querySelectorAll(".section").forEach(section => {
            section.classList.remove("highlight");
        });
    }
});

function highlightSection(id){
    // Remove any highlights
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('highlight');
    });
    // Highlight section
    document.getElementById(id).classList.add('highlight');
}