import Show from '../../component/Show.js';
import Likes from '../../component/Likes.js';
import LogoImage from '../images/logo.png';
import '../css/index.css';
import '../css/responsive.css';

let start = 0;
let limit = 24;

const infinitScroll = async () => {
  document.querySelector('.animate-load').classList.remove('hidden');
  const likesData = await Likes.countLikes();
  await Show.fullData.slice(start, limit).forEach((element) => {
    Show.populate(element, likesData);
  });
  await document.querySelector('.animate-load').classList.add('hidden');
};

(async () => {
  const logo = new Image();
  logo.src = LogoImage;
  document.querySelector('.logo').append(logo);
  await Show.getMovies();
  infinitScroll();
})();

document.querySelector('.close-button').addEventListener('click', () => {
  document.querySelector('.modal').classList.add('hidden');
});

window.onscroll = () => {
  if (Math.round((window.innerHeight + window.scrollY)) >= document.body.offsetHeight) {
    start += 24;
    limit += 24;
    infinitScroll();
  }
};