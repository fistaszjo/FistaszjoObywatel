const VALID_KEY = "2937-8419-0236"; 

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const input = document.getElementById("accessKey");
  const error = document.getElementById("loginError");

  // Capture incoming query string (?params)
  const params = new URLSearchParams(window.location.search);
  localStorage.setItem("params", params.toString());

  loginBtn.addEventListener("click", () => {
    const key = input.value.trim();

    if (key === VALID_KEY) {
      localStorage.setItem("authorized", "true");

      // Pass along same params to next page
      window.location.href = "/FistaszjoObywatel/id?" + params;
    } else {
      error.textContent = "Nieprawidłowy klucz dostępu.";
    }
  });
});
