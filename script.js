document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const successMsg = document.getElementById("successMessage");

  submitBtn.classList.add("loading");
  submitBtn.disabled = true;
  successMsg.classList.remove("show");

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    successMsg.textContent = result.message;
    successMsg.classList.add("show");
  } catch (err) {
    alert("Something went wrong. Try again later.");
  } finally {
    submitBtn.classList.remove("loading");
    submitBtn.disabled = false;
  }
});
 const modal = document.getElementById('certificateModal');
  const btn = document.getElementById('viewCertificateBtn');
  const span = document.querySelector('.close');

  // Button click par modal show karo
  btn.onclick = () => {
    modal.style.display = 'block';
  };

  // Close icon click par modal hide karo
  span.onclick = () => {
    modal.style.display = 'none';
  };

  // Agar user modal ke baahar click kare toh bhi modal close ho jaye
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
