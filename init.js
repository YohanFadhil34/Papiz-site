
// Daftar gambar background
const heroImages = [
    '../asset/img/bg.jpg',
    '../asset/img/bg2.jpg',
    '../asset/img/bg3.jpg'
];

let currentImageIndex = 0;
const heroElement = document.querySelector('.hero');

// Function to change background image
function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    heroElement.style.backgroundImage = `url(${heroImages[currentImageIndex]})`;
}

// Change image every 5 seconds (5000 ms)
setInterval(changeBackgroundImage, 5000);


// Whatsapp API Request
document.getElementById('whatsappForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form dikirim dengan cara biasa

    // Ambil nilai dari form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Format pesan WhatsApp
    var whatsappMessage = `Halo, saya ${name}.\nEmail: ${email}.\nPesan: ${message}`;

    // Encode pesan agar sesuai untuk URL
    var encodedMessage = encodeURIComponent(whatsappMessage);

    // Nomor WhatsApp (ganti dengan nomor Anda)
    var phoneNumber = "6285214255904"; // Ganti dengan nomor WhatsApp Anda, gunakan format internasional

    // Buat URL WhatsApp
    var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Buka URL di tab baru
    window.open(whatsappURL, '_blank');
});


// Gmail API Request
// (function () {
//     emailjs.init("yohanfadhillah05@gmail.com"); // Ganti dengan User ID Anda
// })();

// document.getElementById('emailForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Mencegah form dikirim dengan cara biasa

//     // Ambil nilai dari form
//     var name = document.getElementById('fullName').value;
//     var email = document.getElementById('email_id').value;
//     var message = document.getElementById('message').value;

//     // Format pesan
//     var emailMessage = `Halo, saya ${name}.\nEmail: ${email}.\nPesan: ${message}`;

//     // Kirim email
//     emailjs.send("service_sp152zl", "template_c5ewbl1", {
//         from_name: name,
//         from_email: email,
//         message: emailMessage
//     })
//         .then(function (response) {
//             alert("Pesan berhasil dikirim!");
//         }, function (error) {
//             alert("Terjadi kesalahan: " + error);
//         });
// });


// function SendMail() {
//     var params = {
//         from_name: document.getElementById("fullName").value,
//         email_id: document.getElementById("email_id").value,
//         message: document.getElementById("message").value,
//     }
//     emailjs.send("service_sp152zl", "template_c5ewbl1", params).then(function (res) {
//         alert("Succes! " + res.status);
//     })
// }



// animoation
document.querySelectorAll('.footer-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Smooth scrolling
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});