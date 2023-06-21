// rest parameter
// function myFunc() {
//   // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`
//   // return myArgs;
//   // return Array.from(arguments);
//   return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   // let total = 0;
//   // for (const a of angka) {
//   //   total += a;
//   // }
//   // return total;
//   return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ["Ahmad", "Maulana", "Asep"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log();

// object destructuring
// const team = {
//   pm: "Ahmad",
//   frontEnd: "Maulana",
//   backEnd: "Asep",
//   ux: "Hendra",
//   devOps: "Ferry",
// };
// const { pm, ...myTeam } = team;
// console.log(myTeam);

// filter
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}
console.log(filterBy("boolean", 1, 2, "Maulana", false, 10, true, "Ahmad"));
