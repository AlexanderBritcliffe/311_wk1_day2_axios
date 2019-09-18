
// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const axios = require('axios');
const api_key = 'd771b19ef336ed8381def3a60b574464';

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;
  return axios.get(url)
  .then(response => {
    console.log(response);
  return result.data.status;
  })
  .catch(error => {
    console.log(error);
  });
}

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;
  return axios.get("/user?ID=34611")
  .then(response => {
    console.log(response);
  return result.data.Original_title;
  })
  .catch(error => {
    console.log(error);
  });
}

const getMovieByIdFailure = () => {
  const fakeId = 5783; // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`;
  return axios.get("/user?ID=5783")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error.response.status);
  });
}



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}