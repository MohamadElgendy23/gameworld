// useful DOM variable
const gameCardsWrapper = document.querySelector(".game-cards-wrapper");

// app initialization; extract the data from games.json and handle each game appropriately
function initializeApp() {
  gameCardsWrapper.innerHTML = ""; // doesn't allow overflow of games
  fetch("games.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((gamesData) => {
      const gamesArr = gamesData.games;
      gamesArr.map((gameObj) => {
        displayGameCard(gameObj);
      });
    });
}

// create and display a game card for each game in the html
function displayGameCard(game) {
  gameCardsWrapper.innerHTML += `
        <div class="card-container">
            <div class="card-image">
                <img src=${game.coverImage} alt="Cover image of ${game.title}"/>
            </div>
            <div class="card-info">
                <h2 class="title">${game.title}</h2>
                <p class="genre">${game.genre}</p>
                <div class="platforms">${game.platforms
                  .map(
                    (gamePlatform) =>
                      `<span class="platform">${gamePlatform}</span>`
                  )
                  .join("")}</div>
                <p class="release-date">${game.releaseDate}</p>
                <div class="company">
                   <span class="developer">${game.developer}</span> 
                   <span class="publisher">${game.publisher}</span> 
                </div>
                <div class="rating">
                    <span class="score">${game.rating.score}</span>
                    <span class="source">${game.rating.source}</span>
                </div>
            </div>
            <div class="card-body">
                <p class="description">${game.description}</p>
                <div class="tags">${game.tags
                  .map((tag) => `<span class="tag">${tag}</span>`)
                  .join("")}</div>
                <span class="price">${game.price}</span>
                <span class="${game.availability}">${game.availability}</span>
            </div>
            <div class="card-reviews">${game.reviews
              .map(
                (review) =>
                  `<div class="review">
                    <span class="author">${review.author}</span>
                    <span class="rating">${review.rating}</span>
                    <p class="comment">${review.comment}</p>
                  </div>`
              )
              .join("")}</div>
        </div>`;
}

initializeApp();
