import Likes from './Likes.js';
import Comment from './Comment.js';

class Show {
  static base = 'https://api.tvmaze.com/shows';

  static container = document.querySelector('.movies-row');

  static modal = document.querySelector('.modal-body');

  static modalFooter = document.querySelector('.modal-footer');

  static commentList = document.querySelector('#comments-data');

  static fullData;

  static getMovies = async () => {
    if (navigator.onLine) {
      const request = await fetch(`${this.base}?page=1`, { method: 'GET' });
      const result = await request.json();
      if (result.length) {
        this.fullData = result;
        this.container.innerHTML = '';
      }
      this.countMovies(result.length);
      return result.length;
    }
    return 0;
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
    commentBtn.addEventListener('click', () => {
      document.querySelector('.modal').classList.remove('hidden');
      this.getOneShow(commentBtn.getAttribute('data-comment-item-id'));
    });
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
      if (request.status === 200) {
        const commentsList = await Comment.getComment(result.id);
        const likesData = await Likes.countLikes();
        this.previewOneShow(result, commentsList, likesData);
        this.addCommentForm();
        document.querySelector('#post-id').value = id;
      }
    }
  }

  static previewOneShow = (result, commentsList, likesData) => {
    let likesNumber;
    if (likesData.length) {
      const thePost = likesData.filter((lik) => parseInt(lik.item_id, 10) === result.id);
      likesNumber = (thePost.length) ? thePost[0].likes : 0;
    } else {
      likesNumber = 0;
    }
    this.modal.innerHTML = '';
    const banner = new Image();
    banner.src = result.image.original;
    banner.classList.add('banner-image');
    const divBanner = document.createElement('div');
    divBanner.append(banner);
    const hrEl = document.createElement('hr');
    divBanner.append(hrEl);
    const likes = document.createElement('p');
    likes.innerHTML = `<i class="fa fa-heart"></i> ${likesNumber} Likes`;
    const comments = document.createElement('p');
    comments.classList.add('commentcount');
    const commentsNumber = commentsList.length;
    comments.innerHTML = `<i class="fa fa-comments-o"></i> ${commentsNumber} Comments`;
    const underImage = document.createElement('div');
    underImage.classList.add('underImage');
    underImage.append(likes);
    underImage.append(comments);
    divBanner.append(underImage);
    const description = document.createElement('div');
    description.classList.add('description-data');
    const showname = document.createElement('h2');
    showname.classList.add('movie-name-title');
    showname.innerText = `Name: ${result.name}`;
    description.append(showname);
    const type = document.createElement('p');
    type.innerText = `Type: ${result.type}`;
    description.append(type);
    const language = document.createElement('p');
    language.innerText = `Language: ${result.language}`;
    description.append(language);
    const genres = document.createElement('p');
    genres.innerText = `Type: ${result.genres.join(', ')}`;
    description.append(genres);
    const runtime = document.createElement('p');
    runtime.innerText = `Runtime: ${result.runtime}`;
    description.append(runtime);
    const officialSite = document.createElement('p');
    officialSite.innerHTML = `Official Site: <a href="${result.officialSite}" target="blanc">${result.officialSite}</a>`;
    description.append(officialSite);
    const rating = document.createElement('p');
    rating.innerText = `Rating: ${result.rating}`;
    description.append(runtime);
    const summary = document.createElement('p');
    summary.innerHTML = `Summary: ${result.summary}`;
    description.append(summary);
    const producer = document.createElement('ul');
    const studio = document.createElement('li');
    studio.innerText = `Studuio: ${result.network.name}`;
    producer.append(studio);
    const country = document.createElement('li');
    country.innerText = `Studuio: ${result.network.country.name}`;
    producer.append(country);
    description.append(producer);
    this.modal.append(divBanner);
    this.modal.append(description);
    this.commentList.innerHTML = '';
    commentsList.forEach((com) => {
      const dates = new Date(com.creation_date);
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ];
      const currentHours = dates.getHours();
      const currentMinutes = dates.getMinutes();
      this.commentList.innerHTML += `
      <li class="data-items">
        <p class="user-prefix">${com.username.charAt(0)}</p>
        <div>
          <p>${com.comment}</p>
          <p class="time-posted"><span>${com.username}</span> <span>${dates.getDay()} - ${monthNames[dates.getMonth()]} - ${dates.getFullYear()} at ${(`0${currentHours}`).slice(-2)}:${(`0${currentMinutes}`).slice(-2)}</span></p>
        </div>
      </li>
      `;
    });
  }

  static addCommentForm = () => {
    this.modalFooter.innerHTML = '';
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    const commentHeader = document.createElement('h2');
    commentHeader.innerText = 'Add Comment';
    commentHeader.classList.add('comment-header');
    const commentForm = document.createElement('form');
    commentForm.classList.add('comment-form');
    const userName = document.createElement('input');
    userName.type = 'text';
    userName.placeholder = 'Enter your name';
    const message = document.createElement('textarea');
    message.cols = '10';
    message.rows = '10';
    message.placeholder = 'your insights';
    const button = document.createElement('button');
    button.type = 'submit';
    button.classList.add('submit-comment-btn');
    button.innerText = 'Comment';
    const postId = document.createElement('input');
    postId.id = 'post-id';
    postId.type = 'hidden';
    button.addEventListener('click', (e) => {
      e.preventDefault();
      if (userName.value !== '' && message.value !== '') {
        const comment = new Comment(userName.value, message.value, postId.value);
        Comment.postComment(comment);
        const dates = new Date();
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December',
        ];
        const currentHours = dates.getHours();
        const currentMinutes = dates.getMinutes();
        this.commentList.innerHTML += `
          <li class="data-items">
            <p class="user-prefix">${userName.value.charAt(0)}</p>
            <div>
              <p>${message.value}</p>
              <p class="time-posted"><span>${userName}</span><span>${dates.getDay()} - ${monthNames[dates.getMonth()]} - ${dates.getFullYear()} at ${(`0${currentHours}`).slice(-2)}:${(`0${currentMinutes}`).slice(-2)}</span></p>
            </div>
          </li>
      `;
        const newCount = parseInt(document.querySelector('.commentcount').textContent.split(' ')[1], 10) + 1;
        document.querySelector('.commentcount').innerHTML = `<i class="fa fa-comments-o"></i> ${newCount} Comments`;
        userName.value = '';
        message.value = '';
      }
    });
    commentForm.append(postId);
    commentForm.append(userName);
    commentForm.append(message);
    commentForm.append(button);
    commentDiv.append(commentHeader);
    commentDiv.append(commentForm);
    this.modalFooter.append(commentDiv);
  }
}

export default Show;