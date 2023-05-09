import { DateTime } from './modules/luxon.js';
import BookList from './modules/booklist.js';

function displayCurrentTime() {
  const currentTime = document.getElementById('currentTime');
  currentTime.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}

setInterval(displayCurrentTime, 1000);

const bookList = new BookList();
bookList.render(); // assuming a render method exists in the BookList class
