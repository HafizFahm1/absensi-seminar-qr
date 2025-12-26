let qr;

function openQR(){
  document.getElementById("qrModal").style.display="block";
  qr = new Html5Qrcode("reader");

  qr.start({facingMode:"environment"},{fps:10,qrbox:250},
    text=>{
      document.getElementById("hasil").innerText="Presensi Berhasil ✔";
      document.getElementById("hadir").innerHTML="1<br><small>Hadir</small>";
      qr.stop();
    }
  );
}

function closeQR(){
  document.getElementById("qrModal").style.display="none";
  if(qr) qr.stop();
}
