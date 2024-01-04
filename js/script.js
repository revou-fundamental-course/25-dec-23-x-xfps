document.getElementById('hasil').style.color = 'red';
document.getElementById('hasil2').style.color = 'red';
function hitungLuas() {
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);
    var luas = 0.5 * alas * tinggi;
  
    if (!isNaN(luas)) {
      var rumus = `Luas = 1/2 * ${alas} * ${tinggi}`; 
      var hasil = `Rumus: ${rumus} = ${luas}`;
      var hasilElem = document.getElementById('hasil');
      hasilElem.innerText = hasil;
      hasilElem.style.color = 'white';

    } else {
      var hasilElem = document.getElementById('hasil');
      hasilElem.innerText = 'Masukkan nilai yang valid untuk kedua input!';
      hasilElem.style.color = 'red';
    }
  }

  function hitungKeliling() {
    var sisiA = parseFloat(document.getElementById('sisiA').value);
    var sisiB = parseFloat(document.getElementById('sisiB').value);
    var sisiC = parseFloat(document.getElementById('sisiC').value);
    var keliling = sisiA + sisiB + sisiC;

    if (!isNaN(keliling)) {
        var rumus = `Keliling = ${sisiA} + ${sisiB} + ${sisiC}`;
        var hasil = `Rumus: ${rumus} = ${keliling}`;
        var hasilElem = document.getElementById('hasil2');
        hasilElem.innerText = hasil;
        hasilElem.style.color = 'white';

        var rumusElem = document.getElementById('rumus2');
        rumusElem.innerText = rumus;
        rumusElem.style.color = 'white';
    } else {
        var hasilElem = document.getElementById('hasil2');
        hasilElem.innerText = 'Masukkan nilai yang valid untuk semua sisi!';
        hasilElem.style.color = 'red';
    }
}

  function resetForm() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = ''; 
    document.getElementById('hasil').innerText = ''; 
}

function resetForm() {
  document.getElementById('sisiA').value = '';
  document.getElementById('sisiB').value = ''; 
  document.getElementById('sisiC').value = ''; 
  document.getElementById('hasil2').innerText = ''; 
}
