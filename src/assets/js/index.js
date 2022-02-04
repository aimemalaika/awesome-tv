import Show from '../../component/Show.js';
import Likes from '../../component/Likes.js';
import LogoImage from '../images/logo.png';
import Info from '../images/success.gif';
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
  let purcent = 0;
  const logo = new Image();
  logo.src = LogoImage;
  document.querySelector('.logo').append(logo);
  const infoImg = new Image();
  infoImg.src = Info;
  document.querySelector('.message').prepend(infoImg);
  await Show.getMovies();
  infinitScroll();
  const loaderpurcent = setInterval(() => {
    document.querySelector('.progress-bar').style.width = `${purcent}%`;
    if (purcent >= 100) {
      clearInterval(loaderpurcent);
      document.querySelector('.notification').classList.add('hidden');
    }
    purcent += 5;
  }, 300);
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