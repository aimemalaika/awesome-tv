import Show from '../../component/Show.js';
// import Comment from '../../component/Comment.js';
import LogoImage from '../images/logo.png';
import '../css/index.css';

(() => {
  const logo = new Image();
  logo.src = LogoImage;
  document.querySelector('.logo').append(logo);
  Show.getMovies();
})();

// document.querySelector('.submit-btn').addEventListener('click', (e) => {
//   e.preventDefault();
//   const name = document.querySelector('#name');
//   const message = document.querySelector('#message');
//   if (name.value !== '' && message.value !== '') {
//     const comment = new Comment(name.value, message.value, 'item_id');
//     Comment.postComment(comment);
//   }
// });