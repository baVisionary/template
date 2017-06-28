namespace app.Services {

    export class QuestionService {
        private _question_resource = this.$resource('https://opentdb.com/api.php');

        public questions; 
        public amount; 
        public category;
        public type;

        static $inject = ['$resource'];

        constructor(private $resource) { }

        private _getQs(amount, category, difficulty, type) {
            this.amount = amount;
            this.category = category
            return this._question_resource.get({ amount: amount, category: category, difficulty: difficulty, type: type }).then((data) => {
                this.questions = data;
            });
        }

        public loadQs(amount, category, difficulty, type) {
            if (!this.questions) {
                this._getQs(amount, category, difficulty, type).then(() => {
                    console.log(`QuestionService... GET questions`);
                })
            }
            return this.questions;
        }
    }

    angular.module('app').service('questionService', QuestionService);
}