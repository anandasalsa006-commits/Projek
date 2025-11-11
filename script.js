// script.js

// 1. Ambil elemen-elemen DOM yang diperlukan
const emailForm = document.querySelector('.email-form');
const emailInput = document.querySelector('.email-form input[type="email"]');
const startButton = document.querySelector('.btn-red');

// 2. Fungsi untuk validasi email sederhana
function isValidEmail(email) {
    // Regex dasar untuk memeriksa format email (seperti: user@domain.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 3. Tambahkan event listener untuk submit formulir
emailForm.addEventListener('submit', function(event) {
    // Mencegah formulir ter-submit secara default
    event.preventDefault(); 

    const userEmail = emailInput.value.trim();

    // Lakukan validasi
    if (userEmail === '') {
        alert('Mohon masukkan alamat email Anda.');
        // Fokuskan kembali ke input
        emailInput.focus();
    } else if (!isValidEmail(userEmail)) {
        alert('Format email tidak valid. Contoh: nama@domain.com');
        emailInput.focus();
    } else {
        // Jika validasi sukses:
        // Di sini Anda akan mengirim data ke server atau melakukan navigasi.
        
        // Contoh: Log data dan berikan umpan balik kepada pengguna
        console.log(`Email yang dimasukkan: ${userEmail}`);
        alert(`Terima kasih! Kami siap memulai keanggotaan Anda dengan email: ${userEmail}.`);

        // Opsional: Reset formulir setelah sukses
        emailForm.reset();
    }
});

// 4. Tambahkan interaksi visual sederhana (misalnya, saat tombol di-hover)
// Meskipun ini lebih sering dilakukan dengan CSS, kita bisa menambahkan kelas interaksi via JS jika perlu.
startButton.addEventListener('mouseover', () => {
    // Dalam CSS Anda, Anda bisa membuat kelas 'btn-hover-effect' 
    // untuk sedikit mengubah bayangan atau warna
    startButton.classList.add('btn-hover-effect');
});

startButton.addEventListener('mouseout', () => {
    startButton.classList.remove('btn-hover-effect');
});
