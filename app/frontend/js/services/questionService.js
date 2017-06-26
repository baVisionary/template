var app;
(function (app) {
    var Services;
    (function (Services) {
        var QuestionService = (function () {
            function QuestionService($resource) {
                this.$resource = $resource;
                // sample url https://opentdb.com/api.php?amount=42&category=17&difficulty=hard
                this._question_resource = this.$resource('https://opentdb.com/api.php?amount=10'
                // ,{},
                // {
                //     askForQs: {
                //         method: 'GET',
                //         { amount: 10 }
                //     }
                // }
                );
            }
            QuestionService.prototype.getQuestions = function () {
                return this._question_resource.get();
            };
            return QuestionService;
        }());
        QuestionService.$inject = ['$resource'];
        Services.QuestionService = QuestionService;
        angular.module('app').service('questionService', QuestionService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
