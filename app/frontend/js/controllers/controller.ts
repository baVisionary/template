namespace app.Controllers {

  export class HomeController {
    public questions;

    static $inject = ['questionService', '$stateParams'];

    constructor(private questionService, $stateParams) {
      console.log($stateParams);
      this.questions = this.questionService.getQs($stateParams.amount, $stateParams.category, $stateParams.difficulty, $stateParams.type);
    }
  }

}