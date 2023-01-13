import { h1Element, clickBtn, targetDiv } from './homeSub.js';

console.log('home main js file executed');

h1Element.addEventListener('click', () => {
  h1Element.style.color = 'purple';
});

clickBtn.addEventListener('click', function () {
  targetDiv.classList.add('div-after-click');
});
