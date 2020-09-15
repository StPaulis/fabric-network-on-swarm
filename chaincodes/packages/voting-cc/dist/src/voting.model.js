"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_model_1 = require("@worldsibu/convector-core-model");
var Voting = (function (_super) {
    tslib_1.__extends(Voting, _super);
    function Voting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'io.worldsibu.blockchainVote';
        return _this;
    }
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required()
    ], Voting.prototype, "type", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Validate(yup.string())
    ], Voting.prototype, "id", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Voting.prototype, "postId", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Validate(yup.string())
    ], Voting.prototype, "postIdType", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Validate(yup.string())
    ], Voting.prototype, "questionId", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Validate(yup.string())
    ], Voting.prototype, "questionIdType", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Voting.prototype, "answerId", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Validate(yup.string())
    ], Voting.prototype, "answerIdType", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Voting.prototype, "userId", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Validate(yup.string())
    ], Voting.prototype, "userIdType", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Voting.prototype, "sender", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Validate(yup.string())
    ], Voting.prototype, "metadata", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Validate(yup.number())
    ], Voting.prototype, "created", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Validate(yup.number())
    ], Voting.prototype, "modified", void 0);
    return Voting;
}(convector_core_model_1.ConvectorModel));
exports.Voting = Voting;
//# sourceMappingURL=voting.model.js.map