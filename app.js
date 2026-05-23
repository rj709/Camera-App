(function () {
  const STORAGE_KEY = "my-app:note";
  const input = document.getElementById("note");

  input.value = localStorage.getItem(STORAGE_KEY) || "";
  input.addEventListener("input", () => {
    localStorage.setItem(STORAGE_KEY, input.value);
  });
})();
