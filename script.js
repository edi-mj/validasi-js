// Array untuk menampung akun yg berupa element tr
const dataAkun = [];

const tambah = document.querySelector("button#tambah");

const hapus = document.querySelector("button#hapus");
hapus.style.display = "none"; // saat tabel masih kosong tombol hapus akan disembunyikan

// Event Handling ketika user menekan tombol tambah
tambah.addEventListener("click", function () {

  // regex aturan nama user hanya boleh mengandung alfabet dengan minimal 3 karakter
  const usernamePatt = /^[a-z]{3,}$/i;

  // menerima masukan user name menggunakan kotak dialog
  let username = prompt(
    "Masukkan Username: \n(hanya boleh mengandung huruf alfabet)"
  );

  while (!usernamePatt.test(username)) {
    alert("Username tidak valid");
    username = prompt(
      "Masukkan Username: \n(hanya boleh mengandung huruf alfabet)"
    );
  }

  const passwordPatt = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  let password = prompt(
    "Masukkan Password : \n(Minimal 8 karakter dengan kombinasi huruf kecil, huruf kapital, dan angka) \n(contoh: Edimj244)"
  );

  while (!passwordPatt.test(password) && password != null) {
    alert("Password tidak valid");
    password = prompt(
      "Masukkan Password : \n(Minimal 8 karakter dengan kombinasi huruf kecil, huruf kapital, dan angka) \n(contoh: Edimj244)"
    );
  }

  if (username !== null && password !== null){

  const tdUserName = document.createElement("td");
  const textUserName = document.createTextNode(username);
  tdUserName.appendChild(textUserName);

  const tdPassword = document.createElement("td");
  const textPassword = document.createTextNode(password);
  tdPassword.appendChild(textPassword);

  const tr = document.createElement("tr");
  tr.appendChild(tdUserName);
  tr.appendChild(tdPassword);

  const tbody = document.querySelector("tbody");
  tbody.appendChild(tr);

  dataAkun.push(tr);

  const tdNomor = document.createElement("td");
  const textNomor = document.createTextNode(dataAkun.indexOf(tr)+1);
  tdNomor.appendChild(textNomor);
  tr.insertBefore(tdNomor, tdUserName);

  hapus.style.display = ""
  }

});

hapus.addEventListener('click', function(){
  let nomorAkun = prompt("Masukkan nomor akun pada tabel AKUN TERDAFTAR yang ingin dihapus: ");

  while (nomorAkun < 1 || nomorAkun > dataAkun.length){
    alert('Nomor akun tidak tersedia');
    nomorAkun = prompt("Masukkan nomor akun pada tabel AKUN TERDAFTAR yang ingin dihapus: ");
  }

  const pop = dataAkun.splice(nomorAkun-1, 1);
  const akunDipilih = pop[0];

  const konfirmasi = confirm("Anda yakin ingin menghapus Akun dengan nomor " + nomorAkun);

  if (konfirmasi){
    const tbody = document.querySelector("tbody");
    tbody.removeChild(akunDipilih);
  }

  dataAkun.forEach(function(tr){
    tr.firstChild.textContent = dataAkun.indexOf(tr) +1;
  })

  if (dataAkun.length == 0){
    hapus.style.display = "none";
  }

})