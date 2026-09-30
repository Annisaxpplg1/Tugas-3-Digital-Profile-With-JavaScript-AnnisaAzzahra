// 1. Ambil elemen HTML yang dibutuhkan dan simpan di Variabel
const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

// 2. Beri perintah saat tombol diklik (Event Listener)
btnTema.addEventListener('click', function() {
 // toggle akan menambah class 'light-mode' jika belum ada,
 // dan menghapusnya jika sudah ada.
 bodyHalaman.classList.toggle('light-mode');

 // Opsi tambahan: Ubah teks ikon di dalam tombol
 if (bodyHalaman.classList.contains('light-mode')) {
 btnTema.textContent = '🌙 Mode Gelap';
 } else {
 btnTema.textContent = '☀️ Mode Terang';
 }
});

//1.Ambil tombol 'Kirim pesan' yang baru saja kamuberi id="btnKontak"
const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak'); 
const btnTutupModal = document.querySelector('#btnTutupModal');

//2. Event saat tombol Kirim pesan ditekan
btnBukaModal.addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah link pindah halaman / buka email
  elemenModal.classList.add('show'); // Tampilkan modal
});

  //3.Event saat tombol Tutup ditekan
  btnTutupModal.addEventListener('click', function() {
    elemenModal.classList.remove('show'); //Sembunyikan modal
  });
// ================================
// 1. TYPING EFFECT
// ================================

const role = document.querySelector("p");

const typingTexts = [
    "Junior Web Developer",
    "PPLG Student",
    "UI/UX Enthusiast",
    "Future Programmer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Cari teks "Junior Web Developer"
const roleElement = [...document.querySelectorAll("p, h1, h2, h3, span")]
    .find(el => el.textContent.includes("Junior Web Developer"));

if (roleElement) {

    function typingEffect() {

        const currentText = typingTexts[textIndex];

        if (!isDeleting) {
            roleElement.textContent =
                currentText.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentText.length) {
                isDeleting = true;

                setTimeout(typingEffect, 1500);
                return;
            }

        } else {

            roleElement.textContent =
                currentText.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                textIndex++;

                if (textIndex >= typingTexts.length) {
                    textIndex = 0;
                }
            }
        }

        setTimeout(
            typingEffect,
            isDeleting ? 50 : 90
        );
    }

    typingEffect();
}

// ✨ CLICK PARTICLE EFFECT

document.addEventListener("click", function (e) {

    for (let i = 0; i < 8; i++) {

        const particle = document.createElement("span");

        particle.textContent = "✦";

        particle.style.position = "fixed";
        particle.style.left = e.clientX + "px";
        particle.style.top = e.clientY + "px";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "9999";
        particle.style.fontSize = "12px";
        particle.style.color = "#d98ac7";
        particle.style.transition = "all 0.6s ease";

        document.body.appendChild(particle);

        const angle = (Math.PI * 2 * i) / 8;
        const distance = 35;

        setTimeout(() => {

            particle.style.transform =
                `translate(
                    ${Math.cos(angle) * distance}px,
                    ${Math.sin(angle) * distance}px
                )`;

            particle.style.opacity = "0";

        }, 10);

        setTimeout(() => {
            particle.remove();
        }, 650);
    }
});
