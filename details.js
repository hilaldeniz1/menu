import { menu } from "./db.js";
import { calculatePrice } from "./helpers.js";
// html de arayuzu gonderecegımız yer
const outlet = document.getElementById("outlet");

/*url de ki parametreli yönetebilmek icin URLSearchParams classında bir ornek olusturduk
ornegı olustururken kendı url mızdekı parametrelerı gonderdık*/

const searchParams = new URLSearchParams(window.location.search);

//* get methodu aracılıgıyla urldekı id parametresine eristik
const paramid = searchParams.get("id");

//! menu ıcerısınden id sini bildiğimiz elemana erisme
const product = menu.find((item) => item.id === Number(paramid));

// buldugumuz urune gore arayuzu ekrana basma
outlet.innerHTML = `
<div class="d-flex justify-content-between align-items-center">
<a href="/">
        <i class="bi bi-house fs-1"></i>
      </a>
      <div>
      anasayfa / ${product.category}  / ${product.title.toLocaleLowerCase()}
      </div>
</div>


      <h1 class="text-center my-3 shadow p-2 text-dark">
        ${product.title}
      </h1>
      <div class="d-flex align-items-center justify-content-center">
        <img
          class="img-fluid rounded shadow -lg"
          src="${product.img}"
          style="max-width: 500px"
        />
      </div>
      <div>
      <h3 class="my-5">
      Ürünün Kategorisi:
      <span class="text-success">${product.category}</span>
    
      </h3>
      <h3 class="my-5">
        Ürünün Fiyatı: ${calculatePrice(
          product.price
        )} <span class="text-success"> &#8378;</span>
      </h3>
      </div>
     
      <p class="lead fs-3">
      ${product.desc}
      </p>
`;
