import Show from '../src/component/Show.js';

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () => Promise.resolve({
    json: () => Promise.resolve([]),
  });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe('Show class', () => {
  document.body.innerHTML = '<p class="movies-counter"></p>';
  test('return the number of shows', async () => {
    const listmovies = await Show.getMovies();
    const numberRended = await parseInt(document.querySelector('.movies-counter').textContent, 10);
    expect(listmovies).toEqual(numberRended);
  });
});