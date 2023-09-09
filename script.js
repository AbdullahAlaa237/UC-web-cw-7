let movie1 = {
  name: "Home Alone",
  src: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-9441893422.jpg",
};
let movie2 = {
  name: "The SpongeBob SquarePants Movie",
  src: "https://upload.wikimedia.org/wikipedia/en/3/31/The_SpongeBob_SquarePants_Movie_poster.jpg",
};
let movie3 = {
  name: "The Batman",
  src: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg",
};

let movies = [];

movies.push(movie1, movie2, movie3);

let movieContainer = document.getElementById("container");

movies.forEach((movie) => {
  movieContainer.innerHTML += `
      <div class="movie">
      <img src="${movie.src}" alt="movie picture" />
      <h2>${movie.name}</h2>
      </div>
      `;
});
