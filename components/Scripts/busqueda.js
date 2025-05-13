function filterSkins() {
    const input = document.getElementById("skinSearch");
    const filter = input.value.toLowerCase();
    const containers = document.getElementsByClassName("thumbnail-container");
  
    for (let i = 0; i < containers.length; i++) {
      const caption = containers[i].querySelector(".caption");
      const text = caption.textContent || caption.innerText;
  
      if (text.toLowerCase().includes(filter)) {
        containers[i].style.display = "";
      } else {
        containers[i].style.display = "none";
      }
    }
  }
  