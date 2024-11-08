const accounts = {
    ff: [{
        name: 'Akun SG Meteor + Polosan  (Login:FB)',
        img: 'akun01.jpg',
        status: 'soldout'  // status bisa 'soldout' atau 'available'
    },
    {
        name: '(Akun no 2) Vauld 268 + Bundle Venom  (Login:FB)',
        img: 'Akun02.jpg',
        status: 'available'
    }],
    ml: [{
        name: 'Akun Kolektor + Emblem MAX (Login:FB)',
        img: 'Akun_ML01.jpg',
        status: 'soldout'
    },
    {
        name: 'Akun Epic + 5 Skin',
        img: 'foto slot kosong.jpg',
        status: 'available'
    }],
    coc: [{
        name: 'Akun TH 12 + Stock Pribadi (Login:Google)',
        img: 'Akun_Coc01.jpg',
        status: 'soldout'
    },
    {
        name: 'Akun TH 10 + 20 Skin',
        img: 'foto slot kosong.jpg',
        status: 'available'
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
    3.jangan lupa ss akun yang tersedia yang diinginkan.\n
    4. klik "pesan akun" pada akun yang diinginkan.\n
    5..jangan lupa tanyakan dulu spesifikasi, metode pembayaran atau keaslian akun\n
    6.jangan malu atau ragu bertanya karna nanti bisa tersesat di jalan.\n
    7. klik tombol "chat admin" untuk menghubungi mc nya\n
    8. Selesaikan transaksi.`;
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