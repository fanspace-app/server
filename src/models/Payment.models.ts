import mongoose from "mongoose";
const Schema = mongoose.Schema;

const paymentSchema: mongoose.Schema<
	mongoose.Document<any, {}>,
	mongoose.Model<any, any>,
	undefined
> = new Schema(
	{
		menteeId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Users",
			required: true,
		},
		amount: {
			type: Number,
			required: true,
		},
		currency: {
			type: String,
			required: true,
		},
		otherDetails: {
			type: Object,
			required: true,
		},
		isPaymentSuccessful: {
			type: Boolean,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Payments", paymentSchema);
