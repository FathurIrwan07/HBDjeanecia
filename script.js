function showMessage() {
  var name = document.getElementById("name").value.trim();
  var message = document.getElementById("message");
  var greeting = document.getElementById("greeting");
  var warning = document.getElementById("warning");

  if (name === "") {
    warning.classList.remove("hidden");
    setTimeout(() => {
      warning.style.opacity = 1;
    }, 100);
    return;
  }

  warning.style.opacity = 0;
  setTimeout(() => {
    warning.classList.add("hidden");
  }, 1000);

  message.textContent = `Happy Birthday, ${name}! Semoga hari kamu penuh dengan kebahagiaan dan cinta. Aku sayang kamu! arab jaksel`;
  greeting.textContent = `Selamat Ulang Tahun, ${name}!`;

  if (message.classList.contains("hidden")) {
    message.classList.remove("hidden");
    setTimeout(() => {
      message.style.opacity = 1;
    }, 100);
  } else {
    message.style.opacity = 0;
    setTimeout(() => {
      message.classList.add("hidden");
    }, 1000);
  }
}
