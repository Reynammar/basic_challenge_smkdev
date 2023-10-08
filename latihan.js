function checkCats(CatsTuti, CatsNining) {
  const allCats = CatsTuti.slice(1, -2).concat(CatsNining);

  allCats.forEach((age, index) => {
    const catNumber = index + 1;
    const status = age >= 3 ? "Kucing Dewasa" : "Kucing Anak-Anak";
    console.log(`Kucing Nomor ${catNumber} adalah ${status}, dan berusia ${age} tahun`);
  });
}

// Data uji 1
const DataTuti1 = [3, 5, 2, 12, 7];
const DataNining1 = [4, 1, 15, 8, 3];

console.log("Data uji 1:");
checkCats(DataTuti1, DataNining1);

// Data uji 2
const DataTuti2 = [9, 16, 6, 8, 3];
const DataNining2 = [10, 5, 6, 1, 4];

console.log("Data uji 2:");
checkCats(DataTuti2, DataNining2);
