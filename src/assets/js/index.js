import Show from '../../component/Show.js';
import LogoImage from '../images/logo.png';
import '../css/index.css';
import '../css/responsive.css';

(async () => {
  const logo = new Image();
  logo.src = LogoImage;
  document.querySelector('.logo').append(logo);
  await Show.getMovies();
})();

document.querySelector('.close-button').addEventListener('click', () => {
  document.querySelector('.modal').classList.add('hidden');
});
