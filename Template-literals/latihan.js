// 1. HTML Fragment
const mhs = {
  nama: "Ahmad",
  umur: 17,
  nrp: "098765432",
  email: "ahmad@gmail.com",
};

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="nrp">${mhs.nrp}</span>
</div>`;

// 2. Looping
const mhs1 = [
  {
    nama: "Ahmad",
    email: "ahmad@gmail.com",
  },
  {
    nama: "Maulana",
    email: "maulana@gmail.com",
  },
  {
    nama: "Asep",
    email: "asep@gmail.com",
  },
];

const el2 = `<div class="mhs">
  ${mhs1
    .map(
      (m) => `<ul>
  <li>${m.nama}</li>
  <li>${m.email}</li>
  </ul>`
    )
    .join("")}
</div>`;

// 3. Conditionals
// ternary
const lagu = {
  judul: "Kau  Adalah",
  penyanyi: "Isyana Sarasvati",
  feat: "Rayi Putra",
};

const el3 = `<div class="lagu">
  <ul>
    <li>${lagu.penyanyi}</li>
    <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
  </ul>
</div>`;

// 4. Nested
// HTML Fragment bersarang

const mhs2 = {
  nama: "Ahmad",
  semester: 5,
  mataKuliah: ["Rekayasa Web", "Analisis dan Perancangan Sistem Informasi", "Pemrograman Sistem Interaktif", "Perancangan Sistem Berorientasi Object"],
};

function cetakMataKuliah(mataKuliah) {
  return `<ol>
    ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
  </ol>`;
}

const el4 = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="semester">Semester : ${mhs2.semester}</span>
  <h4>Mata Kuliah :</h4>
  ${cetakMataKuliah(mhs2.mataKuliah)}
</div>`;

document.body.innerHTML = el4;
