import Likes from './Likes.js';

class Show {
  static base = 'https://api.tvmaze.com/shows';

  static container = document.querySelector('.movies-row');

  static modal = document.querySelector('.modal-body');

  static getMovies = async () => {
    if (navigator.onLine) {
      const request = await fetch(`${this.base}?page=1`, { method: 'GET' });
      const result = await request.json();
      if (result.length) {
        const likesData = await Likes.countLikes();
        this.container.innerHTML = '';
        result.forEach((element) => {
          this.populate(element, likesData);
        });
      }
      this.countMovies(result.length);
    }
  }

  static countMovies = (count) => {
    document.querySelector('.movies-counter').textContent = count;
  }

  static populate = (movie, likesData) => {
    let likesNumber;
    if (likesData.length) {
      const thePost = likesData.filter((lik) => parseInt(lik.item_id, 10) === movie.id);
      likesNumber = (thePost.length) ? thePost[0].likes : 0;
    } else {
      likesNumber = 0;
    }
    const movieCadre = document.createElement('div');
    movieCadre.classList.add('item');
    const poster = document.createElement('a');
    poster.href = '#';
    poster.addEventListener('click', (e) => e.preventDefault());
    poster.classList.add('poster');
    const posterImager = new Image();
    posterImager.src = movie.image.medium;
    const commentBtn = document.createElement('button');
    commentBtn.innerText = 'Comments';
    commentBtn.setAttribute('data-comment-item-id', movie.id);
    commentBtn.classList.add('overlapButton-comment');
    const reservationBtn = document.createElement('button');
    reservationBtn.setAttribute('data-reservation-item-id', movie.id);
    reservationBtn.innerText = 'reservations';
    reservationBtn.classList.add('overlapButton-reservation');
    poster.append(posterImager);
    movieCadre.append(poster);
    const movieName = document.createElement('h3');
    const movieNameLink = document.createElement('a');
    movieNameLink.href = '#';
    movieNameLink.addEventListener('click', (e) => e.preventDefault());
    movieNameLink.classList.add('title');
    movieNameLink.innerText = movie.name;
    movieName.append(movieNameLink);
    movieCadre.append(movieName);
    const smalInfo = document.createElement('p');
    smalInfo.classList.add('meta');
    const likeButton = document.createElement('button');
    likeButton.classList.add('like-btn');
    likeButton.setAttribute('data-id', movie.id);
    if (Likes.setLiked().includes(movie.id)) {
      likeButton.innerHTML = `<i class="fa fa-heart"></i> <i>${likesNumber}</i> likes`;
    } else {
      likeButton.innerHTML = `<i class="fa fa-heart-o"></i> <i>${likesNumber}</i> likes`;
    }
    likeButton.addEventListener('click', () => {
      if (!Likes.setLiked().includes(movie.id)) {
        const itemId = likeButton.getAttribute('data-id');
        const like = new Likes(itemId);
        Likes.postLike(like);
      }
    });
    smalInfo.innerHTML = `${new Date(movie.premiered).getFullYear().toString()}<i class="dot"></i>${movie.runtime} min `;
    smalInfo.append(likeButton);
    movieCadre.append(commentBtn);
    movieCadre.append(reservationBtn);
    movieCadre.append(smalInfo);
    this.container.append(movieCadre);
  }

  static getOneShow = async (id) => {
    if (navigator.onLine) {
      const request = await fetch(`${this.base}/${id}`, { method: 'GET' });
      const result = await request.json();
      if (result.length) {
        this.modal.innerHTML = '';
        console.log(result);
        // result.forEach((element) => {
        //   this.populate(element);
        // });
      }
    }
  }

  static previewOneShow = () => {
    // modal-body
  }
}

export default Show;