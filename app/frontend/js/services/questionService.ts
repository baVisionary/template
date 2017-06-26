namespace app.Services {

    export class QuestionService {
        // sample url https://opentdb.com/api.php?amount=10&category=17&difficulty=hard
        private _question_resource = this.$resource('https://opentdb.com/api.php?amount=10&category=7&type=multiple'
            // ,{},
            // {
            //     askForQs: {
            //         method: 'GET',
            //         { amount: 10 }
            //     }
            // }
        );

        static $inject = ['$resource'];

        constructor(private $resource) { }

        public getQuestions() {
            return this._question_resource.get();
        }
    }

    angular.module('app').service('questionService', QuestionService);

}