"use strict";
exports.__esModule = true;
/**
 * Public Routes are those API url's that anyone can request
 * whout having to be logged in, for example:
 *
 * POST /user is the endpoint to create a new user or "sign up".
 * POST /token can be the endpoint to "log in" (generate a token)
 */
var express_1 = require("express");
var utils_1 = require("./utils");
var actions_1 = require("./actions");
var actions_2 = require("./actions");
var router = express_1.Router();
// signup route, creates a new user in the DB
//POST
router.post('/user', utils_1.safe(actions_1.createUser));
router.post('/login', utils_1.safe(actions_2.login));
//GET
router.get('/planets', utils_1.safe(actions_1.getPlanets));
router.get('/characters', utils_1.safe(actions_1.getCharacters));
exports["default"] = router;
