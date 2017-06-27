namespace app.Services {

    export class QuestionService {
        private _question_resource = this.$resource('https://opentdb.com/api.php');

        static $inject = ['$resource'];

        constructor(private $resource) { }

        public getQs(amount?, category?, difficulty?, type?) {
            return this._question_resource.get( {amount: amount, category: category, difficulty: difficulty, type: type } );
        }
    }

    angular.module('app').service('questionService', QuestionService);
}