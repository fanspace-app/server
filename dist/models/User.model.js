"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    googleUid: {
        type: String,
        required: true,
    },
    emailId: {
        type: String,
        required: true,
    },
    profileRole: {
        // can be mentor or mentee
        type: String,
        default: "mentee",
    },
}, {
    timestamps: true,
});
module.exports = mongoose_1.default.model("Users", userSchema);
