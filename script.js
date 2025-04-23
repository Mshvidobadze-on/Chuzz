const form = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');
const popup = document.getElementById('popup');

const correctPassword = '1234'; // შეცვალე პაროლი თუ გინდა

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const password = passwordInput.value;

  if (password === correctPassword) {
    message.textContent = '✅ პაროლი სწორია';
    message.className = 'message success';

    // აჩვენე ფანჯარა
    popup.style.display = 'block';

    // 3 წამში დამალე
    setTimeout(() => {
      popup.style.display = 'none';
    }, 3000);
  } else {
    message.textContent = '❌ პაროლი არასწორია';
    message.className = 'message error';
  }
});
