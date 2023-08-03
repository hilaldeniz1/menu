import { buttonsData, menu } from "./db.js";
import { calculatePrice } from "./helpers.js";

// html den gelenler
const menuArea = document.getElementById("menu-area");
const buttonsArea = document.getElementById("buttons-area");

// sayfanın yüklenme olayını izleme
// yüklendigi anda ekrana menü elemanları basma fonksıyonu calıstır
document.addEventListener("DOMContentLoaded", () => {
  renderButtons("all");
  renderMenuItems(menu);
});

// butonlar kısmında tıklanma olaylarını ızler
buttonsArea.addEventListener("click", searchCategory);

//!ekrana menu elemanlarını basar
function renderMenuItems(menuItems) {
  //   dizideki her bir obje icin
  // bir elemanını temsıl eden html olustur
  // bu html i bir diziye aktar
  // stringe cevır

  let menuHtml = menuItems.map((item) => {
    return `
  <a href="/productDetail.html?id=${item.id}"
  id="card"
  class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
>
  <img
    class="rounded shadow"
    src=${item.img}
  />

  <div>
    <div class="d-flex justify-content-between">
      <h5>${item.title}</h5>
      <p class="text-success">&#8378;${calculatePrice(item.price)}</p>
    </div>
    <p class="lead">
     ${item.desc}
    </p>
  </div>
</a>
  `;
  });
  //diziyi stringe cevır
  menuHtml = menuHtml.join(" ");

  //   olusturdugumuz html i ekrana bas
  menuArea.innerHTML = menuHtml;
}

// !filtreleme
// tıklanılan butona gore ekrana o butonun karetorısine ait
// ürünleri listeler
function searchCategory(e) {
  const category = e.target.dataset.category;

  //   tüm dizi elemanlarından yalnızca kategori degeri
  // butonun kategorı degerıyle eslesenlerı getır
  const filtredMenu = menu.filter((item) => item.category === category);

  //   hepsi secılırse o zaman butun menuyu ekrana bas
  if (category === "all") {
    renderMenuItems(menu);
  } else {
    //   filtrelenmıs dızıyı ekrana basma
    renderMenuItems(filtredMenu);
  }

  // butonları guncelle
  renderButtons(category);
}

// !ekrana butonları basacak fonksiyon
function renderButtons(active) {
  // eski butonları kaldırma
  buttonsArea.innerHTML = " ";

  // yeni butonlar olusturma
  buttonsData.forEach((btn) => {
    // html butonu olusturma
    const buttonEle = document.createElement("button");
    // gerekli classları verme
    buttonEle.className = "btn btn-outline-dark filter-btn";

    // icerisindeki yazıyı degıstırme
    buttonEle.innerText = btn.text;

    // hangi kategori oldugu bılgısını buton elementıne ekleme
    buttonEle.dataset.category = btn.value;

    // egerki aktif kategorıyle buton eslesırse ona farklı class ver
    if (btn.value === active) {
      buttonEle.classList.add("bg-dark", "text-light");
    }

    // html e gonderme
    buttonsArea.appendChild(buttonEle);
  });
}
