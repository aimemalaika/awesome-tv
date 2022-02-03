import Comment from '../src/component/Comment.js';

const unmockedFetch = global.fetch;
const postId = Date.now();
const comment = new Comment('User 1', 'message 1', postId);
beforeAll(async () => {
  global.fetch = () => Promise.resolve({
    json: () => Promise.resolve([JSON.stringify(comment)]),
  });
  await Comment.postComment();
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe('Comment class', () => {
  document.body.innerHTML = '<p class="movies-counter"></p>';
  test('return the number of comments of a shows', async () => {
    const allComment = await Comment.getComment(postId);
    expect(allComment.length).toBe(1);
  });
});