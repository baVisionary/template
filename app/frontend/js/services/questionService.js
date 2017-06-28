var app;
(function (app) {
    var Services;
    (function (Services) {
        var QuestionService = (function () {
            function QuestionService($resource) {
                this.$resource = $resource;
                this._question_resource = this.$resource('https://opentdb.com/api.php');
            }
            QuestionService.prototype._getQs = function (amount, category, difficulty, type) {
                var _this = this;
                this.amount = amount;
                this.category = category;
                return this._question_resource.get({ amount: amount, category: category, difficulty: difficulty, type: type }).then(function (data) {
                    _this.questions = data;
                });
            };
            QuestionService.prototype.loadQs = function (amount, category, difficulty, type) {
                if (!this.questions) {
                    this._getQs(amount, category, difficulty, type).then(function () {
                        console.log("QuestionService... GET questions");
                    });
                }
                return this.questions;
            };
            return QuestionService;
        }());
        QuestionService.$inject = ['$resource'];
        Services.QuestionService = QuestionService;
        angular.module('app').service('questionService', QuestionService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
