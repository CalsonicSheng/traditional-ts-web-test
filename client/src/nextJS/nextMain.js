import * as all from './nextSub.js';
import axios from 'axios';

console.log('next main file runs');
const titleElement = document.querySelector('h1');

titleElement.addEventListener('click', function () {
  titleElement.style.color = 'red';
});

all.userBtn.addEventListener('click', async function () {
  try {
    // axios can already auto config the base/host-url for you, but you can still write full url
    const userList = await axios.get('http://localhost:5000/user');
    console.log(userList.data);
  } catch (error) {
    console.log(error.response);
  }
});

all.bookBtn.addEventListener('click', async function () {
  try {
    const bookList = await axios.get('/book');
    console.log(bookList);
  } catch (error) {
    console.log(error.response);
  }
});

all.errorBtn.addEventListener('click', async function () {
  try {
    // again, you can still write relative url, it will still work
    const result = await axios.get('/lol');
    console.log(result.data);
  } catch (error) {
    console.log(error.response);
  }
});

// --------------------------------------------------------------------------------

const pythonBtn = document.querySelector('.btn-python');

pythonBtn.addEventListener('click', function () {
  console.log('python btn clicked');
});
