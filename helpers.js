// fiyat hesaplama fonksiyonu
export function calculatePrice(price) {
  // fiyatın 15 katını alma
  let newPrice = price * 15;

  //  .dan sonra ıkı basamak ıle sınırlama
  newPrice = newPrice.toFixed(2);

  return newPrice;
}
