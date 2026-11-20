
const searchInput = document.getElementById("searchInput");
const activities = document.querySelectorAll(".activity");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    activities.forEach(function (activity) {
        const content = activity.textContent.toLowerCase();
        const customSearch = activity.dataset.search || "";

        const matches =
            content.includes(searchTerm) ||
            customSearch.toLowerCase().includes(searchTerm);

        activity.style.display = matches ? "block" : "none";

        if (matches) {
            visibleCount++;
        }
    });

    noResults.hidden = visibleCount !== 0;
});
