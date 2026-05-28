// Fungsi untuk memfilter/memilih kategori lomba
function filterLomba(kategori) {

    // Mengambil semua card lomba
    const cards = document.querySelectorAll(".profil-cards .card");
    
    // Mengulang semua card satu per satu
    cards.forEach(card => {

        // Jika kategori yang dipilih adalah "semua"
        if (kategori === 'semua') {

            // Maka semua card ditampilkan
            card.style.display = "block"; 

        } else {

            // Mengecek apakah card memiliki class sesuai kategori
            if (card.classList.contains(kategori)) {

                // Jika sesuai kategori maka card ditampilkan
                card.style.display = "block"; 

            } else {

                // Jika tidak sesuai kategori maka card disembunyikan
                card.style.display = "none"; 

            }
        }
    });

    // Mengambil semua tombol filter
    const filterButtons = document.querySelectorAll(".filter-btn");

    // Menghapus class aktif dari semua tombol
    filterButtons.forEach(btn => btn.classList.remove("btn-active"));
    
    // Mengecek apakah tombol ditekan
    if (event && event.target) {

        // Menambahkan class aktif ke tombol yang dipencet
        event.target.classList.add("btn-active");

    }
}