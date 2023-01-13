// as tested, you can import css file in the sub js file (not the top-level), but all the styling will still be applied globally in the TARGET HTML FILE
// because css file will be integrated with js through "webpack", and the bundled SINGLE js (now includes css) will be later scripted into target html file no matter which level css is imported
import '../styles/home1.css';

console.log('home sub file executed');

const clickBtn = document.querySelector('.click-btn');
const h1Element = document.querySelector('h1');
const targetDiv = document.querySelector('.div-before-click');

export { clickBtn, h1Element, targetDiv };
