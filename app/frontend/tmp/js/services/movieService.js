var app;!function(app){!function(Services){var MovieService=function(){function MovieService($resource){this.$resource=$resource,this.MOVIE_RESOURCE=this.$resource("/api/v1/starwars/movies")}return MovieService.prototype.getMovies=function(){return this.MOVIE_RESOURCE.query()},MovieService}();MovieService.$inject=["$resource"],Services.MovieService=MovieService,angular.module("app").service("movieService",MovieService)}(app.Services||(app.Services={}))}(app||(app={}));