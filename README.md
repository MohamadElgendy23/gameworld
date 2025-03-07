# GameWorld

Utilizes HTML, CSS, and JS to build a project called GameWorld. Includes a games.json file including the following information:

1) Games: A list of games, where each game contains:
 * id: Unique identifier for the game.
 * title: Name of the game.
 * genre: The genre of the game (e.g., RPG, action-adventure).
* platforms: Platforms on which the game is available (e.g., PC, PlayStation, Xbox).
* releaseDate: The release date of the game.
* developer: The developer studio of the game.
* publisher: The publisher of the game.
* rating: A nested object containing the score and the source (e.g., Metacritic).
* description: A brief description of the game.
* tags: An array of tags related to the game (e.g., open-world, action, adventure).
* price: The price of the game.
* availability: The availability status of the game (e.g., available, out-of-stock).
* coverImage: URL for the game's cover image.
* reviews: A list of reviews from different sources, each containing the reviewer's name, rating, and comment.

2) Reviews: Each game can have multiple reviews, with the reviewer's name, rating, and a comment.
* Example:
  * The Legend of Zelda: Breath of the Wild has a 97 score on Metacritic, is available on the Nintendo Switch and Wii U, and features tags like "action" and "adventure".
  * Cyberpunk 2077 has a 72 score on Metacritic, with reviews mentioning both its beautiful world and technical issues.
  * Minecraft is an iconic sandbox game with a high rating, available on many platforms, and praised for its endless creativity. 

Encompasses a game card for each game in a visually appealing manner as well as grid format in order to display this information.
