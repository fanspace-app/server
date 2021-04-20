import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema: mongoose.Schema<
	mongoose.Document<any, {}>,
	mongoose.Model<any, any>,
	undefined
> = new Schema(
	{
		emailId: {
			type: String,
			required: true,
		},

		profileRole: {
			// can be mentor or mentee
			type: String,
			default: "mentee",
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Users", userSchema);
