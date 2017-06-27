var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(questionService, $stateParams) {
                this.questionService = questionService;
                console.log($stateParams);
                this.questions = this.questionService.getQs($stateParams.amount, $stateParams.category, $stateParams.difficulty, $stateParams.type);
            }
            return HomeController;
        }());
        HomeController.$inject = ['questionService', '$stateParams'];
        Controllers.HomeController = HomeController;
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
