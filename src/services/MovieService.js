class MovieService {
  static API_KEY = process.env.REACT_APP_API_KEY;
  static sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
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
