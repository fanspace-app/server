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
		fullName: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
			required: true,
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
		// socialWebLinks: [
		// 	{
		// 		type: String,
		// 		required: true,
		// 	},
		// ],
		profileImagesLinks: {
			profilePic: {
				type: String,
				required: true,
			},
			// coverImageLink: {
			// 	type: String,
			// 	required: true,
			// },
			// sampleImagesLinks: [
			// 	{
			// 		type: String,
			// 		required: true,
			// 	},
			// ],
		},
		// netMentorRating: {
		// 	type: Number,
		// 	default: null,
		// },
		mentorCalendarDates: [
			{
				dateSlotId: {
					type: mongoose.Schema.Types.ObjectId,
				},
				date: {
					type: Date,
					required: true,
				},
				timeSlots: [
					{
						timeSlotId: {
							type: mongoose.Schema.Types.ObjectId,
						},
						time: {
							type: Date,
							required: true,
						},
						isBooked: {
							type: Boolean,
							default: false,
						},
					},
				],
			},
		],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Mentors", mentorSchema);
