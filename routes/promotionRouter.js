const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req,res,next) => {
        res.end('Will send all the promotions to you!');
    })
    .post((req,res,next) => {
        res.end('Will add the promotions: ' + req.body.description);
    })
    .put((req,res,next) => {
        res.statusCode = 403;
        res.end('Put operation not supported on /promotions');
    })
    .delete((req,res,next) => {
        res.end('Deleting all the promotions');
    });
module.exports = promotionRouter;