const music = document.getElementById("bgMusic");
const startBtn = document.getElementById("startBtn");
const musicNote = document.getElementById("musicNote");
const answer = document.getElementById("answer");
const maybeBtn = document.getElementById("maybeBtn");
const yesBtn = document.getElementById("yesBtn");

startBtn.addEventListener("click", async () => {
  try {
    await music.play();
    musicNote.textContent = "♪ Dil Haareya — playing for Disha";
  } catch (e) {
    musicNote.textContent = "Add music/dil-haareya.mp3 to hear the song ♫";
  }

  document.getElementById("proposal").scrollIntoView({ behavior: "smooth" });
});

yesBtn.addEventListener("click", () => {
  answer.innerHTML = "🥹❤️ You just made my heart the happiest. <br>Here's to us, Disha — today and every tomorrow. 💍✨";
  for (let i = 0; i < 28; i++) setTimeout(createHeart, i * 70);
});

maybeBtn.addEventListener("click", () => {
  answer.textContent = "Take your time… but my heart already knows its answer. 🙈❤️";
  maybeBtn.style.transform =
    `translate(${Math.random() * 80 - 40}px, ${Math.random() * 40 - 20}px)`;
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = ["♥", "♡", "❤", "💗", "✨"][Math.floor(Math.random() * 5)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 22) + "px";
  heart.style.animationDuration = (4 + Math.random() * 5) + "s";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 900);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
