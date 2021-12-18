var tinggi = [170,165,172,180,159,166,165,174,171,155]
console.log("Perulangan Biasa");
for (var i = 1; i<tinggi.length; i++) {
  console.log(tinggi[i]);
}
console.log("");
console.log("Perulangan For Of");
for (let x of tinggi) {
  console.log(x);
}
