import Comment from './Comment.js';

class Likes extends Comment {
  constructor(itemId) {
    super();
    this.item_id = itemId;
  }

  static postLike = async (like) => {
    document.querySelector(`[data-id="${like.item_id}"]`).children[0].classList.remove('fa-heart-o');
    document.querySelector(`[data-id="${like.item_id}"]`).children[0].classList.add('fa-spinner');
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(like),
    };

    const request = await fetch(`${super.base}/${super.appId}/likes`, requestOptions);
    if (request.status === 201) {
      document.querySelector(`[data-id="${like.item_id}"]`).children[0].classList.remove('fa-spinner');
      document.querySelector(`[data-id="${like.item_id}"]`).children[0].classList.add('fa-heart');
      const likeCount = document.querySelector(`[data-id="${like.item_id}"]`).children[1];
      likeCount.innerText = parseInt(likeCount.innerText, 10) + 1;
      this.setLiked(like.item_id);
      return 'created';
    }
    return 'Failed';
  }

  static setLiked = (id = null) => {
    if (id) {
      const storage = (window.localStorage.getItem('idsLikes') === null) ? [] : JSON.parse(window.localStorage.getItem('idsLikes'));
      storage.push(id);
      window.localStorage.setItem('idsLikes', JSON.stringify(storage));
    }
    return window.localStorage.getItem('idsLikes');
  }

  static countLikes = async () => {
    if (navigator.onLine) {
      const request = await fetch(`${super.base}/${super.appId}/likes`, { method: 'GET' });
      const result = await request.json();
      return result;
    }
    return 0;
  }
}
export default Likes;