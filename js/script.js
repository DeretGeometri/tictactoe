let kotakSatu = document.querySelector(`.kotak-satu`);
let kotakDua = document.querySelector(`.kotak-dua`);
let kotakTiga = document.querySelector(`.kotak-tiga`);
let kotakEmpat = document.querySelector(`.kotak-empat`);
let kotakLima = document.querySelector(`.kotak-lima`);
let kotakEnam = document.querySelector(`.kotak-enam`);
let kotakTujuh = document.querySelector(`.kotak-tujuh`);
let kotakDelapan = document.querySelector(`.kotak-delapan`);
let kotakSembilan = document.querySelector(`.kotak-sembilan`);
let boards = document.querySelectorAll(`.board-games > div`);
let count = 0;
let game = 0;

boards.forEach(function (board) {
  board.addEventListener(`click`, function (e) {
    if (game == 1) return;
    if (count == 9) return;
    count = count + 1;
    count % 2 == 0 ? (e.target.innerHTML = `x`) : (e.target.innerHTML = `o`);

    if (
      (kotakSatu.innerHTML == `x` &&
        kotakDua.innerHTML == `x` &&
        kotakTiga.innerHTML == `x`) ||
      (kotakSatu.innerHTML == `o` &&
        kotakDua.innerHTML == `o` &&
        kotakTiga.innerHTML == `o`)
    ) {
      game++;
      console.log(game);
      console.log(`x menang`);
      kotakSatu.style.backgroundColor = `aqua`;
      kotakDua.style.backgroundColor = `aqua`;
      kotakTiga.style.backgroundColor = `aqua`;
      alert(`Permainan Usai. Masih harus refresh browser`);
    }
    if (
      (kotakEmpat.innerHTML == `x` &&
        kotakLima.innerHTML == `x` &&
        kotakEnam.innerHTML == `x`) ||
      (kotakEmpat.innerHTML == `o` &&
        kotakLima.innerHTML == `o` &&
        kotakEnam.innerHTML == `o`)
    ) {
      game++;
      console.log(game);
      kotakEmpat.style.backgroundColor = `aqua`;
      kotakLima.style.backgroundColor = `aqua`;
      kotakEnam.style.backgroundColor = `aqua`;
      alert(`Permainan Usai. Masih harus refresh browser`);
    }
    if (
      (kotakTujuh.innerHTML == `x` &&
        kotakDelapan.innerHTML == `x` &&
        kotakSembilan.innerHTML == `x`) ||
      (kotakTujuh.innerHTML == `x` &&
        kotakDelapan.innerHTML == `x` &&
        kotakSembilan.innerHTML == `x`)
    ) {
      game++;
      console.log(game);
      kotakTujuh.style.backgroundColor = `aqua`;
      kotakDelapan.style.backgroundColor = `aqua`;
      kotakSembilan.style.backgroundColor = `aqua`;
      alert(`Permainan Usai. Masih harus refresh browser`);
    }
    if (
      (kotakSatu.innerHTML == `x` &&
        kotakLima.innerHTML == `x` &&
        kotakSembilan.innerHTML == `x`) ||
      (kotakSatu.innerHTML == `x` &&
        kotakLima.innerHTML == `x` &&
        kotakSembilan.innerHTML == `x`)
    ) {
      game++;
      console.log(game);
      kotakSatu.style.backgroundColor = `aqua`;
      kotakLima.style.backgroundColor = `aqua`;
      kotakSembilan.style.backgroundColor = `aqua`;
      alert(`Permainan Usai. Masih harus refresh browser`);
    }
    if (
      (kotakTiga.innerHTML == `x` &&
        kotakLima.innerHTML == `x` &&
        kotakTujuh.innerHTML == `x`) ||
      (kotakTiga.innerHTML == `x` &&
        kotakLima.innerHTML == `x` &&
        kotakTujuh.innerHTML == `x`)
    ) {
      game++;
      console.log(game);
      kotakTiga.style.backgroundColor = `aqua`;
      kotakLima.style.backgroundColor = `aqua`;
      kotakTujuh.style.backgroundColor = `aqua`;
      alert(`Permainan Usai. Masih harus refresh browser`);
    }
    if (
      (kotakDua.innerHTML == `x` &&
        kotakLima.innerHTML == `x` &&
        kotakDelapan.innerHTML == `x`) ||
      (kotakDua.innerHTML == `x` &&
        kotakLima.innerHTML == `x` &&
        kotakDelapan.innerHTML == `x`)
    ) {
      game++;
      console.log(game);
      kotakDua.style.backgroundColor = `aqua`;
      kotakLima.style.backgroundColor = `aqua`;
      kotakDelapan.style.backgroundColor = `aqua`;
      alert(`Permainan Usai. Masih harus refresh browser`);
    }
    if (
      (kotakSatu.innerHTML == `x` &&
        kotakEmpat.innerHTML == `x` &&
        kotakTujuh.innerHTML == `x`) ||
      (kotakSatu.innerHTML == `x` &&
        kotakEmpat.innerHTML == `x` &&
        kotakTujuh.innerHTML == `x`)
    ) {
      game++;
      console.log(game);
      kotakSatu.style.backgroundColor = `aqua`;
      kotakEmpat.style.backgroundColor = `aqua`;
      kotakTujuh.style.backgroundColor = `aqua`;
      alert(`Permainan Usai. Masih harus refresh browser`);
    }
    if (
      (kotakTiga.innerHTML == `x` &&
        kotakEnam.innerHTML == `x` &&
        kotakSembilan.innerHTML == `x`) ||
      (kotakTiga.innerHTML == `o` &&
        kotakEnam.innerHTML == `o` &&
        kotakSembilan.innerHTML == `o`)
    ) {
      game++;
      console.log(game);
      kotakTiga.style.backgroundColor = `aqua`;
      kotakEnam.style.backgroundColor = `aqua`;
      kotakSembilan.style.backgroundColor = `aqua`;
      alert(`Permainan Usai. Masih harus refresh browser`);
    }
  });
});
