"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const sessionSchema = new Schema({
    mentorId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Users",
    },
    menteeId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Users",
    },
    sessionDate: {
        type: Date,
        required: true,
    },
    paymentDetails: {
        amount: {
            type: Number,
            required: true,
        },
        currency: {
            type: String,
            required: true,
        },
    },
    meetLink: {
        type: String,
        required: true,
    },
    preSessionDoubts: {
        type: String,
        required: true,
    },
    sessionRating: {
        type: Number,
        default: null,
    },
    sessionFeedback: {
        type: String,
        default: null,
    },
    ratingToMentor: {
        type: Number,
        default: null,
    },
    mentorFeedback: {
        type: String,
        default: null,
    },
}, {
    timestamps: true,
});
module.exports = mongoose_1.default.model("Sessions", sessionSchema);
