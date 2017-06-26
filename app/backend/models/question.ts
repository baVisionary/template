import * as mongoose from 'mongoose';

export interface Question {

};

export default mongoose.model<Question>('Question', questionSchema);