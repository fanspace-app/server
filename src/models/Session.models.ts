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
			required: true,
		},
		menteeId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Users",
			required: true,
		},
		sessionTimeDetails: {
			type: Date,
			required: true,
		},
		paymentDetails: {
			paymentId: {
				type: mongoose.Schema.Types.ObjectId,
				required: true,
				ref: "Payments",
			},
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
		sessionPostponedDetails: {
			isPostponed: {
				type: Boolean,
				default: false,
			},
			newSessionId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Sessions",
				default: null,
			},
		},
		// preSessionDoubts: {
		// 	type: String,
		// 	required: true,
		// },
		// sessionRating: {
		// 	type: Number,
		// 	default: null,
		// },
		// sessionFeedback: {
		// 	type: String,
		// 	default: null,
		// },
		// ratingToMentor: {
		// 	type: Number,
		// 	default: null,
		// },
		// mentorFeedback: {
		// 	type: String,
		// 	default: null,
		// },
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Sessions", sessionSchema);
