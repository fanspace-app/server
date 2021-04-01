import mongoose from "mongoose";
const Schema = mongoose.Schema;

const clickAnalyticsSchema: mongoose.Schema<
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
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("ClickAnalytics", clickAnalyticsSchema);
