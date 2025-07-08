const jobForm = document.getElementById("jobForm");
const jobList = document.getElementById("jobList");

let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

function renderJobs() {
  jobList.innerHTML = "";
  jobs.forEach((job, index) => {
    const jobCard = document.createElement("div");
    jobCard.className = "job-card";

    jobCard.innerHTML = `
      <strong>${job.title}</strong> at ${job.company}<br>
      <small>Status: ${job.status}</small>
      <button onclick="deleteJob(${index})">Delete</button>
    `;

    jobList.appendChild(jobCard);
  });
}

function deleteJob(index) {
  jobs.splice(index, 1);
  localStorage.setItem("jobs", JSON.stringify(jobs));
  renderJobs();
}

jobForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const company = document.getElementById("company").value;
  const status = document.getElementById("status").value;

  const job = { title, company, status };
  jobs.push(job);

  localStorage.setItem("jobs", JSON.stringify(jobs));
  renderJobs();
  jobForm.reset();
});

renderJobs();

