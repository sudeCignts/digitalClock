const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h=h<10 ? "0" + h :h;  /* bunu yazmadan önce saat 5 yazardı ama dijital saatte 05 yazar*/
/*bunun için yukarıdaki kodu yazdık. saat 10 dan küçükse 0 yaz string yanına saati yaz değilse direkt h ı yaz */
m=m<10 ? "0" + m :m; 
s=s<10 ? "0" + s :s; 

hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {   /*updateClock() çağırılınca kodlar yukarıdan başlar çalışır bu koda gelince 1 saniye bekler ve tekrar updateClock çağırılır*/
    updateClock();
  }, 1000);
}

updateClock();
