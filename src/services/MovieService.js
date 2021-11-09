class MovieService {
  static API_KEY = process.env.REACT_APP_API_KEY;
  static sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  static async searchMovies(searchTerm) {
    return fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        this.API_KEY +
        "&query=" +
        searchTerm
    ).then((response) => {
      return response.json();
    });
  }
  static async getMovies() {
    await this.sleep(2000);
    return fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=" + this.API_KEY
    ).then((response) => {
      return response.json();
    });
  }
}

export default MovieService;
