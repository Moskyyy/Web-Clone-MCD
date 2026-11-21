// CAROUSEL
const s = [...document.querySelectorAll('.slide')];
const d = document.getElementById('dots');
let i = 0;
let t;

s.forEach((_, n) => {
    const b = document.createElement('button');
    b.onclick = () => go(n);
    d.append(b);
});

function go(n) {
    i = (n + s.length) % s.length;

    s.forEach((e, k) => {
        e.classList.toggle('on', k === i);
    });

    [...d.children].forEach((e, k) => {
        e.classList.toggle('on', k === i);
    });

    clearInterval(t);
    t = setInterval(() => go(i + 1), 5000);
}

document.querySelector('.prev').onclick = () => go(i - 1);
document.querySelector('.next').onclick = () => go(i + 1);

go(0);


// DATA MENU
const CDN = "https://d2vuyvo9qdtgo9.cloudfront.net/";
const SITE = "https://www.mcdonalds.co.id/menu/";

const images = {
    "chicken-muffin": "foods/October2023/UGxWzYmlGDLUpzhrhaBT.webp",
    "sausage-mcmuffin": "foods/October2023/e4uy88JKbOpcdoJ3EXJO.webp",
    "chicken-muffin-with-egg": "foods/October2023/ILs2kh4ej7YjJzIfsf2d.webp",
    "sausage-mcmuffin-with-egg": "foods/October2023/9hn3Gu6SwCg8TNBMaXFr.webp",
    "sausage-wrap": "foods/October2023/l47DeJBbY77Th47JfIAn.webp",
    "big-breakfast": "foods/November2023/moYXCc5o7XBlsQhLAoxr.webp",
    "hotcakes-3-pcs": "foods/October2023/JpZhd7fyCdfzw5ahH1m4.webp",
    "hotcakes-2-pcs": "foods/October2023/jm0GYUcUqJZryNOTIhIw.webp",
    "hashbrown": "foods/October2023/CxinznSnispVQBobjtDt.webp",
    "nasi-uduk-mcd": "foods/October2023/uQSETIkvtYba9RVGHiGe.webp",
    "bubur-ayam-mcd": "foods/October2023/4HzEEvFji2YAKLwrXgXA.webp",
    "big-mac": "foods/October2023/S2b8K7g2tM6cDksrAdVv.webp",
    "double-big-mac": "foods/October2025/Bo5jfXo9zOAUzWnloVKt.webp",
    "triple-cheeseburger": "foods/October2023/juH9i1UfP50Ixlg106UP.webp"
};

const slugOverride = {
    "Paket HeBat McSpaghetti Ayam Krispy McD": "paket-hebat-mcspaghetti-ayam-krispy-mcd-1",
    "Paket HeBat McSpaghetti Ayam Krispy McD, Spicy": "paket-hebat-mcspaghetti-ayam-krispy-mcd-spicy-1"
};

// DATA NUTRISI
// Urutan angka: kalori (kkal), gula (g), garam (mg), lemak (g), lemak jenuh (g)
// Isi angka asli dari website resmi menggantikan null. Pakai titik untuk desimal.
const nutrition = {};
const add = (slug, desc, kcal, sugar, salt, fat, satfat) =>
    nutrition[slug] = { desc, kcal, sugar, salt, fat, satfat };

// Sarapan Pagi
add("chicken-muffin", "Setangkup English muffin hangat dilapisi saus mayonais dengan daging ayam olahan yang digoreng dengan sempurna. Tersedia dari jam 5-11 pagi.", 304.4, 2.3, 552.9, 13.8, 0.0);
add("sausage-mcmuffin",           "English muffin disajikan dengan sosis ayam yang gurih dan selembar keju bernutrisi. Tersedia dari jam 5-11 pagi.", 319.1, 2.2, 779.9, 14.8, 0.0);
add("chicken-muffin-with-egg",    "Setangkup English muffin hangat dilapisi dengan saus mayonais, daging ayam olahan yang digoreng sempurna, telur, dan keju. Tersedia dari jam 5-11 pagi.", 379.8, 2.3, 629.5, 18.6, 0.0);
add("sausage-mcmuffin-with-egg",  "Perpaduan klasik english muffin, sosis ayam khas McDonald's, telur, dan selembar keju bernutrisi. Tersedia dari jam 5-11 pagi.", 394.4, 2.2, 855.8, 19.6, 0.0);
add("sausage-wrap",               "Perpaduan sosis ayam, scrambled egg, dan keju gurih dalam balutan tortilla yang lembut. Tersedia dari jam 5-11 pagi.", 294.3, 1.5, 737.9, 14.7, 0.0);
add("big-breakfast",              "Perpaduan English Muffin panggang yang disajikan dengan sosis ayam gurih, renyahnya Hashbrown serta lembutnya scrambled egg. Tersedia dari jam 5-11 pagi.", 575.4, 10.4, 975.4, 26.3, 0.0);
add("hotcakes-3-pcs",             "3 Panekuk lembut dan hangat berlumur sirup maple dan mentega gurih.", 486.1, 21.9, 669.2, 8.4, 0.0);
add("hotcakes-2-pcs",             "2 Panekuk lembut dan hangat berlumur sirup maple dan mentega gurih.", 368.7, 19.9, 449.9, 7.6, 0.0);
add("hashbrown",                  "Potongan kentang gurih yang digoreng keemasan. Tersedia jam 5-11 pagi.", 135.5, 0.0, 247.9, 7.4, 0.0);
add("nasi-uduk-mcd",              "Nasi Uduk gurih dengan sambal terasi, scrambled egg, bawang goreng dan makin lengkap dengan suwiran ayam.", 367.3, 4.8, 1144.6, 9.6, 0.0);
add("bubur-ayam-mcd",             "Bubur ayam klasik disajikan dengan seledri dan bawang goreng renyah. Tersedia jam 5-11 pagi.", 191.2, 0.6, 1552.6, 5.1, 0.0);

// Daging Sapi
add("big-mac",                    "Burger Ikonik McDonald's. Dua lapis daging sapi gurih disajikan dengan saus spesial, selada segar, keju, acar timun, bawang, diapit roti bertabur wijen.", 528.8, 8.3, 876.8, 25.4, 0.0);
add("double-big-mac",             "Burger Ikonik McDonald's. Empat lapis daging sapi gurih disajikan dengan saus spesial, selada segar, keju, acar timun, bawang, diapit roti bertabur wijen.", 737.2, 9.6, 1062.3, 39.1, 0.0);
add("triple-cheeseburger",        "Perpaduan roti burger dengan 3 lapisan daging gurih berasal dari 100% daging sapi Australia dan 3 lapis keju, saus tomat, acar, potongan bawang dan mustard.", 542.2, 6.5, 1075.2, 30.3, 0.0);

const NOTE = "Informasi nutrisi ini berasal dari pengujian yang dilakukan di laboratorium terakreditasi, sumber yang diterbitkan, dan/atau informasi yang diberikan oleh pemasok McDonald’s Indonesia. Variasi dalam ukuran porsi, teknik persiapan, dan sumber pasokan dapat mempengaruhi nilai nutrisi dari setiap item menu.";

const data = {
    "Sarapan Pagi": ["🥪", [
        "Chicken Muffin",
        "Sausage McMuffin",
        "Chicken Muffin with Egg",
        "Sausage McMuffin with Egg",
        "Sausage Wrap",
        "Big Breakfast",
        "Hotcakes 3 pcs",
        "Hotcakes 2 pcs",
        "Hashbrown",
        "Nasi Uduk McD",
        "Bubur Ayam McD"
    ]],

    "Daging Sapi": ["🍔", [
        "Big Mac®",
        "Double Big Mac",
        "Triple Cheeseburger"
    ]]
};

const slug = s => s.replace(/\s+/g, "-");

const toSlug = n => slugOverride[n] ||
    n.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/['’]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

const cats = document.getElementById("cats");
const menu = document.getElementById("menu");

for (const [name, [icon, items]] of Object.entries(data)) {
    cats.insertAdjacentHTML(
        "beforeend",
        `<a href="#${slug(name)}">${name}</a>`
    );

    if (!items.length) continue;

    menu.insertAdjacentHTML(
        "beforeend",
        `<section id="${slug(name)}">
            <h2>${name}</h2>
            <div class="grid">` +

        items.map(item => {
            const sl = toSlug(item);
            const img = images[sl];

            const th = img
                ? `<div class="thumb has">
                    <img loading="lazy"
                        src="${CDN + img}"
                        alt="${item}"
                        onerror="this.parentNode.className='thumb';this.outerHTML='<em>${icon}</em>'">
                   </div>`
                : `<div class="thumb"><em>${icon}</em></div>`;

            return `<a class="item"
                data-name="${item}"
                data-slug="${sl}"
                href="${SITE + sl}"
                target="_blank"
                rel="noopener">
                ${th}
                <span>${item}</span>
            </a>`;
        }).join("") +

        `</div></section>`
    );
}

const links = [...cats.children];

function mark() {
    const h = location.hash.slice(1) || "Sarapan-Pagi";

    links.forEach(a => {
        a.classList.toggle(
            "on",
            a.getAttribute("href") === "#" +
            decodeURIComponent(h).replace(/\s+/g, "-")
        );
    });
}

addEventListener("hashchange", mark);
mark();


// MODAL NUTRISI
const nmOverlay = document.getElementById("nmOverlay");
const nmBody = document.getElementById("nmBody");
const nmClose = document.getElementById("nmClose");
let lastFocus = null;
let currentItem = null;

const fmt = n => n == null
    ? "–"
    : n.toLocaleString("id-ID", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });

function box(value, unit, label) {
    return `<div class="nm-box">
        <div class="nm-val">${fmt(value)}<sup>${unit}</sup></div>
        <span class="nm-label">${label}</span>
    </div>`;
}

function openNutrition(name, sl) {
    const n = nutrition[sl];
    const hasData = n && n.kcal != null;

    currentItem = { name, slug: sl };

    const actions = `<div class="nm-actions">
        <button class="btn nm-add" type="button" data-act="add">🛒 Keranjang</button>
        <button class="btn red" type="button" data-act="order">Pesan Sekarang</button>
    </div>`;

    nmBody.innerHTML = hasData
        ? `<h2 class="nm-title" id="nmTitle">${name}</h2>
           <p class="nm-desc">${n.desc || ""}</p>
           <div class="nm-card">
               <h3>Kandungan Nutrisi</h3>
               <div class="nm-grid">
                   ${box(n.kcal, "kkal", "Kalori")}
                   ${box(n.sugar, "g", "Gula")}
                   ${box(n.salt, "mg", "Garam")}
                   ${box(n.fat, "g", "Lemak")}
                   ${box(n.satfat, "g", "Lemak Jenuh")}
               </div>
               <p class="nm-note">${NOTE}</p>
           </div>
           ${actions}`
        : `<h2 class="nm-title" id="nmTitle">${name}</h2>
           <div class="nm-card nm-empty" style="margin-top:24px">
               <p>Informasi nutrisi untuk menu ini belum tersedia.</p>
               <a class="btn red" href="${SITE + sl}" target="_blank" rel="noopener">
                   Lihat di website resmi
               </a>
           </div>
           ${actions}`;

    lastFocus = document.activeElement;
    nmOverlay.classList.add("open");
    nmOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("nm-lock");
    nmClose.focus();
}

function closeNutrition() {
    nmOverlay.classList.remove("open");
    nmOverlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("nm-lock");
    if (lastFocus) lastFocus.focus();
}

menu.addEventListener("click", e => {
    const a = e.target.closest(".item");
    if (!a) return;
    e.preventDefault();
    openNutrition(a.dataset.name, a.dataset.slug);
});

nmClose.addEventListener("click", closeNutrition);

nmOverlay.addEventListener("click", e => {
    if (e.target === nmOverlay) closeNutrition();
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape" && nmOverlay.classList.contains("open")) {
        closeNutrition();
    }
});


// KERANJANG PESANAN
const cartOverlay = document.getElementById("cartOverlay");
const cartList = document.getElementById("cartList");
const cartCount = document.getElementById("cartCount");
const cartBtn = document.getElementById("cartBtn");
const cartClose = document.getElementById("cartClose");
const cartClear = document.getElementById("cartClear");
const cartCheckout = document.getElementById("cartCheckout");
const CART_KEY = "mcd_cart";

let cart = [];

try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY));
    if (Array.isArray(saved)) {
        cart = saved.filter(x => x && x.slug && x.name && x.qty > 0);
    }
} catch (err) {}

function saveCart() {
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (err) {}
}

function syncLock() {
    document.body.classList.toggle(
        "nm-lock",
        nmOverlay.classList.contains("open") ||
        cartOverlay.classList.contains("open")
    );
}

function renderCart() {
    const total = cart.reduce((sum, x) => sum + x.qty, 0);

    cartCount.textContent = total;
    cartCount.hidden = total === 0;
    cartClear.hidden = total === 0;
    cartCheckout.hidden = total === 0;

    cartList.innerHTML = total === 0
        ? `<p class="cart-empty">Keranjang masih kosong.<br>Klik sebuah menu lalu pilih “Keranjang”.</p>`
        : cart.map(x => {
            const img = images[x.slug];

            return `<div class="cart-row" data-slug="${x.slug}">
                ${img
                    ? `<img src="${CDN + img}" alt="">`
                    : `<span class="cart-ph">🍔</span>`}
                <div class="cart-name">${x.name}</div>
                <div class="cart-qty">
                    <button type="button" data-act="dec" aria-label="Kurangi">−</button>
                    <span>${x.qty}</span>
                    <button type="button" data-act="inc" aria-label="Tambah">+</button>
                </div>
                <button type="button" class="cart-del" data-act="del" aria-label="Hapus">&times;</button>
            </div>`;
        }).join("");
}

function addToCart(item) {
    const found = cart.find(x => x.slug === item.slug);

    if (found) {
        found.qty++;
    } else {
        cart.push({ slug: item.slug, name: item.name, qty: 1 });
    }

    saveCart();
    renderCart();
}

function openCart() {
    lastFocus = document.activeElement;
    cartOverlay.classList.add("open");
    cartOverlay.setAttribute("aria-hidden", "false");
    syncLock();
    cartClose.focus();
}

function closeCart() {
    cartOverlay.classList.remove("open");
    cartOverlay.setAttribute("aria-hidden", "true");
    syncLock();
    if (lastFocus) lastFocus.focus();
}

// Tombol "Keranjang" & "Pesan Sekarang" di dalam popup nutrisi
nmBody.addEventListener("click", e => {
    const b = e.target.closest("button[data-act]");
    if (!b || !currentItem) return;

    addToCart(currentItem);

    if (b.dataset.act === "order") {
        closeNutrition();
        openCart();
    } else {
        const old = b.innerHTML;
        b.textContent = "✓ Ditambahkan";
        setTimeout(() => { b.innerHTML = old; }, 1200);
    }
});

// Ubah jumlah / hapus item di dalam keranjang
cartList.addEventListener("click", e => {
    const b = e.target.closest("button[data-act]");
    const row = e.target.closest(".cart-row");
    if (!b || !row) return;

    const item = cart.find(x => x.slug === row.dataset.slug);
    if (!item) return;

    if (b.dataset.act === "inc") item.qty++;
    if (b.dataset.act === "dec") item.qty--;
    if (b.dataset.act === "del") item.qty = 0;

    cart = cart.filter(x => x.qty > 0);
    saveCart();
    renderCart();
});

cartBtn.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);

cartClear.addEventListener("click", () => {
    cart = [];
    saveCart();
    renderCart();
});

cartOverlay.addEventListener("click", e => {
    if (e.target === cartOverlay) closeCart();
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape" && cartOverlay.classList.contains("open")) {
        closeCart();
    }
});

renderCart();


// VALIDASI FORM KONTAK
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("contactName");
    const email = document.getElementById("contactEmail");
    const telepon = document.getElementById("contactPhone");
    const pesan = document.getElementById("contactMessage");

    nama.value = nama.value.trim();
    email.value = email.value.trim();
    telepon.value = telepon.value.trim();
    pesan.value = pesan.value.trim();

    formStatus.textContent = "";
    formStatus.className = "form-status";

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();

        formStatus.textContent =
            "Periksa kembali data yang kamu masukkan.";

        formStatus.classList.add("error");
        return;
    }

    formStatus.textContent =
        "Pesan berhasil dikirim! Terima kasih sudah menghubungi kami.";

    formStatus.classList.add("success");
    contactForm.reset();
});