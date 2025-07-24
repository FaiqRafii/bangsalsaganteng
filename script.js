"use strict";

const hurufBtn = document.querySelectorAll(".huruf");
const mainBtn = document.getElementById("mainBtn");
const landing = document.getElementById("landing");
const tts = document.getElementById("tts");
const bgm = document.getElementById("bgm");
const muteBtn = document.querySelectorAll(".muteBtn");
const unmuteBtn = document.querySelectorAll(".unmuteBtn");
const sparkleSfx = document.getElementById("sparkle");
const clickSfx = document.getElementById("click");
const correctSfx=document.getElementById('correct');
const correctAllSfx=document.getElementById('correctAll');

const ngantuk = ["n13", "g23", "a33", "n43", "t53", "u63", "k73"];
const pintar = ["p18", "i28", "n38", "t48", "a58", "r68"];
const sabar = ["s32", "a42", "b52", "a62", "r72"];
const ganteng = ["g41", "a42", "n43", "t44", "e45", "n46", "g47"];
const lapar = ["l64", "a65", "p66", "a67", "r68"];
const pilekan = ["p15", "i25", "l35", "e45", "k55", "a65", "n75"];

let hurufSelected = [];
let correctCounter = 0;

hurufBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!e.target.classList.contains("locked")) {
      clickSfx.play();
      if (e.target.classList.contains("selected")) {
        hurufSelected = hurufSelected.filter(
          (item) => item !== e.target.getAttribute("data-huruf")
        );
        e.target.classList.remove("selected");
        cekFound();
        for (const iterator of hurufSelected) {
          console.log(iterator);
        }
      } else {
        hurufSelected.push(e.target.getAttribute("data-huruf"));
        e.target.classList.add("selected");
        cekFound();
        for (const iterator of hurufSelected) {
          console.log(iterator);
        }
      }
      e.target.classList.toggle("bg-black");
      e.target.classList.toggle("text-white");
      e.target.classList.toggle("bg-white");
      e.target.classList.toggle("text-black");
    }
  });
});

function cekFound() {
  // for (const i = 0; i < ngantuk.length; i++) {
  //   if(ngantuk[i]===hurufSelected[i]){
  //     counter++;
  //   }
  // }

  if (ngantuk.every((item) => hurufSelected.includes(item))) {
    // counter++;
    // console.log(counter);
    hurufBtn.forEach((btn) => {
      for (const iterator of hurufSelected) {
        if (btn.getAttribute("data-huruf") === iterator) {
          btn.classList.add("locked");
        }
      }
    });
    cekSama("ngantuk");
    correctSfx.play();
    correctCounter++;
    console.log("ngantuk FOUND");
  } else if (pintar.every((item) => hurufSelected.includes(item))) {
    hurufBtn.forEach((btn) => {
      for (const iterator of hurufSelected) {
        if (btn.getAttribute("data-huruf") === iterator) {
          btn.classList.add("locked");
        }
      }
    });
    cekSama("pintar");
    correctSfx.play();
    correctCounter++;
    console.log("pintar FOUND");
  } else if (sabar.every((item) => hurufSelected.includes(item))) {
    hurufBtn.forEach((btn) => {
      for (const iterator of hurufSelected) {
        if (btn.getAttribute("data-huruf") === iterator) {
          btn.classList.add("locked");
        }
      }
    });
    cekSama("sabar");
    correctSfx.play();
    correctCounter++;
    console.log("sabar FOUND");
  } else if (ganteng.every((item) => hurufSelected.includes(item))) {
    hurufBtn.forEach((btn) => {
      for (const iterator of hurufSelected) {
        if (btn.getAttribute("data-huruf") === iterator) {
          btn.classList.add("locked");
        }
      }
    });
    cekSama("ganteng");
    correctSfx.play();
    correctCounter++;
    console.log("ganteng FOUND");
  } else if (lapar.every((item) => hurufSelected.includes(item))) {
    hurufBtn.forEach((btn) => {
      for (const iterator of hurufSelected) {
        if (btn.getAttribute("data-huruf") === iterator) {
          btn.classList.add("locked");
        }
      }
    });
    cekSama("lapar");
    correctSfx.play();
    correctCounter++;
    console.log("lapar FOUND");
  } else if (pilekan.every((item) => hurufSelected.includes(item))) {
    hurufBtn.forEach((btn) => {
      for (const iterator of hurufSelected) {
        if (btn.getAttribute("data-huruf") === iterator) {
          btn.classList.add("locked");
        }
      }
    });
    cekSama("pilekan");
    correctSfx.play();
    correctCounter++;
    console.log("pilekan FOUND");
  }
}

function cekSama(kata) {
  let hurufSama = [];

  if (kata === "ngantuk") {
    document.querySelector('.jawaban.kosong').innerHTML='Ngantuk';
    document.querySelector('.jawaban.kosong').classList.add("bg-black","text-white");
    document.querySelector('.jawaban.kosong').classList.remove('kosong');
    hurufSama.push(hurufSelected.filter((item) => pilekan.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => pintar.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => sabar.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => lapar.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => ganteng.includes(item)));
  } else if (kata === "pilekan") {
    document.querySelector('.jawaban.kosong').innerHTML='Pilekan';
    document.querySelector('.jawaban.kosong').classList.add("bg-black","text-white");
    document.querySelector('.jawaban.kosong').classList.remove('kosong');
    hurufSama.push(hurufSelected.filter((item) => ngantuk.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => pintar.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => sabar.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => lapar.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => ganteng.includes(item)));
  } else if (kata === "pintar") {
    document.querySelector('.jawaban.kosong').innerHTML='Pintar';
    document.querySelector('.jawaban.kosong').classList.add("bg-black","text-white");
    document.querySelector('.jawaban.kosong').classList.remove('kosong');hurufSama.push(hurufSelected.filter((item) => pilekan.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => ngantuk.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => sabar.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => lapar.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => ganteng.includes(item)));
  } else if (kata === "sabar") {
    document.querySelector('.jawaban.kosong').innerHTML='Sabar';
    document.querySelector('.jawaban.kosong').classList.add("bg-black","text-white");
    document.querySelector('.jawaban.kosong').classList.remove('kosong');hurufSama.push(hurufSelected.filter((item) => pilekan.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => pintar.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => ngantuk.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => lapar.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => ganteng.includes(item)));
  } else if (kata === "lapar") {
    document.querySelector('.jawaban.kosong').innerHTML='Lapar';
    document.querySelector('.jawaban.kosong').classList.add("bg-black","text-white");
    document.querySelector('.jawaban.kosong').classList.remove('kosong');hurufSama.push(hurufSelected.filter((item) => pilekan.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => pintar.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => sabar.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => ngantuk.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => ganteng.includes(item)));
  } else if (kata === "ganteng") {
    document.querySelector('.jawaban.kosong').innerHTML='Ganteng';
    document.querySelector('.jawaban.kosong').classList.add("bg-black","text-white");
    document.querySelector('.jawaban.kosong').classList.remove('kosong');hurufSama.push(hurufSelected.filter((item) => pilekan.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => pintar.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => sabar.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => lapar.includes(item)));
    hurufSama.push(hurufSelected.filter((item) => ngantuk.includes(item)));
  }

  hurufSelected = [];
  for (let index = 0; index < hurufSama.length; index++) {
    if (hurufSama[index] != "") {
      hurufSelected = hurufSama.flat().filter(Boolean);
    }
  }
  console.log("huruf selected: " + hurufSelected);

  if(correctCounter==5){
    correctAllSfx.play();
  }
}

mainBtn.addEventListener("click", () => {
  sparkleSfx.play();
  setTimeout(() => {}, 3500);
  mainBtn.classList.toggle("bg-black");
  mainBtn.classList.toggle("text-white");
  mainBtn.classList.toggle("bg-white");
  mainBtn.classList.toggle("text-black");
  landing.classList.add("hidden");
  tts.classList.remove("hidden");
});

muteBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    muteBtn.forEach((b) => b.classList.add("hidden"));
    unmuteBtn.forEach((bttn) => {
      bttn.classList.remove("hidden");
    });
    bgm.play();
  });
});

unmuteBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    muteBtn.forEach((b) => b.classList.remove("hidden"));
    unmuteBtn.forEach((bttn) => {
      bttn.classList.add("hidden");
    });
    bgm.pause();
  });
});
