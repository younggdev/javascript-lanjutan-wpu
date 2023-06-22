// // $.ajax({
// //   url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
// //   success: (movies) => console.log(movies),
// // });

// // const xhr = new XMLHttpRequest();
// // xhr.onreadystatechange = function () {
// //   if (xhr.status === 200) {
// //     if (xhr.readyState === 4) {
// //       console.log(JSON.parse(xhr.response));
// //     }
// //   } else {
// //     console.log(xhr.responseText);
// //   }
// // };
// // xhr.open("get", "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers");
// // xhr.send();

// // fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers")
// //   .then((response) => response.json())
// //   .then((response) => console.log(response));

// // promise
// // object yg merepresentasikan keberhasilan / kegagalan sebuah event yg asynchronous di masa yg akan datang
// // janji (terpenuhi / ingkar)
// // states (fullfield / rejected / pending)
// // callback (resolve / reject / finally)
// // aksi (then / catch)

// // contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati");
//   } else {
//     reject("Ingkar janji...");
//   }
// });
// janji1.then((response) => console.log("OK : " + response)).catch((response) => console.log("NOT OK : " + response));

// contoh 2
let ditepati = false;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("Ditepati setelah beberapa waktu");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Tidak ditepati setelah beberapa waktu");
    }, 2000);
  }
});

console.log("Mulai");
// console.log(janji2.then(() => console.log(janji2)));
janji2.then((response) => console.log("OK : " + response)).catch((response) => console.log("NOT OK : " + response));
console.log("Selesai");
