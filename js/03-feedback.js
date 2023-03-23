import throttle from 'lodash.throttle';
let throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (storedData) {
  emailInput.value = storedData.email;
  messageInput.value = storedData.message;
}

const saveFormData = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

emailInput.addEventListener('input', saveFormData);
messageInput.addEventListener('input', saveFormData);

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value
  };

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
