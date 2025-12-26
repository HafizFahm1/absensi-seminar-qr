function login(){
  const nim = document.getElementById("nim").value;
  const pass = document.getElementById("pass").value;

  if(nim === "123" && pass === "123"){
    window.location = "dashboard.html";
  }else{
    alert("Login salah");
  }
}
