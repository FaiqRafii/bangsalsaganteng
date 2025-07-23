const hurufBtn = document.querySelectorAll(".huruf");
const mainBtn = document.getElementById("mainBtn");
const landing = document.getElementById("landing");
const tts = document.getElementById("tts");

hurufBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.classList.toggle("bg-black");
    e.target.classList.toggle("text-white");
    e.target.classList.toggle("bg-white");
    e.target.classList.toggle("text-black");
  });
});

mainBtn.addEventListener("click", () => {
  mainBtn.classList.toggle("bg-black");
  mainBtn.classList.toggle("text-white");
  mainBtn.classList.toggle("bg-white");
  mainBtn.classList.toggle("text-black");
  landing.classList.add("hidden");
  tts.classList.remove("hidden");
});
