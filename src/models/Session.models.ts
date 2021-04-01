import mongoose from "mongoose";
const Schema = mongoose.Schema;

const sessionSchema: mongoose.Schema<
	mongoose.Document<any, {}>,
	mongoose.Model<any, any>,
	undefined
> = new Schema(
	{
		mentorId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Users",
		},
		menteeId: {
			type: mongoose.Schema.Types.ObjectId,
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
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Sessions", sessionSchema);
