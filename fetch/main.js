const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/gardevoir';

fetch(usersUrl)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch(console.error);

fetch(pokeUrl)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch(console.error);
