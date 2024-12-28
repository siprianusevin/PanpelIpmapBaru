 // Notifikasi pop-up saat halaman dimuatdocument.addEventListener("DOMContentLoaded", () => {
  // Notifikasi pop-up saat halaman dimuat
    // Notifikasi pop-up saat halaman dimuatalert("Klik di mana saja pada halaman untuk memulai musik!");

  // 1. Referensi Elemen Audio
   // Notifikasi pop-up saat halaman dimuat const audioElement = document.getElementById("backgroundAudio");

    // Notifikasi pop-up saat halaman dimuatif (audioElement) {
    // Fungsi untuk memulai audio
    // Notifikasi pop-up saat halaman dimuat  const playAudio = () => {
     // Notifikasi pop-up saat halaman dimuat   audioElement.play();
      document.body.removeEventListener("click", playAudio); // Hapus listener setelah klik pertama
      // Notifikasi pop-up saat halaman dimuat};

    // Tambahkan Event Listener untuk klik di body
      // Notifikasi pop-up saat halaman dimuatdocument.body.addEventListener("click", playAudio);
    // Notifikasi pop-up saat halaman dimuat} else {
    // Notifikasi pop-up saat halaman dimuat  console.error("Elemen audio tidak ditemukan.");
    // Notifikasi pop-up saat halaman dimuat}
  // Notifikasi pop-up saat halaman dimuat});

