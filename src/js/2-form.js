const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
let { email, message } = form.elements;

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedData) {
  email.value = savedData.email;
  message.value = savedData.message;
}

form.addEventListener('input', () => {
  formData.email = email.value;
  formData.message = message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email && formData.message) {
    localStorage.clear();
    formData.email = '';
    formData.message = '';
    form.reset();
  } else {
    alert('Fill please all fields');
  }
});
