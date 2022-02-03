class Comment {
  constructor(username, message, itemId) {
    this.username = username;
    this.comment = message;
    this.item_id = itemId;
  }

  static appId = 'DN0Of2pkUbOHCM0jDtnj';

  static base = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';

  static postComment = async (comment) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(comment),
    };

    const request = await fetch(`${this.base}/${this.appId}/comments`, requestOptions);
    if (request.status === 201) {
      return 'created';
    }
    return 'Failed';
  }

  static getComment = async (item) => {
    if (navigator.onLine && item) {
      const request = await fetch(`${this.base}/${this.appId}/comments?item_id=${item}`, { method: 'GET' });
      const result = await request.json();
      if (request.status === 400) {
        return [];
      }
      return result;
    }
    return 0;
  }
}
export default Comment;