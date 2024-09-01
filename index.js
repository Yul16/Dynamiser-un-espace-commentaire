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

      const commentDiv = document.createElement("div");
      commentDiv.className = "flex space-x-4 text-sm text-gray-500";

      const commentContentDiv = document.createElement("div");
      commentContentDiv.className = "flex-1 py-10 border-t border-gray-200";

      const h3 = document.createElement("h3");
      h3.className = "font-medium text-gray-900";
      h3.textContent = `${firstName} ${lastName}`;

      const p = document.createElement("p");
      p.className = "prose prose-sm mt-4 max-w-none text-gray-500";
      p.textContent = message;

      commentContentDiv.appendChild(h3);
      commentContentDiv.appendChild(p);
      commentDiv.appendChild(commentContentDiv);
    }
  });
});
