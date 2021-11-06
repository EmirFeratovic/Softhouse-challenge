class MovieService {
  static sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  static async getMovies() {
    await this.sleep(2000);
    return fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ce293ef899061b5ab86646eddf3a4a71"
    ).then((response) => {
      return response.json();
    });
  }
}

export default MovieService;
