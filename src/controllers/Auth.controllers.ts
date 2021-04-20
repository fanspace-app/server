import { Request, Response, NextFunction } from "express";
import { handleMessage, signJWT } from "../helpers";
import { Users, Mentees } from "../models";

interface messageHandlerObject {
	type: string;
	status: number;
	message: string;
	payload: any;
}

interface reqBody {
	fullName: string;
	googleUid: string;
	emailId: string;
	slug: string;
}

async function handleAuth(req: Request, res: Response, next: NextFunction) {
	let { fullName, emailId }: reqBody = req.body;

	if (!fullName || !emailId) {
		const errorObj: messageHandlerObject = handleMessage(
			"INVALID_REQUEST_SYNTAX",
			{}
		);
		return res.status(errorObj.status).json(errorObj);
	}

	fullName = fullName.toLowerCase();
	emailId = emailId.toLowerCase();

	try {
		const existingUser = await Users.findOne({ emailId });
		if (existingUser) {
			const token: string = signJWT(existingUser);
			let payloadObject: object = {
				token: token,
				user: existingUser,
			};
			const messageObj: messageHandlerObject = handleMessage(
				"REQUEST_SUCCESS",
				payloadObject
			);
			return res.status(messageObj.status).json(messageObj);
		} else {
			//Create a mentee by default
			const newMentee = new Users({ emailId });
			try {
				const savedMenteeInUsersTable = await newMentee.save();
				const addToMenteeTable = new Mentees({
					userId: savedMenteeInUsersTable._id,
					fullName: fullName,
				});
				const savedMentee = await addToMenteeTable.save();
				const token: string = signJWT(savedMenteeInUsersTable);
				let payloadObject: object = {
					token: token,
					user: savedMenteeInUsersTable,
				};
				const messageObj: messageHandlerObject = handleMessage(
					"RESOURCE_CREATED",
					payloadObject
				);
				return res.status(messageObj.status).json(messageObj);
			} catch (err) {
				return res.status(500).json({ error: err });
			}
		}
	} catch (err) {
		return res.status(500).json({ error: err });
	}
}

// async function createMentor(req: Request, res: Response, next: NextFunction) {}

export { handleAuth };
