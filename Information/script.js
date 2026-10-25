document.addEventListener("DOMContentLoaded", () => {
    const gameInfo = {
      title: "Game 1: BGMI",
      overview: "BGMI is the Indian adaptation of PUBG Mobile with unique features.",
      features: [
        "Green blood effects for cultural compliance.",
        "Advanced parental controls and playtime reminders.",
        "All modes and maps from PUBG Mobile, tailored for India."
      ],
      graphics: "BGMI offers high-quality graphics optimized for mobile devices.",
      screenshots: ["bgmi-screenshot1.jpg", "bgmi-screenshot2.jpg"]
    };
  
    // Populate title
    document.getElementById("game-title").textContent = gameInfo.title;
  
    // Populate the game information section
    const gameInfoSection = document.querySelector(".game-info");
    gameInfoSection.innerHTML = `
      <h2>Overview</h2>
      <p>${gameInfo.overview}</p>
      <h2>Features</h2>
      <ul>
        ${gameInfo.features.map(feature => `<li>${feature}</li>`).join("")}
      </ul>
      <h2>Graphics</h2>
      <p>${gameInfo.graphics}</p>
      <h2>Screenshots</h2>
      <div class="screenshots">
        ${gameInfo.screenshots.map(src => `<img src="${src}" alt="Screenshot">`).join("")}
      </div>
    `;
  });
  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".game-images img");
  
    images.forEach((img) => {
      img.addEventListener("click", function () {
        openLightbox(this.src);
      });
    });
  
    function openLightbox(src) {
      let lightbox = document.createElement("div");
      lightbox.classList.add("lightbox");
  
      let img = document.createElement("img");
      img.src = src;
      img.classList.add("lightbox-content");
  
      let closeBtn = document.createElement("span");
      closeBtn.classList.add("close");
      closeBtn.innerHTML = "&times;";
      closeBtn.addEventListener("click", () => {
        document.body.removeChild(lightbox);
      });
  
      lightbox.appendChild(closeBtn);
      lightbox.appendChild(img);
      document.body.appendChild(lightbox);
    }
  });
  