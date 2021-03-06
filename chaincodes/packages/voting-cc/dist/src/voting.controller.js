"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_1 = require("@worldsibu/convector-core");
var voting_model_1 = require("./voting.model");
var VotingController = (function (_super) {
    tslib_1.__extends(VotingController, _super);
    function VotingController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VotingController.prototype.vote = function (voting) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var stub, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("***Voting started ( " + JSON.stringify(voting, null, 2) + " )***");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        stub = this.tx.stub.getStub();
                        voting.id = stub.getTxID();
                        voting.created = Date.now();
                        voting.modified = Date.now();
                        voting.sender = this.sender;
                        return [4, voting.save()];
                    case 2:
                        _a.sent();
                        this.tx.stub.setEvent('TxSuccess', voting);
                        console.log("***Voting finished ( " + JSON.stringify(voting, null, 2) + " )***");
                        return [3, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log("***Voting finished with error ( " + JSON.stringify(error_1, null, 2) + " )***");
                        return [3, 4];
                    case 4: return [2, voting.id];
                }
            });
        });
    };
    VotingController.prototype.getByPostId = function (postId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var votes, result, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        votes = [];
                        result = [];
                        console.log("***Get Votes by PostId (" + postId + ") started***");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, voting_model_1.Voting.query(voting_model_1.Voting, {
                                "selector": {
                                    "postId": postId
                                }
                            })];
                    case 2:
                        votes = (_a.sent());
                        result = votes.map(function (x) { return x.toJSON(); });
                        console.log("***Get Votes by PostId (" + postId + ") finished***");
                        return [3, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.log("***Get Votes by PostId return error (" + JSON.stringify(error_2, null, 2) + ") finished***");
                        return [3, 4];
                    case 4: return [2, result];
                }
            });
        });
    };
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(voting_model_1.Voting))
    ], VotingController.prototype, "vote", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string()))
    ], VotingController.prototype, "getByPostId", null);
    VotingController = tslib_1.__decorate([
        convector_core_1.Controller('voting')
    ], VotingController);
    return VotingController;
}(convector_core_1.ConvectorController));
exports.VotingController = VotingController;
//# sourceMappingURL=voting.controller.js.map