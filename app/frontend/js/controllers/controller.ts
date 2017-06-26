namespace app.Controllers {

  // export class HomeController {
  //   public movies;

  //   static $inject = ['movieService'];

  //   constructor(private movieService) {
  //     this.movies = this.movieService.getMovies();
  //   }
  // }

  export class HomeController {
    public questions;

    static $inject = ['questionService'];

    constructor(private questionService) {
      this.questions = this.questionService.getQuestions();
    }
  }

}