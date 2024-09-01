document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const commentList = document.getElementById("comment-list");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!firstName || !lastName || !message) {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  });
});
