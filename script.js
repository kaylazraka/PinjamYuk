
// Mengambil elemen pencarian
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// Mengambil semua kartu barang dan tombol kategori
const productCards = document.querySelectorAll(".product-card");
const categoryButtons = document.querySelectorAll(".category-btn");

// Menyimpan kategori yang sedang dipilih
let selectedCategory = "Semua";

// Fungsi untuk mencari dan menampilkan barang
function filterProducts() {
    const keyword = searchInput.value.toLowerCase();

    productCards.forEach((card) => {
        const productName = card.querySelector("h3").textContent.toLowerCase();
        const productCategory = card.dataset.category;

        const matchName = productName.includes(keyword);
        const matchCategory =
            selectedCategory === "Semua" ||
            productCategory === selectedCategory;

        // Barang ditampilkan jika nama dan kategori sesuai
        if (matchName && matchCategory) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

// Tombol pencarian
searchButton.addEventListener("click", filterProducts);

// Pencarian langsung ketika pengguna mengetik
searchInput.addEventListener("input", filterProducts);

// Pencarian juga bisa menggunakan tombol Enter
searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        filterProducts();
    }
});

// Mengatur filter kategori
categoryButtons.forEach((button) => {
    button.addEventListener("click", function() {

        // Menghapus status aktif dari semua kategori
        categoryButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Memberikan status aktif pada kategori terpilih
        this.classList.add("active");

        selectedCategory = this.dataset.category;

        // Memperbarui daftar barang
        filterProducts();
    });
});

// Interaksi tombol Pinjam
const borrowButtons = document.querySelectorAll(".borrow-btn");

borrowButtons.forEach((button) => {
    button.addEventListener("click", function() {

        const card = this.closest(".product-card");
        const productName = card.querySelector("h3").textContent;

        // Menampilkan konfirmasi peminjaman
        const confirmation = confirm(
            "Apakah kamu ingin meminjam " + productName + "?"
        );

        if (confirmation) {
            alert(
                "Pengajuan peminjaman " + productName +
                " berhasil dipilih!"
            );
        }

    });
});
