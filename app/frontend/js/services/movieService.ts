namespace app.Services {

  export class MovieService {
    private MOVIE_RESOURCE = this.$resource('/api/v1/starwars/movies');

    static $inject= ['$resource'];

    constructor(private $resource) {}

    public getMovies() {
      return this.MOVIE_RESOURCE.query();
    }
  }

  angular.module('app').service('movieService', MovieService);

}