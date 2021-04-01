"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const mentorSchema = new Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Users",
    },
    videoCallPrice: {
        type: Number,
        required: true,
    },
    experticeDomains: [
        {
            type: String,
            required: true,
        },
    ],
    profileCredentials: {
        type: String,
        required: true,
    },
    profileDescription: {
        type: String,
        required: true,
    },
    socialWebLinks: [
        {
            type: String,
            required: true,
        },
    ],
    profileImagesLinks: {
        profilePic: {
            type: String,
            required: true,
        },
        coverImageLink: {
            type: String,
            required: true,
        },
        sampleImagesLinks: [
            {
                type: String,
                required: true,
            },
        ],
    },
    netMentorRating: {
        type: Number,
        default: null,
    },
    mentorCalendarDates: [
        {
            type: Date,
            required: true,
        },
    ],
}, {
    timestamps: true,
});
module.exports = mongoose_1.default.model("Mentors", mentorSchema);
