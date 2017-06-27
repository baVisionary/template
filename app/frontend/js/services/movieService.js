var app;
(function (app) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($resource) {
                this.$resource = $resource;
                this.MOVIE_RESOURCE = this.$resource('/api/v1/starwars/movies');
            }
            MovieService.prototype.getMovies = function () {
                return this.MOVIE_RESOURCE.query();
            };
            return MovieService;
        }());
        MovieService.$inject = ['$resource'];
        Services.MovieService = MovieService;
        angular.module('app').service('movieService', MovieService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
