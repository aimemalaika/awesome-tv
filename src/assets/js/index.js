import LogoImage from '../images/logo.png';
import '../css/index.css';
import postComment from '../comments/comment';

postComment();

(() => {
  const logo = new Image();
  logo.src = LogoImage;
  document.querySelector('.logo').append(logo);
})();
