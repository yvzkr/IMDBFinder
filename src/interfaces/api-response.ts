export interface ApiResponse<T> {
  Response: 'True' | 'False'; // If the response is successful
  Error?: string; // If the response is not successful
  Search?: T;
  totalResults?: number;
}

// {"Response":"False","Error":"Series not found!"}

/*
{
  "Search": [
    {
      "Title": "Batman: The Killing Joke",
      "Year": "2016",
      "imdbID": "tt4853102",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzJiZTJmNGItYTUwNy00ZWE2LWJlMTgtZjJkNzY1OTRiNTZlXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Batman: Mask of the Phantasm",
      "Year": "1993",
      "imdbID": "tt0106364",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjYwN2ZmZWYtMTdlNC00ZDQxLWEyNmUtZDI5Yjk5MzQ2N2Y3XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Batman: Under the Red Hood",
      "Year": "2010",
      "imdbID": "tt1569923",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Batman: The Dark Knight Returns, Part 1",
      "Year": "2012",
      "imdbID": "tt2313197",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Batman: The Dark Knight Returns, Part 2",
      "Year": "2013",
      "imdbID": "tt2166834",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTEzMmE0ZDYtYWNmYi00ZWM4LWJjOTUtYTE0ZmQyYWM3ZjA0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    },
    {
      "Title": "Batman: The Movie",
      "Year": "1966",
      "imdbID": "tt0060153",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzEyYWZjNTAtNGRhZi00ZjFiLTlhYmQtNzhhYzJiZmMwNGI1XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Batman: Year One",
      "Year": "2011",
      "imdbID": "tt1672723",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTJjMmVkZjctNjNjMS00ZmI2LTlmYWEtOWNiYmQxYjY0YWVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Son of Batman",
      "Year": "2014",
      "imdbID": "tt3139072",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTVhZGUxMmEtNDdlMi00MTA5LTgxNjctNGJmNDBmYTQ5YTIyXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Batman: Assault on Arkham",
      "Year": "2014",
      "imdbID": "tt3139086",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDU1ZGRiY2YtYmZjMi00ZDQwLWJjMWMtNzUwNDMwYjQ4ZTVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Batman Beyond",
      "Year": "1999–2001",
      "imdbID": "tt0147746",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDExYjNiYTYtZDkwZC00NDcxLTk3YWYtMmIyN2ZlZGYyY2E0XkEyXkFqcGc@._V1_SX300.jpg"
    }
  ],
  "totalResults": "584",
  "Response": "True"
}
*/

// https://www.omdbapi.com/?apikey=d6e263bd&s=Bat&page=1&type=series

/**
 * tek bir yıl
  https://www.omdbapi.com/?apikey=d6e263bd&s=Bat&page=1&type=series&y=1966

  {
  "Search": [
    {
      "Title": "Bat Out of Hell",
      "Year": "1966",
      "imdbID": "tt0059967",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTk3NjI2MmUtMzE2Yy00ZGI0LTgzOGMtZmVhZWNlYzBkNTNlXkEyXkFqcGc@._V1_SX300.jpg"
    }
  ],
    "totalResults": "1",
    "Response": "True"
  }
 */
