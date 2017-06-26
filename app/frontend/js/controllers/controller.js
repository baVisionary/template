var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        // export class HomeController {
        //   public movies;
        //   static $inject = ['movieService'];
        //   constructor(private movieService) {
        //     this.movies = this.movieService.getMovies();
        //   }
        // }
        var HomeController = (function () {
            function HomeController(questionService) {
                this.questionService = questionService;
                this.questions = this.questionService.getQuestions();
            }
            return HomeController;
        }());
        HomeController.$inject = ['questionService'];
        Controllers.HomeController = HomeController;
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
