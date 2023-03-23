const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

let formState = {
  email: '',
  message: ''
};

form.addEventListener('input', event => {
  const input = event.target;
  formState[input.name] = input.value;
  saveStateToLocalStorage();
});

const THROTTLE_DELAY = 500; // 500 milliseconds

const saveStateToLocalStorage = _.throttle(() => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, THROTTLE_DELAY);

window.addEventListener('load', () => {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
      form
    };
});
