import * as express from 'express';
import * as cors from 'cors';
import * as request from 'request';

let router = express.Router();

router.get('/tdb/:amount/:category/:difficulty/:type', (req, res) => {
    const url = 'https://opentdb.com/api.php';
    var key = req.query.key;
    console.log(req.query);
    var APIcall = url;
    for (var val in req.query) {
        if (req.query.hasOwnProperty(val)) {
            var element = req.query[val];
            APIcall += `${val}=${element}&`;
        }
    }
    console.log(APIcall);
    
    request(APIcall).then((data) => {
        console.log(data);

        res.json(data.results);
    }).catch((err) => {
        res.json(err);
    });

});

// router.get('/opentdb', (req, res) => {
//     const url = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple';
//     request(url).then((data) => {
//         console.log(data);

//         res.json(data.results);
//     }).catch((err) => {
//         res.json(err);
//     });

// });

export default router;