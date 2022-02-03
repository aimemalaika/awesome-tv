const box = document.querySelector('#box');

const commentPop = () => {
  const article = document.createElement('article');
  const articleContent = `
    <div id="parentModalComment" class="parentModalcomment">
    <div class="commentModal">
      <img src="assets/images/ishan-shah-LEvRAhapk5w-unsplash.jpg" alt="fontawesome-image">
      <button id="closeBtn" class="closeBtn"><p>X</p></button>
      <h2 class="videoName">Space 3</h2>
      <div class="displayComment">
        <h2 class="comment-header">Comments</h2>
        <ul class="commentList">
          <li><p>01/02/2020</p><p>Alex</p><p>I'll love to buy it</p></li>
          <li><p>01/02/2020</p><p>Alex</p><p>I'll love to buy it</p></li>
        </ul> 
      </div>
   </div>
   <div id="comment" class="comment">
    <h2 class="comment-header">Add comment</h2>
    <div class="comment-form">
      <input type="text" id="name" class="name" placeholder="your name">
      <textarea name="message" id="message" class="message" cols="10" rows="10" placeholder="your insights"></textarea>
      <button type="button" class="submit-btn">comment</button>
    </div>
  </div>
</div>`;

  article.textContent = articleContent;
  box.appendChild(article);
  const closeBtn = document.querySelector('#closeBtn');
  closeBtn.addEventListener('click', () => {
    box.removeChild(article);
  });
};

commentPop();