function generateCard() {
  const user = {
    name: document.getElementById("nameInput").value,
    role: document.getElementById("roleInput").value,
    email: document.getElementById("emailInput").value,
    linkedin: document.getElementById("linkedinInput").value,
    github: document.getElementById("githubInput").value,
  };

  document.getElementById("name").textContent = user.name;
  document.getElementById("role").textContent = user.role;
  document.getElementById("email").textContent = user.email;
  document.getElementById("email").href = `mailto:${user.email}`;
  document.getElementById("linkedin").href = user.linkedin;
  document.getElementById("github").href = user.github;

  document.getElementById("card").style.display = "block";
}

function copyEmail() {
  const emailText = document.getElementById("email").textContent;
  navigator.clipboard.writeText(emailText).then(() => {
    alert("Email copied to clipboard!");
  });
}

function downloadCard() {
  const card = document.getElementById("card");
  html2canvas(card).then(canvas => {
    const link = document.createElement("a");
    link.download = "business-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
