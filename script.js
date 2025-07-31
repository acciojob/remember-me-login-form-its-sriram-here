//your JS code here. If required.
 const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const submitBtn = document.getElementById("submit");
    const existingBtn = document.getElementById("existing");

    // Show "Login as existing user" button if credentials are already stored
    window.onload = function () {
      const savedUsername = localStorage.getItem("savedUsername");
      const savedPassword = localStorage.getItem("savedPassword");

      if (savedUsername && savedPassword) {
        existingBtn.style.display = "block";
      }
    };

    // Handle form submit
    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;
      const remember = checkbox.checked;

      alert(`Logged in as ${username}`);

      if (remember) {
        localStorage.setItem("savedUsername", username);
        localStorage.setItem("savedPassword", password);
        existingBtn.style.display = "block";
      } else {
        localStorage.removeItem("savedUsername");
        localStorage.removeItem("savedPassword");
        existingBtn.style.display = "none";
      }
    });

    // Handle existing user login
    existingBtn.addEventListener("click", () => {
      const savedUsername = localStorage.getItem("savedUsername");
      if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
      }
    });