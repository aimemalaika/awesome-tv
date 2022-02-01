import Show from '../../component/Show.js';
import LogoImage from '../images/logo.png';
import '../css/index.css';

(() => {
  const logo = new Image();
  logo.src = LogoImage;
  document.querySelector('.logo').append(logo);
  Show.getMovies();
})();
