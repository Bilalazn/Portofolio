
const from = document.getElementById('contact-from');
const nameInput = from.name;
const emailInput = from.email;
const messageInput = from.message;
const successMsg = document.getElementById('success-message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

function validteEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

from.addEventListener('submit'), function (e) {
    e.preventDefault();

    nameError.textarea = '';
    emailError.textarea = '';
    messageError.textarea = '';
    successMsg.textarea = '';

    let valid = true;

    if (nameInput.trim() === '') {
    nameError.textContent = 'please enter your name';
    valid = false;
    }
    if (!validateEmail(emailInput.value.trim())) {
    nameError.textContent = 'please enter your email address';
    valid = false;
    }
    if (messageInput.value.trim() === '') {
    nameError.textContent = 'please enter your message';
    valid = false;
    }

    if(valid) {
    successMsg.textContent = 'Thank you! your message has been sent';
    from.reset()
    }
}
    window.addEventListener('load', () => {
      const objek = document.getElementById('objek');
      setTimeout(() => {
        objek.classList.add('muncul');
      }, 500); // delay 0.5 detik setelah halaman dimuat
    });

    