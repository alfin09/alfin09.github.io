let token = "6872569198:AAGJmM52mqEwamJc06NjPxza0b-RzXFaXLw";
let chatId = "6425729524";
let photoUrl =
  "https://th.bing.com/th/id/OIP.rE5rIe5-2-a8vXfSB7c2RwAAAA?rs=1&pid=ImgDetMain";

let apiUrl = `https://api.telegram.org/bot${token}/sendPhoto?chat_id=${chatId}&photo=${photoUrl}`;
let delay = 0.001;
function kirimGambar() {
  fetch(apiUrl, { method: "POST" })
    .then((response) => response.json())
    .then((data) => {
      console.log("Pesan berhasil dikirim:", data);

      setTimeout(kirimGambar, delay);
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);

      setTimeout(kirimGambar, delay);
    });
}

function run() {
  for (let i = 0; i < 1000; i++) {
    kirimGambar();
  }
}
run();
