"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const clickAnalyticsSchema = new Schema({
    mentorId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Users",
    },
    menteeId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Users",
    },
}, {
    timestamps: true,
});
module.exports = mongoose_1.default.model("ClickAnalytics", clickAnalyticsSchema);
