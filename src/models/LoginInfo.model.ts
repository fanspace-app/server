import mongoose from "mongoose";
const Schema = mongoose.Schema;

const loginInfoSchema: mongoose.Schema<
	mongoose.Document<any, {}>,
	mongoose.Model<any, any>,
	undefined
> = new Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Users",
		},
		ipAddress: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("LoginInfo", loginInfoSchema);
