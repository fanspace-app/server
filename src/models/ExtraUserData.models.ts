import mongoose from "mongoose";
const Schema = mongoose.Schema;

const extraUserDataSchema: mongoose.Schema<
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
		actionType: {
			// login || logout || refresh
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("ExtraUserData", extraUserDataSchema);
