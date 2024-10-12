const FavData = {
  user: {
    id: 1,
    name: 'Rizky',
    age: '18',
    favorites: {
      books: ['Parable', 'Sisi Tergelap Surga', 'Hujan'],
      movies: ['Black Clover', 'Naruto'],
    },
  },
};

let { name, age } = FavData.user;
let { movies } = FavData.user.favorites;

console.log(name);
console.log(age);
console.log(movies);
