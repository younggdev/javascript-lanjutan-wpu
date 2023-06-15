// Tagged templates
const nama = "Ahmad",
  umur = 17;

function coba(strings, ...values) {
  // let result = "";
  // strings.forEach((str, i) => {
  //   result += `${str}${values[i] || ""}`;
  // });
  // return result;

  return strings.reduce((result, str, i) => `${result}${str}${values[i] || ""}`, "");
}

const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
console.log(str);

// highlight
const nama1 = "Ahmad",
  umur1 = 17,
  email = "ahmad@gmail.com";

function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`, "");
}

const str1 = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya ${email}`;
document.body.innerHTML = str1;
