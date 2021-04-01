import mongoose from "mongoose";
const Schema = mongoose.Schema;

const menteeSchema: mongoose.Schema<
	mongoose.Document<any, {}>,
	mongoose.Model<any, any>,
	undefined
> = new Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Users",
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Mentees", menteeSchema);
