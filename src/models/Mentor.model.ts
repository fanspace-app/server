import mongoose from "mongoose";
const Schema = mongoose.Schema;

const mentorSchema: mongoose.Schema<
	mongoose.Document<any, {}>,
	mongoose.Model<any, any>,
	undefined
> = new Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
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
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Mentors", mentorSchema);
