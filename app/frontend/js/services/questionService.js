var app;
(function (app) {
    var Services;
    (function (Services) {
        var QuestionService = (function () {
            function QuestionService($resource) {
                this.$resource = $resource;
                this._question_resource = this.$resource('https://opentdb.com/api.php');
            }
            QuestionService.prototype.getQs = function (amount, category, difficulty, type) {
                return this._question_resource.get({ amount: amount, category: category, difficulty: difficulty, type: type });
            };
            return QuestionService;
        }());
        QuestionService.$inject = ['$resource'];
        Services.QuestionService = QuestionService;
        angular.module('app').service('questionService', QuestionService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
