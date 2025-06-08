const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTYwMjBiMGI4ZDFhNzIwMGVjMzNhNmEwNGI4ZGE3YyIsIm5iZiI6MTc0OTM5NDMzMi45MzgsInN1YiI6IjY4NDVhMzljOGQxZjI4NjYzZTNmYzRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.crT0hh6h34hPOiDiz1vnxODChEzzJniuysRO2UIHQFk",
  },
};

fetch(
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc",
  options
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

function listMaker(obj) {
  const domList = obj.results
    .map((movie) => {
      return `
      <li class="item">
        <h1 class="title">${movie.original_title}</h1>
        <h4 class="description">${movie.overview}</h4>
        <div class="info">
          <p class="date">Date: ${movie.release_date}</p>
          <p class="rating">Rating: ${movie.vote_average}</p>
      </li>
    `;
    })
    .join("");

  return domList;
}
let curentPage = 0
document.querySelector(".load").addEventListener("click", () => {
curentPage++
return fetch(
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${curentPage}&sort_by=popularity.desc`,
  options
)
  .then((res) => res.json())
  .then((data) => {
    const movieList = listMaker(data);
    document.querySelector(".list").innerHTML = movieList;
    console.log(curentPage)
  })
  .catch((err) => console.log(err));
})

