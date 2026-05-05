// Apply button
function applyJob(jobName) {
    alert("Applying for " + jobName);
}

// Search functionality
let search = document.getElementById("search");

search.addEventListener("keyup", function () {
    let filter = search.value.toLowerCase();
    let jobs = document.querySelectorAll(".job");

    jobs.forEach(job => {
        let text = job.innerText.toLowerCase();
        job.style.display = text.includes(filter) ? "block" : "none";
    });
});