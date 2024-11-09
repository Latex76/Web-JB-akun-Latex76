const accounts = {
    ff: [{
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
            
    }],
    ml: [{
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
    }],
    coc: [{
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
    }]
};

function showAccounts(game) {
    let display = document.getElementById('display');
    display.innerHTML = '';

    const accountList = document.createElement('div');
    accountList.className = 'account-list';

    accounts[game].forEach((account, index) => {
        const accountItem = document.createElement('div');
        accountItem.className = 'account-item';

        let statusLabel = '';
        let orderButton = '';
        let chatButton = '';  // Hapus tombol chat jika akun sold out

        if (account.status === 'soldout') {
            statusLabel = `<span class="soldout">Sold Out</span>`; // Label "Sold Out"
        } else {
            // Tombol Order untuk akun yang tersedia
            orderButton = `<a href="https://wa.me/+62 838-6211-6142?text=Saya%20mau%20beli%20akun%20${game}%20no%20${index + 1}" class="order-button">Pesan Akun</a>`; 
            
            // Tombol chat Admin untuk akun yang tersedia
            chatButton = `<a href="https://wa.me/+62 858-6043-1612" class="chat-button">Chat Admin/MC</a>`;
        }

        accountItem.innerHTML = `
            <img src="${account.img}" alt="${account.name}">
            <p>${account.name}</p>
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

const profilePic = document.getElementById('profile-pic');
const profileLink = document.getElementById('profile-link');

profileLink.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tautan membuka gambar
    profilePic.classList.toggle('zoomed');
});

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
