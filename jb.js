const accounts = {
    ff: [
        {
            name: '(Akun no 1) Akun Vauld 510',
            img: 'Akun_FF01.jpg',
            status: 'available',
            price: 'Rp 300.000 (Nego)',
            loginMethod: 'FB'
        },
        {
            name: '(Akun no 2) Vauld 268 + Bundle Venom',
            img: 'Akun02.jpg',
            status: 'available',
            price: 'Rp 125.000 (Nego)',
            loginMethod: 'FB'
        },
        {
            name: '(Akun no 3) Vauld ??+ ??',
            img: 'maaf stock Habis.jpg',
            status: 'available',
            price: 'Rp ?? (Nego)',
            loginMethod: 'FB'
        }
    ],
    ml: [
        {
            name: 'Akun Kolektor + Emblem MAX',
            img: 'Akun_ML01.jpg',
            status: 'soldout',
            price: 'Rp 1,3JT (Nego)',
            loginMethod: 'FB'
        },
        {
            name: 'Akun Epic + 5 Skin',
            img: 'maaf stock Habis.jpg',
            status: 'available',
            price: 'Rp ??',
            loginMethod: 'FB'
        }
    ],
    coc: [
        {
            name: 'Akun TH 12 + Stock Pribadi',
            img: 'Akun_Coc01.jpg',
            status: 'soldout',
            price: 'Rp 110.000 (Nego)',
            loginMethod: 'Google'
        },
        {
            name: 'Akun TH 10 + 3 Skin',
            img: 'maaf stock Habis.jpg',
            status: 'available',
            price: 'Rp ??',
            loginMethod: 'Google'
        }
    ]
};

// Fungsi untuk menampilkan akun sesuai game yang dipilih
function showAccounts(game) {
    let display = document.getElementById('display');
    display.innerHTML = ''; // Menghapus konten lama

    // Jika game adalah Instagram, YouTube, atau TikTok, tampilkan pesan Coming Soon
    if (game === 'ig' || game === 'yt' || game === 'tt') {
        display.innerHTML = `<h2>Coming Soon...!!!</h2><p>Akun untuk ${game.toUpperCase()} akan segera tersedia. Stay tuned!</p>`;
        return;
    }

    const accountList = document.createElement('div');
    accountList.className = 'account-list';

    accounts[game].forEach((account, index) => {
        const accountItem = document.createElement('div');
        accountItem.className = 'account-item';

        let statusLabel = '';
        let orderButton = '';
        let chatButton = '';

        if (account.status === 'soldout') {
            statusLabel = `<span class="soldout">Sold Out</span>`;
        } else {
            // Tombol untuk pesan akun
            orderButton = `<a href="https://wa.me/+62 838-6211-6142?text=Saya%20mau%20beli%20akun%20${game}%20no%20${index + 1}" class="order-button">Pesan Akun</a>`;
            // Tombol untuk chat admin
            chatButton = `<button class="chat-button" onclick="openChatModal(${index}, '${game}')">Chat Admin</button>`;
        }

        accountItem.innerHTML = `
            <img src="${account.img}" alt="${account.name}">
            <h3>${account.name}</h3>
            <p class="price">${account.price}</p>
            <p class="login-method">Login via: ${account.loginMethod}</p>
            ${statusLabel}
            ${orderButton}
            ${chatButton}
        `;

        accountList.appendChild(accountItem);
    });

    display.appendChild(accountList);
}

// Fungsi untuk menampilkan instruksi pembelian
function showInstructions() {
    let display = document.getElementById('display');
    display.innerHTML = `Tata cara pembelian:\n
    1. Pilih akun yang diinginkan.\n
    2. Ikuti petunjuk pada layar.\n
    3. Jangan lupa screenshot akun yang tersedia yang diinginkan.\n
    4. Klik "Pesan Akun" pada akun yang diinginkan.\n
    5. Jangan lupa tanyakan dulu spesifikasi, metode pembayaran atau keaslian akun.\n
    6. Jangan malu atau ragu bertanya karena nanti bisa tersesat di jalan.\n
    7. Klik tombol "Chat Admin" untuk menghubungi MC-nya.\n
    8. Selesaikan transaksi dengan baik.`;
}

// Fungsi untuk membuka modal chat dan memilih admin
function openChatModal(index, game) {
    const selectedAccount = accounts[game][index];
    const modal = document.getElementById('adminModal');
    modal.style.display = "block";

    modal.querySelector('.modal-content').innerHTML = `
        <h2>Chat dengan Admin</h2>
        <p>Anda tertarik untuk membeli akun: <strong>${selectedAccount.name}</strong></p>
        <p>Pilih Admin untuk menghubungi:</p>
        <button class="admin-btn" onclick="chatWithAdmin('admin1', '${selectedAccount.name}')">Chat dengan Admin 1 (Taufik)</button>
        <button class="admin-btn" onclick="chatWithAdmin('admin2', '${selectedAccount.name}')">Chat dengan Admin 2 (butuh admin ke 2)</button>
        <button class="order-button" onclick="closeModal()">Tutup</button>
    `;
}

// Fungsi untuk mengarahkan chat ke admin yang dipilih
function chatWithAdmin(admin, accountName) {
    let phoneNumber = '';
    let adminName = '';
    
    if (admin === 'admin1') {
        phoneNumber = '+62 858-6043-1612'; // Admin 1 Phone
        adminName = 'Taufik (Admin 1)';
    } else if (admin === 'admin2') {
        phoneNumber = '+62 838-6211-6142'; // Admin 2 Phone
        adminName = '??(Admin 2)';
    }

    const message = `Halo, saya tertarik untuk membeli akun: ${accountName}. Mohon info lebih lanjut.`;
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    alert(`Menghubungi ${adminName}`);
}

// Modal Chat Admin (Menambahkan Modal)
const modal = document.getElementById('adminModal');
const closeModalButton = document.querySelector('.close');

// Fungsi untuk menutup modal
function closeModal() {
    modal.style.display = "none";
}

// Event listener untuk menutup modal chat saat klik tombol "close"
closeModalButton.addEventListener('click', closeModal);

// Menutup modal jika pengguna mengklik area luar modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Dark Mode Toggle
const toggleButton = document.getElementById('toggleMode');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '🌙';
        localStorage.setItem('mode', 'dark');
    } else {
        toggleButton.textContent = '☀'; 
        localStorage.setItem('mode', 'light');
    }
});

window.onload = () => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        toggleButton.textContent = '🌙';
    } else {
        body.classList.add('light-mode');
        toggleButton.textContent = '☀'; 
    }
};

// Profil Picture Zoom Functionality
const profilePic = document.getElementById('profile-pic');
const profileLink = document.getElementById('profile-link');

profileLink.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tautan membuka gambar
    profilePic.classList.toggle('zoomed');
});
