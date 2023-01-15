import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('.value[data-days]');
const hours = document.querySelector('.value[data-hours]');
const minutes = document.querySelector('.value[data-minutes]');
const seconds = document.querySelector('.value[data-seconds]');

startBtn.setAttribute('disabled', 'true');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
    startBtn.removeAttribute('disabled');
  },
};

const fp = flatpickr(input, options);

startBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const currentDate = new Date();
    const endDate = fp.selectedDates[0];
    const difTime = endDate - currentDate;
    const convertedTime = convertMs(difTime);

    days.textContent = addLeadingZero(convertedTime.days);
    hours.textContent = addLeadingZero(convertedTime.hours);
    minutes.textContent = addLeadingZero(convertedTime.minutes);
    seconds.textContent = addLeadingZero(convertedTime.seconds);
  }, 1000);
});

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
