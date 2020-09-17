"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convector_1 = require("../convector");
function VotingController_vote_post(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, result, ex_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    params = req.body;
                    console.log('Request Params:', params);
                    return [4, convector_1.VotingControllerBackEnd.vote(params)];
                case 1:
                    result = _a.sent();
                    res.status(200).send(result);
                    return [3, 3];
                case 2:
                    ex_1 = _a.sent();
                    console.log('Error post VotingController_vote', ex_1.stack);
                    res.status(500).send(ex_1);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.VotingController_vote_post = VotingController_vote_post;
function VotingController_getByPostId_get(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, result, ex_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    params = req.params.postId;
                    console.log('Request params: ', params);
                    return [4, convector_1.VotingControllerBackEnd.getByPostId(params)];
                case 1:
                    result = _a.sent();
                    res.status(200).send(result);
                    return [3, 3];
                case 2:
                    ex_2 = _a.sent();
                    console.log('Error post VotingController_vote', ex_2.stack);
                    res.status(500).send(ex_2);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.VotingController_getByPostId_get = VotingController_getByPostId_get;
//# sourceMappingURL=controllers.js.map