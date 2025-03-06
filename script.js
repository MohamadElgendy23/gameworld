// useful DOM variable
const gameCardsWrapper = document.querySelector(".game-cards-wrapper");

// extract the data from games.json and handle each game appropriately
function handleData() {
  gameCardsWrapper.innerHTML = ""; // doesn't allow overflow of games
  fetch("games.json")
    .then((response) => response.json())
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
                <div class="platforms"></div>
                <p class="release-date"></p>
                <div class="company">
                   <span class="developer"></span> 
                   <span class="publisher"></span> 
                </div>
                <div class="rating">
                    <span class="score"></span>
                    <span class="source"></span>
                </div>
            </div>
            <div class="card-body">
                <p class="description"></p>
                <div class="tags"></div>
                <span class="price"></span>
                <span class="availability"></span>
            </div>
            <div class="card-reviews"></div>
        </div>`;
}
