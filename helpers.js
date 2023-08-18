// fiyat hesaplama fonksiyonu
export function calculatePrice(price) {
  // fiyatın 15 katını alma
  let newPrice = price * 15;

  // .' dan iki basamak ile sınırlama
  newPrice = newPrice.toFixed(2);

  return newPrice;
}
