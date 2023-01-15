import Notiflix from 'notiflix';

const form = document.querySelector('.form');
let position = 1;
let counter = 0;

form.addEventListener('submit', promiseCreate);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    // Fulfill
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

function promiseCreate(evt) {
  evt.preventDefault();
  const delay = form.elements.delay.value;
  let interval = form.elements.step.value;
  const amount = form.elements.amount.value;

  const timeId = setTimeout(() => {
    const intervalId = setInterval(() => {
      clearTimeout(timeId);
      createPromise(position, interval);
      position += 1;
      counter += 1;
      interval = Number(delay) + Number(interval);
      if (amount == counter) {
        clearInterval(intervalId);
        return;
      }
    }, Number(delay) + Number(interval));
  }, delay);
}
