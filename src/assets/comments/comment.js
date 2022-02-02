const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/:app_id/comments';

const submitBtn = document.querySelector('.submit-btn');

async function postComment() {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const message = document.getElementById('message');
    // fetch post request
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        item_id: '',
        username: `${name.value}`,
        comment: `${message.value}`,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json());
  });
}

export default postComment;
