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
}
export default Likes;