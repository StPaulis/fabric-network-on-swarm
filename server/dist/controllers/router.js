"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var controllers_1 = require("./controllers");
exports.default = express.Router()
    .post('/voting/vote', controllers_1.VotingController_vote_post)
    .get('/voting/:postId', controllers_1.VotingController_getByPostId_get);
//# sourceMappingURL=router.js.map