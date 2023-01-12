import Notiflix from 'notiflix';

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

const form = document.querySelector('.form');

form.addEventListener('submit', promiseCreate);

function promiseCreate(evt) {
  evt.preventDefault();
  const delay = form.elements.delay.value;
  const interval = form.elements.step.value;
  const position = form.elements.amount.value;
  console.log(delay);
  setTimeout(() => {
    createPromise(position, interval);
  }, delay);
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
