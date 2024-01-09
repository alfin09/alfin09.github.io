let token = "YOUR_BOT_TOKEN";
let chatId = "YOUR_CHAT_ID";
let photoUrl = "YOUR_PHOTO_URL";
let apiUrl = `https://api.telegram.org/bot${token}/sendPhoto?chat_id=${chatId}&photo=${photoUrl}`;
let delay = 1000; // Delay in milliseconds (1 second)

function kirimGambar() {
  fetch(apiUrl, { method: "POST" })
    .then((response) => response.json())
    .then((data) => {
      console.log("Pesan berhasil dikirim:", data);

      if (data.ok === false) {
        console.log("Response is ok: false. Pausing execution...");
        // Pause execution for a specific time before resuming
        setTimeout(kirimGambar, delay * 10); // Wait 10 times longer (10 seconds)
      } else {
        console.log("Response is ok: true. Resuming execution...");
        setTimeout(kirimGambar, delay / 1000000);
      }
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
      setTimeout(kirimGambar, delay);
    });
}

function run() {
  for (let i = 0; i < 100; i++) {
    kirimGambar();
  }
}
run();
