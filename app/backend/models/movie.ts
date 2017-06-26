import * as mongoose from 'mongoose';

export interface Movie extends mongoose.Document {

}

let movieSchema = new mongoose.Schema({

});

export default mongoose.model<Movie>('Movie', movieSchema);