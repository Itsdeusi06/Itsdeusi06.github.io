
function filterSkins() {
  const input = document.getElementById("skinSearch");
  const filter = input.value.toLowerCase();
  const containers = document.querySelectorAll(".thumbnail-container");

  containers.forEach(container => {
    const caption = container.querySelector(".caption");
    const text = caption.textContent.toLowerCase();

    if (text.includes(filter)) {
      container.style.display = "flex";
    } else {
      container.style.display = "none";
    }
  });
}
