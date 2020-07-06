const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn1 = document.querySelector('#btn-1');
const color1 = document.querySelector('.color-1');
const container1 = document.querySelector('.container-1');
const btn2 = document.querySelector('#btn-2');
const color2 = document.querySelector('.color-2');
const container2 = document.querySelector('.container-2');
const btn3 = document.querySelector('#btn-3');
const color3 = document.querySelector('.color-3');
const container3 = document.querySelector('.container-3');

btn1.addEventListener('click', () => {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  container1.style.backgroundColor = hexColor;
  color1.textContent = hexColor;
});

btn2.addEventListener('click', () => {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  container2.style.backgroundColor = hexColor;
  color2.textContent = hexColor;
});

btn3.addEventListener('click', () => {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  container3.style.backgroundColor = hexColor;
  color3.textContent = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
