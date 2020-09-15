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
            var stub;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stub = this.tx.stub.getStub();
                        voting.id = stub.getTxID();
                        voting.created = Date.now();
                        voting.modified = Date.now();
                        voting.sender = this.sender;
                        return [4, voting.save()];
                    case 1:
                        _a.sent();
                        this.tx.stub.setEvent('TxSuccess', voting);
                        return [2, voting.id];
                }
            });
        });
    };
    VotingController.prototype.getByPostId = function (postId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var votes;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, voting_model_1.Voting.query({ postId: postId })];
                    case 1:
                        votes = _a.sent();
                        return [2, votes.map(function (x) { return x.toJSON(); })];
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